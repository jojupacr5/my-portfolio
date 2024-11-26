import { titleFont } from "@/config/fonts"
import clsx from "clsx"

export const Goals = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row my-4 px-4">
        <div className={clsx(
          "mb-2 text-md md:mb-0 flex-none w-40 uppercase font-title",
          titleFont.variable
        )}>
          Goals
        </div>
        <div className="grow">
          I ask a lot of questions to understand the problems my clients want to solve and the goals they want to achieve. I then create high-fidelity wireframes that aim to address those goals. Those wireframes get turned into visual interfaces, sometimes with subtle motion effects, to be prototyped and tested with real people.
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-4 px-4">
       <div className={clsx(
          "mb-2 text-md md:mb-0 flex-none w-40 uppercase font-title",
          titleFont.variable
        )}>
          Motivations
        </div>
        <div className="grow">
          I ask a lot of questions to understand the problems my clients want to solve and the goals they want to achieve. I then create high-fidelity wireframes that aim to address those goals. Those wireframes get turned into visual interfaces, sometimes with subtle motion effects, to be prototyped and tested with real people.
        </div>
      </div>
    </>
  )
}
