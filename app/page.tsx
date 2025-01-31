import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { CustomSpan } from "@/components";
import { titleFont } from "@/config/fonts";


export default function Home() {
  return (
    
    <section className="place-self-center relative col-start-1 col-end-13 sm:my-0 sm:col-start-2 sm:col-end-11">
      <CustomSpan text="<html>" ml="-ml-2 md:-ml-3" />
      <CustomSpan text="<body>" mb="mb-6" />

      <div className="relative max-w-[350px] sm:max-w-[500px] md:max-w-[590px] lg:max-w-[780px]">
        <CustomSpan text="<h1>" />
        
        <h1 className={clsx(
          "leading-none text-6xl md:text-7xl lg:text-8xl text-secondary dark:text-white-primary font-title",
          titleFont.variable
        )}>
          Hello 
          <hr className="border-none mb-0 md:mb-4" /> 
          I&apos;m <span className="text-primary">Joseph</span> 
          <hr className="border-none mb-0 md:mb-4" />  
          Web Developer
        </h1>

        <CustomSpan text="</h1>" />
      </div>

      <div className="relative max-w-[320px] md:max-w-[355px] mt-8 mb-12">
        <CustomSpan text="<p>" />
        <p className="text-lg md:text-xl text-secondary dark:text-white-primary">Especialized in <span className="text-primary">Frontend</span> development</p>    
        <CustomSpan text="</p>" /> 
      </div>

      <div>
        <Link className="px-6 py-2 mr-6 border border-secondary dark:border-primary text-secondary dark:text-white-primary hover:border-primary hover:bg-white-secondary dark:hover:bg-primary transition-all" href="/projects">
          Projects
        </Link>
        <Link isExternal href="https://www.linkedin.com/in/joseph-paucar/" className="py-0 px-1 group relative border-black-secondary text-secondary dark:text-white-primary">
          <div className="w-0 h-[1px] transition-all group-hover:w-full bg-primary dark:bg-primary absolute bottom-0 left-0" />
          View CV
        </Link>
      </div> 

      {/* <div className="block sm:hidden mt-12 mb-24 col-start-1 col-end-13 sm:my-0 sm:-mt-10 ">
        <AboutMe />
        <AlsoMe />
      </div> */}
    </section>
  );
}
