import z from "zod";

export const fileSchema = z.object({
  id: z.string(),
  name: z.string(),
  file: z.file(),
  extension: z.string(),
  size: z.number(),
  progress: z.number().default(0),
});

export type FileType = z.infer<typeof fileSchema>;
