import { z } from "zod";
import { emailSchema, nameSchema, phoneSchema } from "..";

export const accountSchema = z.object({
    ...nameSchema,
    ...emailSchema,
    ...phoneSchema
})

export type accountSchemaType = z.infer<typeof accountSchema>