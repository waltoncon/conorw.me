import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" {...props}>
    <path
      fill="currentColor"
      d="M71.5793 99.8656L120 16L240 223.849H0L48.4207 139.981L82.6726 159.756L68.5064 184.294H171.494L120 95.1068L105.834 119.644L71.5793 99.8656Z"
    />
  </svg>
);
export { SvgComponent as TriggerDotDevIcon };
