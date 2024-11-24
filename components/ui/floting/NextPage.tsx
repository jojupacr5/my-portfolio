'use client'
import { titleFont } from "@/config/fonts"
import { Link } from "@nextui-org/link"
import clsx from "clsx"
import { BsArrowRight } from "react-icons/bs"

export const NextPage = () => {
  return (
    <div className="w-auto mb-4">
      <Link href="/about" className={
        clsx(
          titleFont.variable, 
          "flex flex-col items-end font-title relative"
        )
      }>
        <BsArrowRight className="w-11 h-11 fill-secondary dark:fill-white-primary absolute -top-8"/>
        <span  className={`text-xl text-secondary dark:text-white-primary`}>
          about me
        </span>
      </Link>
    </div>
  )
}