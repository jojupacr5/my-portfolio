import clsx from "clsx";

import { CustomSpan } from "@/components";
import { titleFont } from "@/config/fonts";


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
        <CustomSpan text="</h2>" absolute="absolute -bottom-2 -right-5" />
      </div>

      <div className="relative my-10 text-secondary dark:text-white-primary text-md">
        <CustomSpan text="<p>" />
        <p className=" mb-2">
          So, are you looking for a professional, communicative & adaptable software engineer with extensive web development skills?
        </p>
        <p className="text-md mb-2">
          If you have an application you are interested in developing, a problem that needs to be solve or a project that needs rescuing, I'd love to help you with it.
        </p>
        <p className="text-md mb-2">
          You can also message me on my socials: <a href="">Instagram</a> or <a href="">LinkedIn</a>. 
        </p>
        <CustomSpan text="</p>" absolute="absolute -bottom-2 left-20" />
      </div>

      <CustomSpan text="</html>" />
      <CustomSpan text="</body>" ml="-ml-2 md:-ml-3"/>
    </section>
  );
}
