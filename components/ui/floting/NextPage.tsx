'use client'
import { titleFont } from "@/config/fonts"
import { Link } from "@nextui-org/link"
import clsx from "clsx"
import { BsArrowRight } from "react-icons/bs"

export const NextPage = () => {
  return (
    <div className="w-full">
      <Link href="/about" className={
        clsx(
          titleFont.variable, 
          "bottom-4 right-4 flex flex-col items-end font-title"
        )
      }>
        <BsArrowRight className="w-11 h-11 fill-secondary dark:fill-white-primary -mb-2"/>
        <span  className={`text-xl text-secondary dark:text-white-primary`}>
          about me
        </span>
      </Link>
    </div>
  )
}