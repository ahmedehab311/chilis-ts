'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginSchemaType } from "@/schemas/auth/loginSchema";
import { SmallTitle, Title } from "@/app/components/typography";
import { EmailField, PassField, SubmitButton, FooterAuth } from "../components/fields"
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@/providers/authProvider";
import { useEffect } from "react";

export default function Login() {
    const router = useRouter();
    const { login, setToken, setUser } = useAuth();
    useEffect(() => {
        setToken(null);
        setUser(null); localStorage.removeItem("token");
        localStorage.removeItem("user");
    }, [])
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<loginSchemaType>({
        resolver: zodResolver(loginSchema)
    })

    const hangleLogin = async (data: loginSchemaType) => {
        const APIURL = `/login?&password=${data.password}&email=${data.email}`;
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${APIURL}`);
            if (response?.data?.response === false) {
                toast.error(response?.data?.messages || "login failed");
            } else if (response?.data?.response) {
                const token = response.data.data.token;
                const userData = response.data.data.user;
                login(token, userData);
                toast.success("login successful");
                router.push("/");
            }
        } catch (error: any) {
            toast.error(error?.message || "An error occurred during registration");
            console.error("Error registering: ", error);
        }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit(hangleLogin)}
                className="w-full max-w-md bg-white px-4  rounded-xl shadow-lg border border-gray-200"
            >
                <SmallTitle text="Sign in" className="my-4 text-center" />

                <EmailField register={register} errors={errors} />
                <PassField register={register} errors={errors} />

                <SubmitButton register={false} isSubmitting={isSubmitting} />
                <FooterAuth login={true} />

            </form>
        </div>
    )
}
