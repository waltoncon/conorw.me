import {
  type IconType,
  SiBun,
  SiBunHex,
  SiDrizzle,
  SiDrizzleHex,
  SiJavascript,
  SiJavascriptHex,
  SiMarkdown,
  SiMarkdownHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNuxt,
  SiNuxtHex,
  SiReact,
  SiReactHex,
  SiShadcnui,
  SiShadcnuiHex,
  SiSurrealdb,
  SiSurrealdbHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiVercel,
  SiVercelHex,
  SiVite,
  SiViteHex,
  SiVuedotjs,
  SiVuedotjsHex,
  SiZod,
  SiZodHex,
} from "@icons-pack/react-simple-icons";
import { SVGProps } from "react";
import { TriggerDotDevIcon } from "./icons/trigger-dot-dev";

export interface BuiltWith {
  icon: IconType | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
  color: string;
  name: string;
  url?: string;
}

const createBuiltWith = <T extends string>(builtWith: Record<T, BuiltWith>) =>
  builtWith;

export const builtWith = createBuiltWith({
  bun: {
    name: "Bun",
    icon: SiBun,
    color: SiBunHex,
    url: "https://bun.sh",
  },
  drizzleorm: {
    name: "Drizzle ORM",
    icon: SiDrizzle,
    color: SiDrizzleHex,
    url: "https://orm.drizzle.team",
  },
  javascript: {
    name: "JavaScript",
    icon: SiJavascript,
    color: SiJavascriptHex,
  },
  markdown: {
    name: "Markdown",
    icon: SiMarkdown,
    color: SiMarkdownHex,
  },
  nodejs: {
    name: "Node.JS",
    icon: SiNodedotjs,
    color: SiNodedotjsHex,
  },
  nextjs: {
    name: "Next.js",
    icon: SiNextdotjs,
    color: SiNextdotjsHex,
    url: "https://nextjs.org",
  },
  nuxt: {
    name: "Nuxt",
    icon: SiNuxt,
    color: SiNuxtHex,
    url: "https://nuxt.com",
  },
  react: {
    name: "React",
    icon: SiReact,
    color: SiReactHex,
    url: "https://react.dev",
  },
  shadcnui: {
    name: "ShadcnUI",
    icon: SiShadcnui,
    color: SiShadcnuiHex,
    url: "https://ui.shadcn.com",
  },
  surrealdb: {
    name: "SurrealDB",
    icon: SiSurrealdb,
    color: SiSurrealdbHex,
    url: "https://surrealdb.com",
  },
  tailwindcss: {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: SiTailwindcssHex,
    url: "https://tailwindcss.com",
  },
  triggerdotdev: {
    name: "Tigger.dev",
    icon: TriggerDotDevIcon,
    color: "#41FF54",
    url: "https://trigger.dev",
  },
  typescript: {
    name: "TypeScript",
    icon: SiTypescript,
    color: SiTypescriptHex,
  },
  vercel: {
    name: "Vercel",
    icon: SiVercel,
    color: SiVercelHex,
    url: "https://vercel.com/home",
  },
  vite: {
    name: "Vite",
    icon: SiVite,
    color: SiViteHex,
    url: "https://vite.dev",
  },
  vue: {
    name: "Vue",
    icon: SiVuedotjs,
    color: SiVuedotjsHex,
    url: "https://vuejs.org",
  },
  zod: {
    name: "Zod",
    icon: SiZod,
    color: SiZodHex,
    url: "https://zod.dev",
  },
});

export type BuiltWithKey = keyof typeof builtWith;
