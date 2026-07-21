"use client";

import type { AnchorHTMLAttributes } from "react";
import { track } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: Parameters<typeof track>[0];
  eventParams?: Record<string, unknown>;
};

export function TrackedLink({
  event,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event, eventParams);
        onClick?.(e);
      }}
    />
  );
}
