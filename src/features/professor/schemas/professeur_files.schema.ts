import z from "zod";

export const fileSchema = z.object({
  id: z.string(),
  name: z.string(),
  file: z.file(),
  extension: z.string(),
  size: z.number(),
});

export type FileType = z.infer<typeof fileSchema>;
