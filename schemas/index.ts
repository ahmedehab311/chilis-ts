import { z } from "zod"

export const nameSchema = {
    name: z.string().min(3, "Name must be at least 2 characters long")
}

export const emailSchema = {
    email: z.email("Invaild email address")
}

export const passSchema = {
    password: z.string().min(6, "Password must be at least 6 characters long")
}

export const phoneSchema = {
    phone: z.string().min(5, "phone must be at least 5 number")
}