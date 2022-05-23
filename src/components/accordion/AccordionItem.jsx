import React from "react";

import { Accordion } from "react-bootstrap";

const AccordionItem = ({ children, header }) => {
  return (
    <>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body>{children}</Accordion.Body>
    </>
  );
};

export default AccordionItem;
