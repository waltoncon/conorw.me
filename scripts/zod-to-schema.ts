import { projectSchema } from "@/lib/project-schema";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { zodToJsonSchema } from "zod-to-json-schema";

const jsonSchema = zodToJsonSchema(projectSchema);
const outputFile = resolve(process.cwd(), "schemas/project.schema.json");
await mkdir(dirname(outputFile), { recursive: true });
await writeFile(outputFile, JSON.stringify(jsonSchema, null, 2));

console.log("Done");
