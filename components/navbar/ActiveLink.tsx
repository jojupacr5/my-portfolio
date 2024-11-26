'use client'
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";


interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text}: Props) => {

  const pathName = usePathname();

  return (
    <NavbarItem>
      <Link
        className={clsx(
          'text-secondary dark:text-white-primary relative group',
          (pathName === path) && '!text-primary !font-medium'
        )}
        href={path}
      >
        <span className="w-0 h-[1px] transition-all group-hover:w-full bg-primary dark:bg-primary absolute bottom-0 left-0" />
        {text}
      </Link>
    </NavbarItem>
  )
}
