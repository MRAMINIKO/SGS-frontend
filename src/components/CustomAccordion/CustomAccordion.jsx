import React from "react";
import { Accordion } from "react-bootstrap";

export const CustomAccordion = ({ items, hasFlush = false }) => {
  return (
    <Accordion flush={hasFlush}>
      {items
        ?.filter((item) => item.active)
        ?.map(({ id, name, content }) => (
          <Accordion.Item key={id} eventKey={id}>
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-column">
                {content?.map(({ department, href }) => (
                  <a
                    className="text-decoration-none text-dark my-1"
                    href={"/departments/" + href}
                  >
                    {department}
                  </a>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
};
