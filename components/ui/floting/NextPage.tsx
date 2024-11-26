'use client'
import { usePathname } from "next/navigation";

import clsx from "clsx"
import { Link } from "@nextui-org/link"

import { BsArrowRight } from "react-icons/bs"
import { titleFont } from "@/config/fonts"

export const NextPage = () => {

  const pathName = usePathname();

  return (
    <div className="w-auto mb-4">
      <Link href="/about" className={
        clsx(
          titleFont.variable, 
          "flex flex-col items-end font-title relative group"
        )
      }>
        <div className="w-0 h-[2px] transition-all group-hover:w-full bg-primary dark:bg-primary absolute bottom-0 left-0" />
        <span  className={`text-xl text-secondary dark:text-white-primary`}>
          { (pathName === "/") && "about me" }
          { (pathName === "/about") && "projects" }
          { (pathName === "/projects") && "contact" }
        </span>
      </Link>
    </div>
  )
}