import z from "zod";

export const matterSchema = z.object({
  name: z.string,
});

export type MatterType = z.infer<typeof matterSchema>;
