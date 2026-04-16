import z from "zod";
import { fileSchema } from "./professeur_files.schema";

export const professorSchema = z.object({
  id: z.string(),
  email: z.email(),
  lastname: z.string(),
  firstname: z.string(),
  documents: z.array(fileSchema).nullable(),
});

export type ProfessorType = z.infer<typeof professorSchema>;
