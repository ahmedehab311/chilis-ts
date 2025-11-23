'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginSchemaType } from "@/schemas/auth/loginSchema";
import { Title } from "@/app/components/typography";
import { EmailField, PassField, SubmitButton, FooterAuth } from "../components/fields"
import axios from "axios";
import { BASE_URL } from "@/api/setting";
export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<loginSchemaType>({
        resolver: zodResolver(loginSchema)
    })

    const hangleLogin = async (data: loginSchemaType) => {
        console.log("login data:", data);

        // e.preventDefault();
        // setLoading(true);
        // const APIURL = `${BASE_URL}/login?password=${data.password}&email=${data.email}`;
        // try {
        //     const response = await axios.post(`${APIURL}`);
        //     console.log("Response Data:", response.data);

        //     if (response.data && response.data.data) {
        //         const token = response.data.data.token;
        //         const userData = response.data.data.user;

        //         if (token && userData) {
        //             setToken(token);
        //             localStorage.setItem("token", token);
        //             localStorage.setItem("user", JSON.stringify(userData));

        //             toast.success(t("loginPage.loginSuccess"));
        //             navigate("/");
        //             setLoading(false)
        //         } else {
        //             throw new Error(t("loginPage.tokenNotFound"));
        //         }
        //     } else {
        //         throw new Error(t("loginPage.loginFailed"));
        //     }
        // } catch (error) {
        //     const errorMessage =
        //         error.response?.data?.messages || t("loginPage.invalidCredentials");
        //     toast.error(errorMessage);
        //     console.error("Error logging in: ", errorMessage);
        // } finally {
        //     setLoading(false); // يوقف اللودينج سواء حصل نجاح أو خطأ
        // }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

            <form
                onSubmit={handleSubmit(hangleLogin)}
                className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-200"
            >
                <Title text="Sign in" className="mb-6 text-center" />

                <EmailField register={register} errors={errors} />
                <PassField register={register} errors={errors} />

                <SubmitButton register={false} isSubmitting={isSubmitting} />
                <FooterAuth login={true} />

            </form>
        </div>
    )
}
