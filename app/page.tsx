import { Button } from "@/components/ui/button";
import { MessageSquareIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-funnel-sans)] sm:p-20">
      <main className="row-start-2 flex grid-cols-2 flex-col md:grid md:gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex h-20 items-end">
            <h1 className="text-3xl">
              Conor
              <br />
              Walton
            </h1>
          </div>
          <div className="flex w-40 flex-col gap-2">
            <Button asChild className="w-full justify-start">
              <a href="https://github.com/waltoncon">GitHub</a>
            </Button>
            <div className="flex flex-row gap-px">
              <Button asChild className="flex-1 justify-start rounded-r-none">
                <a href="https://www.linkedin.com/conorwalton">LinkedIn</a>
              </Button>
              <Button asChild className="rounded-l-none" size="icon">
                <a href="https://www.linkedin.com/messaging/compose/?recipient=conorwalton">
                  <MessageSquareIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-40 flex-col gap-3 md:mt-0">
          <div className="flex items-end md:h-20">
            <h2 className="text-xl">Projects</h2>
          </div>
          <Button asChild className="w-full justify-start">
            <a href="https://www.cew.sh/">Utilities</a>
          </Button>
        </div>
      </main>
    </div>
  );
}
