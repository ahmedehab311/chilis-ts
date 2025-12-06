'use client'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { accountSchema, accountSchemaType } from "@/schemas/profile/accountSchema";
import { EmailField, NameField, PhoneField } from "@/app/(auth)/components/fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useAuth } from "@/providers/authProvider";
export default function AccountForm() {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } }
        = useForm<accountSchemaType>({
            resolver: zodResolver(accountSchema)
        })

    useEffect(() => {
        if (user) {
            reset({
                name: user.user_name,
                email: user.email,
                phone: user.phone,
            })
        }
    }, [user, reset])
    const handlUpdateProfile = async (data: accountSchemaType) => {
        console.log("data:", data);


        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/profile/update?name=mohamed coder&phone=011001100110&email=adm@admin.com&referral=chi2021`


    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>My Account</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(handlUpdateProfile)} className="">
                    <NameField register={register} errors={errors} name="name" />
                    <EmailField register={register} errors={errors} />
                    <PhoneField register={register} errors={errors} />

                    <div className="flex items-center gap-3">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className=" disabled:opacity-50 buttonCili"
                        >Save changes</Button>
                        <Link href='/change-password'>
                            <Button className=" bg-ChilisRed hover:bg-ChilisRedHover" >change passeord</Button>
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>

    )
}