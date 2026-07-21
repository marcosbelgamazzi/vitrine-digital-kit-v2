"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function ViewTracker({
  event,
  eventParams,
}: {
  event: Parameters<typeof track>[0];
  eventParams?: Record<string, unknown>;
}) {
  useEffect(() => {
    track(event, eventParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
