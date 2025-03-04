import { builtWith, BuiltWithKey } from "@/lib/built-with";
import { textColorBasedOnBackground } from "@/lib/utils";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function BuiltWithBadge({ name }: { name: BuiltWithKey }) {
  const tool = builtWith[name];

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger
        className="rounded-md bg-red-500 p-1"
        style={{
          backgroundColor: tool.color,
          color: textColorBasedOnBackground(tool.color),
        }}
        asChild
      >
        {tool.url ? (
          <Link target="_blank" href={tool.url}>
            <tool.icon className="pointer-events-none size-6" />
          </Link>
        ) : (
          <div>
            <tool.icon className="pointer-events-none size-6" />
          </div>
        )}
      </TooltipTrigger>
      <TooltipContent>{tool.name}</TooltipContent>
    </Tooltip>
  );
}
