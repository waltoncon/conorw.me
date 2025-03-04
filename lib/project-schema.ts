import { z } from "zod";
import { builtWith, BuiltWithKey } from "./built-with";

export type Project = z.infer<typeof projectSchema>;

export const projectSchema = z.object({
  name: z.string(),
  summary: z.string().optional(),
  description: z.string().optional(),
  href: z.string(),
  prettyUrl: z.string(),
  badge: z.string().optional(),
  builtWith: z
    .custom<BuiltWithKey>(
      (val) => val in builtWith,
      (val) => ({
        message: `Invalid build-with key, received ${val}`,
      }),
    )
    .array()
    .optional(),
});
