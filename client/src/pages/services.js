import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";
import axios from "axios";
import Heading from "../components/heading";

export default function ServicesPage() {
  const [data, setData] = useState([]);

  function trimText(text) {
    if (text.length < 100) return text;
    return text.substring(0, 100) + "...";
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios
      .get("http://localhost:9000/api/service")
      .then(function (response) {
        const temp = response.data.services;
        setData(temp);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleBookAppointment = (id) => {
    window.location.href = "/task/" + id;
  };

  return (
    <Layout>
      <Container>
        <Heading title={"All Services"} />
        <Row>
          {data && data.length
            ? data.map((service, index) => {
                return (
                  <Col
                    key={service.name + service.category}
                    xs="6"
                    md="4"
                    lg="3"
                  >
                    <Card style={{ width: "auto", marginBottom: "24px" }}>
                      <Card.Img variant="top" src="/images/homecleaner.jpg" />
                      <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>{trimText(service.description)}</Card.Text>
                        <Button
                          size="md"
                          className="w-100"
                          variant="dark"
                          onClick={() => handleBookAppointment(service._id)}
                        >
                          Book Appointment
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            : null}
        </Row>
      </Container>
    </Layout>
  );
}
