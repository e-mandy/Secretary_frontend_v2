import z from 'zod';

const emailVerifyDataSchema = z.object({
    id: z.string(),
    hash: z.string(),
    expires: z.string(),
    signature: z.string()
});

export type EmailVerifyData = z.infer<typeof emailVerifyDataSchema>;