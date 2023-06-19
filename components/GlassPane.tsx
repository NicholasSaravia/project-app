import clsx from "clsx";
import { PropsWithChildren } from "react";

interface GlassPaneProps {
  className?: string;
}

export const GlassPane = ({
  children,
  className,
}: PropsWithChildren<GlassPaneProps>) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};
