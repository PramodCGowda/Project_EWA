import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";
import Heading from "../components/heading";
import { REPAIRMATE_TITLE } from "../mappings";
import axios from "axios";
import { Star } from "react-feather";

export default function RepairMatesPage() {
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
      .get("http://localhost:9000/api/provider")
      .then(function (response) {
        const temp = response.data.providers;
        console.log(temp);
        setData(temp);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleConfirmAppointment = (event) => {
    window.location.href = "/payment";
  };

  return (
    <Layout>
      <Container>
        <Heading title={REPAIRMATE_TITLE} />
        <Row>
          {data && data.length
            ? data.map((provider, index) => {
                return (
                  <Col key={provider.user.name} xs="6" md="4" lg="4">
                    <Card style={{ width: "auto", marginBottom: "24px" }}>
                      <Card.Img
                        variant="top"
                        src={provider.user.image}
                        style={{
                          width: "auto",
                          height: "200px",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                      <Card.Body>
                        <Card.Title>{provider.user.name}</Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            {Array.from({ length: provider.rating }).map(
                              (_, index) => (
                                <Star
                                  key={provider.id + index}
                                  fill="black"
                                  size={18}
                                />
                              )
                            )}
                          </div>
                          <h4 className="text-success">
                            ${provider.hourly_rate}
                          </h4>
                        </div>
                        <Button
                          size="md"
                          variant="dark"
                          onClick={handleConfirmAppointment}
                        >
                          Confirm Appointment
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
