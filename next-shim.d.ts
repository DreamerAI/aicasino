declare module "next" {
  export interface Metadata {
    title?: string;
    description?: string;
  }
}

declare module "next/link" {
  import type { ComponentProps, ReactElement } from "react";
  export default function Link(props: ComponentProps<"a"> & { href: string }): ReactElement;
}

declare module "next/types.js" {
  export type ResolvingMetadata = unknown;
  export type ResolvingViewport = unknown;
}
