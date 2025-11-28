'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "@/schemas/auth/registerSchema";
import { Title } from "@/app/components/typography";
import { NameField, EmailField, PassField, PhoneField, SubmitButton, FooterAuth } from "../components/fields"
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/api/setting";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "@/providers/authProvider";
export default function Register() {
    const router = useRouter();
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<registerSchemaType>({
        resolver: zodResolver(registerSchema)
    });


    const handleRegister = async (data: registerSchemaType) => {
        const APIURL = `/register?first_name=${data.name}&email=${data.email}&password=${data.password}&phone=${data.phone}`;
        try {
            const response = await axios.post(`${BASE_URL}${APIURL}`);
            if (response?.data?.response === false) {
                toast.error(response?.data?.messages?.[0] || "Registration failed");
            } else if (response?.data?.response) {
                const token = response.data.data.token;
                const userData = response.data.data.user;
                login(token, userData);
                toast.success("Login Register");
                router.push("/");
            }
        } catch (error: any) {
            toast.error(error?.message || "An error occurred during registration");
            console.error("Error registering: ", error);
        }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form
                onSubmit={handleSubmit(handleRegister)}
                className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-200"
            >
                <Title text="Sign Up" className="mb-6 text-center" />
                {/* form */}
                <NameField register={register} errors={errors} />
                <EmailField register={register} errors={errors} />
                <PassField register={register} errors={errors} />
                <PhoneField register={register} errors={errors} />
                <SubmitButton register={true} isSubmitting={isSubmitting} />

                <FooterAuth login={false} />
            </form>
        </div>
    )
}
