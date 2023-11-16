import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  FloatingLabel,
  ButtonGroup,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import Heading from "../components/heading";
import { TASK_TITLE } from "../mappings";
import { STATES } from "../static/states";
import { Star } from "react-feather";
import Header from "../components/header";

export default function TaskDataPage() {
  const params = useParams();

  const [provider, setProvider] = useState(0);

  const handleFindRepairMate = (event) => {
    window.location.href = "/repairmates";
  };

  useEffect(() => {
    console.log("param in task page", params.categoryId);
  }, []);

  return (
    <Layout>
      <Container>
        <Heading title="Tell us about your task. We use these details to show Taskers in your area who fit your needs." />
        <br />
        <br />
        <div className="stepContainer">
          <div
            style={{
              position: "absolute",
              top: -10,
              left: -12,
              backgroundColor: "#000",
              padding: "10px",
            }}
          >
            <p className="stepText">Step 1: General Details</p>
          </div>
          <Form>
            <Form.Group controlId="formGridTask">
              <Form.Label>How demanding is your task</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option value={"light"}>Less than 1hr</option>
                <option value={"medium"}>Around 2-3 hrs</option>
                <option value={"heavy"}>More than 3 hrs</option>
                <option value={"mamoth"}>Entire Day</option>
              </Form.Select>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  {Object.keys(STATES).map((code) => {
                    return (
                      <option key={code} value={code}>
                        {code} ({STATES[code]})
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
          </Form>
        </div>

        <br />
        {/* ------------------- */}
        <div className="stepContainer">
          <div
            style={{
              position: "absolute",
              top: -10,
              left: -12,
              backgroundColor: "#000",
              padding: "10px",
            }}
          >
            <p className="stepText">Step 2: Explain your task.</p>
          </div>
          <Form>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job."
            >
              <Form.Control as="textarea" style={{ height: "200px" }} />
            </FloatingLabel>
          </Form>
        </div>
        {/* --------------- */}
        <br />

        <div className="stepContainer">
          <div
            style={{
              position: "absolute",
              top: -10,
              left: -12,
              backgroundColor: "#000",
              padding: "10px",
            }}
          >
            <p className="stepText">Step 3: Choose yout RapairMate.</p>
          </div>
          <Row>
            {[1, 2, 3, 4, 5, 6, 7].map((pro) => {
              return (
                <Col xs="12" md="4" lg="3" className="mb-2">
                  <Card
                    style={pro == provider ? { border: "4px solid green" } : {}}
                  >
                    <Card.Img
                      variant="top"
                      src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                    />
                    <Card.Body>
                      <Card.Title>Pramod Sir</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <Card.Text>
                          <Star fill color="black" size={18} />
                          <Star fill color="black" size={18} />
                          <Star fill color="black" size={18} />
                          <Star fill color="black" size={18} />
                        </Card.Text>
                        <h4 className="text-success">$92</h4>
                      </div>
                      <ButtonGroup className="w-100" aria-label="Basic example">
                        <Button
                          className="w-50"
                          variant="dark"
                          onClick={() => {
                            setProvider(pro);
                          }}
                        >
                          Select
                        </Button>
                        <Button className="w-50" variant="outline-dark">
                          Profile
                        </Button>
                      </ButtonGroup>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>

        <Button
          onClick={() => (window.location.href = "/payment")}
          variant="success"
          className="w-100 mt-4 mb-5"
        >
          Confirm Appointment
        </Button>
      </Container>
    </Layout>
  );
}
