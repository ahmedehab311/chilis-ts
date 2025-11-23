'use client'
import Label from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { User } from "lucide-react";
type NameFieldProps<T extends FieldValues> = {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
};
export default function NameField<T extends FieldValues>({
    register,
    errors,
}: NameFieldProps<T>) {
    return (
        <div className="mb-4">
            <Label text="Name" />
            <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name" as any)}
                    className={` pl-10 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{String(errors.name.message)}</p>}
        </div>

    )
}
