import z from 'zod';

const passwordRules = z.string().min(8, "Le mot de passe doit avoir un minimum de 8 caractères avec une majuscule et un chiffre").regex(/[A-Z]/).regex(/[0-9]/);

export const registerSchema = z.object({
    lastname: z.string(),
    firstname: z.string(),
    email: z.email(),
    password: passwordRules,
    password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
    message: "Le password ne correspond au précédent",

    path: ['password_confirmation']
});

export type RegisterUser = z.infer<typeof registerSchema>;