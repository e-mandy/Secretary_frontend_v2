import z from "zod";

const MIMES_TYPE = ["application/pdf"];

export const defenseReportSchema = z.object({
  owner: z.string().refine((owner) => {
    return !/\d/.test(owner);
  }),
  theme: z.string().max(1000),
  defense_date: z.iso.date(),
  note: z.number().min(10).max(20),
  filiere: z.enum(["Master", "Licence"]),
  option: z.enum(["AL", "SI", "SRC", "IA"]),
  file: z
    .instanceof(File, { message: "Le fichier est obligatoire." })
    .refine((file) => MIMES_TYPE.includes(file.type)),
});

export type DefenseReportType = z.infer<typeof defenseReportSchema>;
