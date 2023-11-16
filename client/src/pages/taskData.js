import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import Heading from "../components/heading";
import { TASK_TITLE } from "../mappings";

export default function TaskDataPage() {
  const params = useParams();

  const handleFindRepairMate = (event) => {
    window.location.href = "/repairmates";
  };

  useEffect(() => {
    console.log("param in task page", params.categoryId);
  }, []);

  return (
    <Layout>
      <Container>
        <Heading title={TASK_TITLE} />
        <Row>
          <h1>User Info</h1>
        </Row>
        <Row>
          <h1>About Task</h1>
        </Row>
        <Row>
          <h1>Appointment</h1>
        </Row>
        <Button size="md" variant="dark" onClick={handleFindRepairMate}>
          Find Repair Mate
        </Button>
      </Container>
    </Layout>
  );
}
