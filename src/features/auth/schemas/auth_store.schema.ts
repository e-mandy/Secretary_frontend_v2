import z from "zod";

const userSchema = z.object({
    lastname: z.string(),
    firstname: z.string(),
    email: z.email(),
    role: z.enum(["secretariat", "administration"]).nullable()
});

const authStoreSchema = z.object({
    user: userSchema.nullable(),
    token: z.string().nullable()
});

export type UserApiResponse = {
    user: UserType,
    token: string
}

export type UserType = z.infer<typeof userSchema>;

export type AuthStoreType = z.infer<typeof authStoreSchema> & {
    setAuthStore: (data: UserApiResponse) => void
}
