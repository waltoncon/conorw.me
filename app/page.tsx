import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquareIcon } from "lucide-react";

const projects = [
  {
    name: "Utilities",
    description: "A collection of client-side utilities.",
    href: "https://www.cew.sh/",
    prettyUrl: "cew.sh",
  },
  {
    name: "Doclet",
    description: "View documentation offline.",
    href: "https://doclet.cew.sh",
    prettyUrl: "doclet.cew.sh",
    badge: "pre-alpha",
  },
];

export default function Home() {
  return (
    <div className="grid min-h-screen items-end gap-16 p-4 pb-20 font-[family-name:var(--font-funnel-sans)] md:items-center md:justify-center md:p-8">
      <main className="flex flex-col items-center md:flex-row md:items-start md:gap-10">
        <div className="flex w-full max-w-80 flex-col gap-3 md:w-60">
          <div className="flex h-20 items-end justify-between">
            <h1 className="text-3xl">Conor Walton</h1>
            <ThemeToggle />
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full justify-start">
              <a href="https://github.com/waltoncon" target="_blank">
                GitHub
              </a>
            </Button>
            <div className="flex flex-row gap-px">
              <Button asChild className="flex-1 justify-start rounded-r-none">
                <a
                  href="https://www.linkedin.com/in/conorwalton/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </Button>
              <Button asChild className="rounded-l-none" size="icon">
                <a
                  href="https://www.linkedin.com/messaging/compose/?recipient=conorwalton"
                  target="_blank"
                >
                  <MessageSquareIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full max-w-80 flex-col gap-3 md:mt-0 md:w-80">
          <div className="flex items-end md:h-20">
            <h2 className="text-xl">Projects</h2>
          </div>
          {projects.map((project, index) => (
            <Card key={index} className="max-w-xs shadow-none">
              <CardHeader className="flex-row justify-between space-y-0 p-4 pb-0">
                <CardTitle>{project.name}</CardTitle>
                {project.badge && (
                  <Badge
                    className="ml-2 h-4 px-1.5 py-0 text-xs"
                    variant="outline"
                  >
                    {project.badge}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="flex flex-row items-baseline gap-4 p-4 py-2">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  asChild
                  className="ml-auto justify-start"
                  size="sm"
                  variant="ghost"
                >
                  <a href={project.href} target="_blank">
                    Go to {project.prettyUrl}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
