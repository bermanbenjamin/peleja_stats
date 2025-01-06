import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function PageWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl lg:px-10 px-4", className)}
    >
      {children}
    </div>
  );
}
