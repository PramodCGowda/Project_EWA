import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FloatingLabel,
  ListGroup,
  CardBody,
  CardText,
} from "react-bootstrap";
import Layout from "../components/layout";
import Heading from "../components/heading";
import { PAYMENT_TITLE, TASK_TITLE } from "../mappings";
import { ArrowUpRight, Star } from "react-feather";

export default function PaymentPage() {
  const handleConnectWithRepairMate = (event) => {
    window.location.href = "/";
  };

  const makePayment = () => {
    alert("Payment Successful! OrderId: 6555e2f6d6f1ae933dab24b2");
    window.location.href = "/";
  };

  return (
    <Layout>
      <Container className="mb-5">
        <Heading title={PAYMENT_TITLE} />
        <Row>
          <Col xs={12} lg={8}>
            <Card className="p-4">
              <h5>Review Task Description</h5>
              <Form>
                <Form.Control
                  placeholder="Edit your task detils."
                  value="I am interested in transforming my home into a smart home. After researching various options, I believe your expertise in smart home installation would be invaluable in achieving my vision.
                  Help me with the below setup,
                  Enhance home security with smart cameras and doorbell systems.
                  Implement energy-efficient solutions such as smart thermostats and lighting controls.
                  Create a seamless and intuitive home entertainment system.
                  Integrate voice-controlled assistants for hands-free operation."
                  as="textarea"
                  style={{ height: "200px" }}
                />
              </Form>
              <br />
              <br />
              <h5>Payment Method</h5>
              <ListGroup>
                <ListGroup.Item>Credit / Debit / Visa</ListGroup.Item>
                <ListGroup.Item>Paypal</ListGroup.Item>
                <ListGroup.Item>Google Pay</ListGroup.Item>
                <ListGroup.Item>Apple Pay</ListGroup.Item>
                <ListGroup.Item>Crypto</ListGroup.Item>
              </ListGroup>
              <Button
                size="lg"
                variant="outline-success"
                className="w-100 mt-3"
                onClick={makePayment}
              >
                Make Payment
              </Button>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card className="p-4">
              <h5>RepairMate Details</h5>
              <Card style={{ width: "auto", marginBottom: "24px" }}>
                <div className="pic pt-3 text-center">
                  <img
                    style={{ borderRadius: "50%", overflow: "hidden" }}
                    src={"https://i.ibb.co/R9S47tb/user1.webp"}
                    className="img-fluid"
                    height={120}
                    width={120}
                    alt=""
                  />
                </div>
                <Card.Body>
                  <Card.Title>Emily Johnson</Card.Title>
                  <Card.Text>Smart Home Installation</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {[1, 2, 3, 4, 5].map((_, index) => (
                        <Star key={index} fill="gold" size={18} />
                      ))}
                    </div>
                    <h4 className="text-success">$52/hr</h4>
                  </div>
                  <Button variant="dark" size="md" className="w-100 mt-2">
                    Change RepairMate
                  </Button>
                </Card.Body>
              </Card>
            </Card>
            <br />
            <Card className="p-4">
              <h5>Price Details</h5>
              <Card.Body>
                <Card.Text className="d-flex justify-content-between align-items-center mb-0">
                  <p>Hourly Rate</p>
                  <p>$ 52.00</p>
                </Card.Text>
                <Card.Text className="d-flex justify-content-between align-items-center mb-0">
                  <p>Support Fee</p>
                  <p>$ 15.00</p>
                </Card.Text>
                <Card.Text className="d-flex justify-content-between align-items-center mb-0">
                  <p>Taxes</p>
                  <p>$ 7.00</p>
                </Card.Text>
                <Card.Text className="d-flex justify-content-between align-items-center mb-0">
                  <p>
                    <b>Total Price: </b>
                  </p>
                  <p>
                    <b className="text-success">$74.00</b>
                  </p>
                </Card.Text>
                <Card.Text>
                  <span className="text-warning">
                    <b>Note:</b>{" "}
                  </span>
                  You may see a temporary hold on your payment method in the
                  amount of your Tasker's hourly rate of $70.20. You can cancel
                  at any time. Tasks cancelled less than 24 hours before the
                  start time may be billed a cancellation fee of one hour. Tasks
                  have a one-hour minimum. Please follow all public health
                  regulations in your area. Learn more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
