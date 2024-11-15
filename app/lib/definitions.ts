import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().min(2).trim(),
  email: z.string().email().trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .trim(),
});

export type RegisterFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  id: number;
  expiresAt: Date;
};
