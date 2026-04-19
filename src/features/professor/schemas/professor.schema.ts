import z from "zod";
import { fileSchema } from "./professeur_files.schema";

export const professorSchema = z.object({
  email: z.email(),
  lastname: z.string(),
  firstname: z.string(),
  matters: z.array(),
});

export type ProfessorType = z.infer<typeof professorSchema>;
