import clsx from "clsx";
import { PropsWithChildren } from "react";

interface CardProps {
  className: string;
}

const Card = ({ className, children }: PropsWithChildren<CardProps>) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
