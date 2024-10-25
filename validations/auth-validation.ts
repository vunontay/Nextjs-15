import { requiredString } from "@/validations/util-validation";
import { z } from "zod";

export const registerSchema = z.object({
    email: requiredString.email("Invalid email address"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_-]+$/,
        "Only letters, numbers, - and _ allowed"
    ),
    password: requiredString.min(8, "Must be at least 8 characters"),
});

export type RegisterValues = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    username: requiredString,
    password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;
