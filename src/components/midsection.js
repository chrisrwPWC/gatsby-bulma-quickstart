import React from "react";
import {
  FaSass,
  FaHtml5,
  FaReact,
  FaMobileAlt,
  FaRocket,
  FaOsi
} from "react-icons/fa";

import "./style.scss";
import Emoji from "./emoji";
// import bulmaCollapsible from "@creativebulma/bulma-collapsible";
//import bulmaCollapsible from "~bulma-collapsible";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

const Midsection = () => (
  <div>
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What harsh truths do you prefer to ignore?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Is free will real or just an illusion?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
            nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
            duis nulla non.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>{" "}
  </div>

  //   var accordions = bulmaAccordion.attach(); // accordions now contains an array of all Accordion instances
);

export default Midsection;
