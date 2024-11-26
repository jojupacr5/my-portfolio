/* eslint-disable prettier/prettier */
import { nunito, titleFont } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import clsx from "clsx";

export default function ProjectPage() {
  return (
    <section className="self-center relative col-start-1 col-end-13 sm:col-start-2 sm:col-end-12">
      <div className="relative mb-12">
        <span
          className={clsx(
            "absolute -ml-5 -mt-[16px] font-nunito text-6xl block",
            nunito.variable,
          )}
        >
          {"{"}
        </span>
        <h2 className={clsx(
          "text-3xl font-title",
          titleFont.variable
        )}>my projects</h2>
      </div>

      <div className="w-full my-6 gap-4 grid grid-cols-12">
      
        <Card isFooterBlurred className="w-full h-[220px] col-span-12 xs:col-span-6 md:col-span-4 lg:col-span-3">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[220px] col-span-12 xs:col-span-6 md:col-span-4 lg:col-span-3">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[220px] col-span-12 xs:col-span-6 md:col-span-4 lg:col-span-3">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[220px] col-span-12 xs:col-span-6 md:col-span-4 lg:col-span-3">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        
      </div>
    </section>
  );
}
