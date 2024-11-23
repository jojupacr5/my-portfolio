import { Link } from "@nextui-org/link"
import { FaLinkedin } from "react-icons/fa"

import { siteConfig } from "@/config/site"
import { GithubIcon, TwitterIcon } from "@/components/icons"


export const Socials = () => {
  return (
    <div className="absolute bottom-4 left-4 flex-col justify-center items-center hidden sm:flex gap-3 text-secondary dark:text-white-primary">
      <div className="w-1 bg-secondary dark:bg-white-primary h-12"></div>

      <Link isExternal aria-label="Github" href={siteConfig.links.github} className="text-secondary dark:text-white-primary hover:text-primary dark:hover:text-primary transition-all">
        <GithubIcon className="w-6 h-6" />
      </Link>

      <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin} className="text-secondary dark:text-white-primary hover:text-primary dark:hover:text-primary transition-all">
        <FaLinkedin className="w-6 h-6" />
      </Link>

      <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter} className="text-secondary dark:text-white-primary hover:text-primary dark:hover:text-primary transition-all">
        <TwitterIcon className="w-6 h-6" />
      </Link>
    </div>
  )
}