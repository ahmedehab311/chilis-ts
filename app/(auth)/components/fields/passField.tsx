'use client'
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type PassFieldProps<T extends FieldValues> = {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    // setShowPass: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function PassField<T extends FieldValues>({
    register,
    errors,

}: PassFieldProps<T>) {
    const [showPass, setShowPass] = useState<boolean>(false)
    return (
        <div className="mb-4">
            <Label>Password</Label>
            <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

                <Input
                    type={showPass ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password" as any)}
                    className={` pl-10  ${errors.password ? "border-red-500" : "border-gray-300"}`}
                />

                <button
                    type="button"
                    onClick={() => setShowPass((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 "
                >
                    {showPass ? <EyeOff size={20} className="bg-transparent" /> : <Eye size={20} className="bg-transparent" />}
                </button>
            </div>

            {errors.password && (
                <p className="text-red-500 text-sm mt-1">{String(errors.password.message)}</p>
            )}
        </div>
    )
}
