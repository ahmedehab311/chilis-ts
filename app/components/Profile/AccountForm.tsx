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
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "./api";
import { toast } from "react-toastify";
export default function AccountForm() {
    const { user, updateAuth} = useAuth()


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

    const { mutate, isPending } = useMutation({
        mutationFn: updateProfile,
        onSuccess: (res) => {
            // console.log("updated ✅", res?.data?.message);
            // console.log("updated ✅", res);
            const newToken = res.data.data?.token;
            const newUser = res.data.data?.user;

            updateAuth(newToken, newUser)
            toast.success("Profile updated");
        }, onError: (err) => {
            console.error("update failed ❌", err);
        }
    })

    const handlUpdateProfile = async (data: accountSchemaType) => {
        console.log("data:", data);
        mutate({ data })
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
                            disabled={isSubmitting || isPending}
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