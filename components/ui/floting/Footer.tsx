"use client"
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathName = usePathname();
  return (
    <div className={clsx(
      "justify-center items-center mb-4 text-secondary dark:text-white-primary",
      (pathName === "/contact") ? "flex" : "hidden"
    )}>
      <p>© Copyright Joseph Paucar 2024</p>
    </div>
  )
}