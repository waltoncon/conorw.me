import { ComponentProps } from "react";
import { Button } from "./ui/button";

export default function ExtLink({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
} & ComponentProps<typeof Button>) {
  return (
    <Button asChild {...props}>
      <a href={href} target="_blank">
        {children}
      </a>
    </Button>
  );
}
