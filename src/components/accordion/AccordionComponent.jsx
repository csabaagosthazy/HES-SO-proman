import React from "react";

import AccordionItem from "./AccordionItem";

import { Accordion, Form } from "react-bootstrap";

const AccordionComponent = ({ items }) => {
  const CheckboxGroup = () => {
    return (
      <Form style={{ textAlign: "left" }}>
        <Form.Group controlId="checkBoxGroup">
          <Form.Check type="checkbox" label="Check me out" />
          <Form.Check type="checkbox" label="Check me out" />
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
    );
  };
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <AccordionItem header={"Accordion Item #1"}>
          <CheckboxGroup />
        </AccordionItem>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <AccordionItem header={"Accordion Item #2"}>
          <CheckboxGroup />
        </AccordionItem>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionComponent;
