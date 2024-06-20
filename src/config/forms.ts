import { z } from "zod";

export const signUpFormSchema = z
  .object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email({ message: "Invalid email" }),
    username: z.string().min(4, { message: "At least 4 characters" }),
    // phone: z.string().regex(new RegExp(/^6[58792]\d{7}$/), {
    //   message: "Invalid Phone number",
    // }),
    password: z
      .string()
      .regex(new RegExp(/^(?=.*\d).{6,}$/), { message: "Not strong enaugh" }),
    repassword: z.string(),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Password does not matches",
    path: ["repassword"],
  })
  .refine((data) => !!data.firstName?.trim() || !!data.lastName?.trim(), {
    message: "Both last and first names can't be empty",
    path: ["firstName"],
  });

export const signInFormSchema = z.object({
  identifier: z
    .string({
      required_error: "Field required",
    })
    .trim()
    .min(1, { message: "Should not be empty" }),
  password: z
    .string({
      required_error: "Field required",
    })
    .min(1, { message: "Should not be empty" }),
});

export type SignUpFormSchemaType = z.infer<typeof signUpFormSchema>;

export type SingInFormSchemaType = z.infer<typeof signInFormSchema>;
