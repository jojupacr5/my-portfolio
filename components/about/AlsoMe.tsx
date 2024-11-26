'use client'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { CustomSpan } from "../ui/pages/CustomSpan";
import { Goals } from "./Goals";

export const AlsoMe = () => {

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <CustomSpan text="josephpaucar@pc:~$" ml="-ml-2 md:-ml-3" variation={true} subtitle="nano also-me.txt"/>
      <div className="mt-5">
        <Accordion variant="bordered">
          <AccordionItem key="1" aria-label="Goals & Motivation" title="Goals & Motivation">
            <Goals />
          </AccordionItem>
          <AccordionItem key="2" aria-label="Experience & Education" title="Experience & Education">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Skills" title="Skills">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
