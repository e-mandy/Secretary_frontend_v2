import z from "zod";

export const matterSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type MatterType = z.infer<typeof matterSchema>;
