import { siteConfig } from "@/config/site"
import { CustomSpan } from "../ui/pages/CustomSpan"

export const AboutMe = () => {
  return (
    <>
      <CustomSpan text="josephpaucar@pc:~$" ml="-ml-2 md:-ml-3" variation={true} subtitle="nano about-me.txt"/>

      <p className="text-secondary dark:text-white-primary text-md mt-4 mb-2">
        { siteConfig.aboutMe[0] }
      </p>
      <p className="text-secondary dark:text-white-primary text-md mb-4">
        { siteConfig.aboutMe[1] }
      </p>
    </>
  )
}