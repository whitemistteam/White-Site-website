import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SiteContainerProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export default function SiteContainer({
  children,
  className = "",
  ...props
}: SiteContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
