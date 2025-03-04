import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "../ui/button";
import BuiltWithBadge from "./build-with-badge";
import { Project } from "./project-card";

export function ProjectModal({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-auto justify-start" size="sm" variant="ghost">
          More info
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>
            <Link href={project.href} target="_blank">
              {project.prettyUrl}
            </Link>
          </DialogDescription>
        </DialogHeader>
        {project.description ? (
          <DialogDescription>{project.description}</DialogDescription>
        ) : null}
        <div className="flex flex-row gap-2 sm:justify-start">
          {project.builtWith?.map((builtWithKey) => {
            return <BuiltWithBadge key={builtWithKey} name={builtWithKey} />;
          })}
        </div>
        <DialogFooter>
          <Button asChild className="ml-auto justify-start">
            <Link href={project.href} target="_blank">
              Go to {project.prettyUrl}
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
