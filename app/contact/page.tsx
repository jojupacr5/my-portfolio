import clsx from "clsx";

import { CustomSpan } from "@/components";
import { titleFont } from "@/config/fonts";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";


export default function ContactPage() {
  return (
    <section className="place-self-center relative col-start-1 col-end-13 sm:my-0 sm:col-start-2 sm:col-end-11">

      <div className="relative max-w-[350px] sm:max-w-[500px] md:max-w-[590px] lg:max-w-[780px]">
        <CustomSpan text="<h2>" />
        <h2 className={clsx(
          "leading-none text-5xl md:text-7xl lg:text-8xl text-secondary dark:text-white-primary font-title",
          titleFont.variable
        )}>
          joseph.paucar<br/>@gmail.com
        </h2>
        <CustomSpan text="</h2>" />
      </div>

      <div className="relative mt-12 mb-6 text-secondary dark:text-white-primary text-md">
        <CustomSpan text="<p>" />
        <p className="mb-2">
          So, are you looking for a professional, communicative & adaptable software engineer with extensive web development skills?
        </p>
        <p className="mb-2">
          If you have an application you are interested in developing, a problem that needs to be solve or a project that needs rescuing, I'd love to help you with it.
        </p>
        <p>
          You can also message me on my socials: 
          <Link isExternal href={siteConfig.links.instagram} className="relative group mx-1">
            <span className="w-0 h-[1px] transition-all group-hover:w-full bg-primary dark:bg-primary absolute bottom-0 left-0" />
            Instagram
          </Link> 
          or 
          <Link isExternal href={siteConfig.links.linkedin} className="relative group ml-1">
            <span className="w-0 h-[1px] transition-all group-hover:w-full bg-primary dark:bg-primary absolute bottom-0 left-0" />
            LinkedIn
          </Link>. 
        </p>
        <CustomSpan text="</p>" />
      </div>

      <CustomSpan text="</html>" />
      <CustomSpan text="</body>" ml="-ml-2 md:-ml-3"/>
    </section>
  );
}
