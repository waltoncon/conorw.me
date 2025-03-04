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
import { BuiltWithKey } from "@/lib/built-with";
import Link from "next/link";
import { ProjectModal } from "./project-modal";

export interface Project {
  name: string;
  summary?: string;
  description?: string;
  href: string;
  prettyUrl: string;
  badge?: string;
  builtWith?: BuiltWithKey[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="max-w-xs shadow-none">
      <CardHeader className="flex-row justify-between space-y-0 p-4 pb-0">
        <CardTitle>{project.name}</CardTitle>
        {project.badge ? (
          <Badge className="ml-2 h-4 px-1.5 py-0 text-xs" variant="outline">
            {project.badge}
          </Badge>
        ) : null}
      </CardHeader>
      <CardContent className="flex flex-row items-baseline gap-4 p-4 py-2">
        <CardDescription>{project.summary}</CardDescription>
      </CardContent>
      <CardFooter className="flex-col p-4 pt-0">
        <Button
          asChild
          className="ml-auto justify-start"
          size="sm"
          variant="ghost"
        >
          <Link href={project.href} target="_blank">
            Go to {project.prettyUrl}
          </Link>
        </Button>

        <ProjectModal project={project}></ProjectModal>
      </CardFooter>
    </Card>
  );
}
