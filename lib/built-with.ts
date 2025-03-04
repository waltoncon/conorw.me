import {
  type IconType,
  SiBun,
  SiBunHex,
  SiJavascript,
  SiJavascriptHex,
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
  SiVite,
  SiViteHex,
  SiVuedotjs,
  SiVuedotjsHex,
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
  javascript: {
    name: "JavaScript",
    icon: SiJavascript,
    color: SiJavascriptHex,
  },
  nodejs: {
    name: "Node.JS",
    icon: SiNodedotjs,
    color: SiNodedotjsHex,
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
});

export type BuiltWithKey = keyof typeof builtWith;
