'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginSchemaType } from "@/schemas/auth/loginSchema";
import { Title } from "@/app/components/typography";
import { EmailField, PassField, SubmitButton, FooterAuth } from "../components/fields"
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
