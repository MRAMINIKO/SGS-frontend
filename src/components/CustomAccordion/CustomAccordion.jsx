"use client";
import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export const CustomAccordion = ({
  items,
  hasFlush = false,
  closeOffcanvas = null,
}) => {
  const router = useRouter();

  const handleNavigate = (destination) => {
    closeOffcanvas();
    router.push(`/departments/${destination}`);
  };

  return (
    <Accordion flush={hasFlush}>
      {items
        ?.filter((item) => item.active)
        ?.map(({ id, name, content }) => (
          <Accordion.Item key={id} eventKey={id}>
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body className="d-flex flex-column">
              {content?.map(({ department, href }) => (
                <Button
                  variant=""
                  className="text-start my-1 px-0"
                  onClick={() => handleNavigate(href)}
                >
                  {department}
                </Button>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
};
