import { z } from "zod";
import { emailSchema, passSchema } from "..";

export const loginSchema = z.object({
    ...emailSchema,
    ...passSchema,
})
export type loginSchemaType = z.infer<typeof loginSchema>;