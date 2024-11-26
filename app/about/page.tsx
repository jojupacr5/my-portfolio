import { AboutMe, AlsoMe } from "@/components";

export default function AboutPage() {
  return (
    <section className="place-self-center my-4 relative col-start-1 col-end-13 sm:col-start-2 sm:col-end-12">
      <div className=" my-6 md:my-0 block">
        <AboutMe />
        <AlsoMe />
      </div>
    </section>
  );
}
