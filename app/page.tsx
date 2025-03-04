import ExtLink from "@/components/ext-link";
import ProjectCard from "@/components/project/project-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { loadProjects } from "@/lib/load-projects";
import { MessageSquareIcon } from "lucide-react";

export default async function Home() {
  const projects = await loadProjects();

  return (
    <div className="grid min-h-screen items-end gap-16 p-4 pb-20 font-[family-name:var(--font-funnel-sans)] md:items-center md:justify-center md:p-8">
      <main className="flex flex-col items-center md:flex-row md:items-start md:gap-10">
        <div className="flex w-full max-w-80 flex-col gap-3 md:w-60">
          <div className="flex h-20 items-end justify-between">
            <h1 className="text-3xl">Conor Walton</h1>
            <ThemeToggle />
          </div>
          <div className="flex flex-col gap-2">
            <ExtLink
              className="w-full justify-start"
              href="https://github.com/waltoncon"
            >
              GitHub
            </ExtLink>
            <div className="flex flex-row gap-px">
              <ExtLink
                className="flex-1 justify-start rounded-r-none"
                href="https://www.linkedin.com/in/conorwalton/"
              >
                LinkedIn
              </ExtLink>
              <ExtLink
                className="rounded-l-none"
                size="icon"
                href="https://www.linkedin.com/messaging/compose/?recipient=conorwalton"
              >
                <MessageSquareIcon />
              </ExtLink>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full max-w-80 flex-col gap-3 md:mt-0 md:w-80">
          <div className="flex items-end md:h-20">
            <h2 className="text-xl">Projects</h2>
          </div>
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
