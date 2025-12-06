'use client'
import { Mail, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type EmailFieldProps<T extends FieldValues> = {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
};
export default function EmailField<T extends FieldValues>({
    register,
    errors,
}: EmailFieldProps<T>) {
    return (
        <div className="mb-4">
            <Label>Email</Label>
            <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email" as any)}
                    className={` pl-10  ${errors?.email ? "border-red-500" : "border-gray-300"}`}
                />
            </div>
            {errors?.email && <p className="text-red-500 text-sm mt-1">{String(errors?.email?.message)}</p>}
        </div>
    )
}
