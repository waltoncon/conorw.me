import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import "server-only";
import { unified } from "unified";
import { matter } from "vfile-matter";
import { Project, projectSchema } from "./project-schema";

async function parseMarkdown(value: string) {
  return await unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(() => (tree, file) => matter(file))
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(value);
}

export async function loadProjects() {
  const contentDir = resolve(process.cwd(), "content");
  const files = await readdir(contentDir);
  const projects: Project[] = [];

  for (const filePath of files) {
    const fileContent = await readFile(resolve(contentDir, filePath), "utf-8");
    const content = await parseMarkdown(fileContent);

    projects.push(
      projectSchema.parse({
        ...(content.data.matter ?? {}),
        description: content.value,
      }),
    );
  }

  return projects;
}
