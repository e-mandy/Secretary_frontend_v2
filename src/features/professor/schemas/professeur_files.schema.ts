import z from "zod";

export const fileSchema = z.object({
  id: z.string(),
  name: z.string(),
  file: z.instanceof(File),
  extension: z.string(),
  size: z.number(),
  progress: z.number(),
});

export type FileType = z.infer<typeof fileSchema>;
