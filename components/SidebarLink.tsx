"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = { Settings, User, Grid, Calendar };
export type IconTypes = "Settings" | "User" | "Grid" | "Calendar";
export interface SideBarLinkProps {
  icon: IconTypes;
  link: string;
  label: string;
}
const SidebarLink = ({ link, icon, label }: SideBarLinkProps) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link) {
    isActive = true;
  }

  const Icon = icons[icon];
  return (
    <Link href={link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
