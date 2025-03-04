import { parse } from "@std/yaml";
import type { Root, RootContent } from "hast";
import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import rehypeRewrite from "rehype-rewrite";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import "server-only";
import { unified } from "unified";
import { Project, projectSchema } from "./project-schema";

function rewrite(node: Root | RootContent) {
  if (
    node.type === "element" &&
    node.tagName === "a" &&
    node.properties?.href
  ) {
    node.properties.target = "_blank";
    node.properties.rel = "noopener noreferrer";
  }
}

async function parseMarkdown(value?: string): Promise<string | undefined> {
  if (!value) {
    return undefined;
  }

  const vfile = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeRewrite, { rewrite })
    .use(rehypeStringify)
    .process(value);

  return vfile.value.toString();
}

export async function loadProjects() {
  const contentDir = resolve(process.cwd(), "content");
  const files = await readdir(contentDir);
  const projects: Project[] = [];

  for (const filePath of files) {
    const fileContent = await readFile(resolve(contentDir, filePath), "utf-8");
    const content = projectSchema.parse(parse(fileContent));

    projects.push({
      ...content,
      prettyUrl: content.prettyUrl ?? new URL(content.href).hostname,
      description: await parseMarkdown(content.description),
    });
  }

  return projects;
}
