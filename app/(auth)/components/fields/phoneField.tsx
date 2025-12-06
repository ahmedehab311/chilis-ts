'use client'
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type PhoneFieldProps<T extends FieldValues> = {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
};
export default function PhoneField<T extends FieldValues>({
    register,
    errors,
}: PhoneFieldProps<T>) {
    return (
        <div className="mb-4">
            <Label>Phone</Label>
            <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                    type="text"
                    placeholder="Enter your phone"
                    {...register("phone" as any)}
                    className={`w-full pl-10 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{String(errors.phone.message)}</p>}
        </div>
    )
}
