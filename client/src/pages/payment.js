import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";
import Heading from "../components/heading";
import { TASK_TITLE } from "../mappings";

export default function PaymentPage() {
  const handleConnectWithRepairMate = (event) => {
    window.location.href = "/";
  };

  return (
    <Layout>
      <Container>
        <Heading title={TASK_TITLE} />
        <Row>
          <h1>Service Provider Info</h1>
        </Row>
        <Row>
          <h1>Review Task</h1>
        </Row>
        <Row>
          <h1>Payment Method</h1>
        </Row>
        <Row>
          <h1>Price Detials</h1>
        </Row>
        <Button size="md" variant="dark" onClick={handleConnectWithRepairMate}>
          Connect With RepairMate
        </Button>
      </Container>
    </Layout>
  );
}
