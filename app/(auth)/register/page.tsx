'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "@/schemas/auth/registerSchema";
import { Title } from "@/app/components/typography";
import { NameField, EmailField, PassField, PhoneField, SubmitButton, FooterAuth } from "../components/fields"
export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<registerSchemaType>({
        resolver: zodResolver(registerSchema)
    });

    const handleRegister = async (data: registerSchemaType) => {
        console.log("register data:", data);

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
