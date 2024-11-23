import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { AboutMe, AlsoMe, CustomSpan } from "@/components";
import { titleFont } from "@/config/fonts";


export default function Home() {
  return (
    
    <section className="place-self-center relative col-start-1 col-end-13 sm:my-0 sm:col-start-2 sm:col-span-11">
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

        <CustomSpan text="</h1>" absolute="absolute -bottom-2 -right-5" />
      </div>

      <div className="relative max-w-[320px] md:max-w-[355px] mt-8 mb-12">
        <CustomSpan text="<p>" />
        <p className="text-lg md:text-xl text-secondary dark:text-white-primary">Especialized in <span className="text-primary">Frontend</span> development</p>    
        <CustomSpan text="</p>" absolute="absolute -bottom-2 -right-5" /> 
      </div>

      <div>
        <Link className="px-6 py-2 mr-5 border border-secondary dark:border-primary text-secondary dark:text-white-primary hover:border-primary hover:bg-white-secondary dark:hover:bg-primary transition-all" href="/projects/1">
          Projects
        </Link>
        <button className="py-0 px-2 border-b-[1px] border-black-secondary text-secondary dark:text-white-primary hover:border-primary">
          Download CV
        </button>
      </div> 

      {/* <div className="block sm:hidden mt-12 mb-24 col-start-1 col-end-13 sm:my-0 sm:-mt-10 ">
        <AboutMe />
        <AlsoMe />
      </div> */}
    </section>
  );
}
