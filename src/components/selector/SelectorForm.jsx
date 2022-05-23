import React from "react";

import AccordionItem from "../accordion/AccordionItem";

import { Accordion, Form } from "react-bootstrap";

const items2 = [
  { title: "Ideation", key: "aProject", value: false },
  { title: "Realize project", key: "rProject", value: false },
  { title: "Preparation project", key: "pProject", value: false },

  { title: "1 Day", key: "oneDay", value: false },
  { title: "Max 1 week", key: "max1Week", value: false },
  { title: "Some weeks", key: "someWeeks", value: false },
  { title: "Some months", key: "someMonths", value: false },

  { title: "1-10 people", key: "oneToTenPeople", value: false },
  { title: "10-30 people", key: "tenToThirtyPeople", value: false },
  { title: "30+ people", key: "thirtyPlusPeople", value: false },

  { title: "Information", key: "information", value: false },
  { title: "Consultation", key: "consultation", value: false },
  { title: "Co-determination", key: "coDetermination", value: false },

  { title: "Inform", key: "inform", value: false },
  { title: "Analyse problem", key: "analyse", value: false },
  { title: "Start discussion", key: "discussion", value: false },
  { title: "Networking", key: "networking", value: false },
  { title: "Plan and develop together", key: "plan", value: false },
  { title: "Working together in long term", key: "working", value: false },
  { title: "Get opinions/reactions", key: "opinions", value: false },
  { title: "Resolve conflicts", key: "conflicts", value: false },

  { title: "Suitable for conflict resolution", key: "suitable", value: false },
];

const data = [
  {
    aProject: false,
    rProject: true,
    pProject: false,
    oneDay: false,
    max1Week: true,
    someWeeks: false,
    someMonths: false,
    oneToTenPeople: false,
    tenToThirtyPeople: false,
    thirtyPlusPeople: false,
    information: false,
    consultation: false,
    coDetermination: false,
    inform: false,
    analyse: false,
    discussion: false,
    networking: false,
    plan: false,
    working: false,
    opinions: false,
    conflicts: false,
    suitable: false,
    name: "Test name",
    description: "Test description",
  },
];

const SelectorForm = () => {
  const [state, setState] = React.useState({});
  const [searchResult, setSearchResult] = React.useState([]);

  React.useEffect(() => {
    let values = {};
    items2.forEach((item) => {
      values = { ...values, [item.key]: false };
    });
    setState(values);
    setSearchResult(data);
  }, []);

  const hanldeClick = (e) => {
    console.log(e.target.name, e.target.checked);
    filterMethod(e.target.name, e.target.checked);
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  const filterMethod = (key, value) => {
    let result = data.filter((item) => item[key] === value);
    setSearchResult(result);
    console.log(result);
  };
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <AccordionItem header={"Timeline"}>
          <Form style={{ textAlign: "left" }}>
            <Form.Group controlId={"timeline"}>
              {items2.slice(0, 3).map((item) => (
                <Form.Check
                  type="checkbox"
                  key={item.key}
                  label={item.title}
                  name={item.key}
                  onClick={(e) => hanldeClick(e)}
                />
              ))}
            </Form.Group>
          </Form>
        </AccordionItem>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <AccordionItem header={"Method length"}>
          <Form style={{ textAlign: "left" }}>
            <Form.Group controlId={"methodLength"}>
              {items2.slice(3, 7).map((item) => (
                <Form.Check
                  type="checkbox"
                  key={item.key}
                  label={item.title}
                  name={item.key}
                  onClick={(e) => hanldeClick(e)}
                />
              ))}
            </Form.Group>
          </Form>
        </AccordionItem>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <AccordionItem header={"Group size"}>
          <Form style={{ textAlign: "left" }}>
            <Form.Group controlId={"groupSize"}>
              {items2.slice(7, 10).map((item) => (
                <Form.Check
                  type="checkbox"
                  key={item.key}
                  label={item.title}
                  name={item.key}
                  onClick={(e) => hanldeClick(e)}
                />
              ))}
            </Form.Group>
          </Form>
        </AccordionItem>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <AccordionItem header={"Type of Method"}>
          <Form style={{ textAlign: "left" }}>
            <Form.Group controlId={"typeOfMethod"}>
              {items2.slice(10, 13).map((item) => (
                <Form.Check
                  type="checkbox"
                  key={item.key}
                  label={item.title}
                  name={item.key}
                  onClick={(e) => hanldeClick(e)}
                />
              ))}
            </Form.Group>
          </Form>
        </AccordionItem>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <AccordionItem header={"Purpose of Method"}>
          <Form style={{ textAlign: "left" }}>
            <Form.Group controlId={"purposeOfMethod"}>
              {items2.slice(13, 21).map((item) => (
                <Form.Check
                  type="checkbox"
                  key={item.key}
                  label={item.title}
                  name={item.key}
                  onClick={(e) => hanldeClick(e)}
                />
              ))}
            </Form.Group>
          </Form>
        </AccordionItem>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <AccordionItem header={"Suitable for conflict resolution"}>
          <Form style={{ textAlign: "left" }}>
            <Form.Group controlId={"suitable"}>
              {items2.slice(-1).map((item) => (
                <Form.Check
                  type="checkbox"
                  key={item.key}
                  label={item.title}
                  name={item.key}
                  onClick={(e) => hanldeClick(e)}
                />
              ))}
            </Form.Group>
          </Form>
        </AccordionItem>
      </Accordion.Item>
    </Accordion>
  );
};

export default SelectorForm;
