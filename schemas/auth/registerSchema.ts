import { z } from "zod";
import { emailSchema, nameSchema, passSchema, phoneSchema } from "..";

export const registerSchema = z.object({
    ...nameSchema,
    ...emailSchema,
    ...passSchema,
    ...phoneSchema
})


export type registerSchemaType = z.infer<typeof registerSchema>