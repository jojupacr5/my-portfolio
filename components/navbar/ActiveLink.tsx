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
          'text-secondary dark:text-white-primary hover:!text-primary',
          (pathName === path) && '!text-primary !font-medium'
        )}
        href={path}
      >
        {text}
      </Link>
    </NavbarItem>
  )
}
