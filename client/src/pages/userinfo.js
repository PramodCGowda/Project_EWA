import { useEffect, useState } from "react";
import React from "react";
import { Image, Row, Col, Container, Button, Card } from "react-bootstrap";
import { REPAIRMATE_TITLE } from "../mappings";
import Heading from "../components/heading";
import axios from "axios";
import Layout from "../components/layout";

export default function UserInfo() {
  const [data, setData] = useState([]);
  async function getData() {
    axios
      .get("http://localhost:9000/api/user")
      .then(function (response) {
        console.log("userinfo service", response.data);
        setData(response.data.services);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Container>
        <Heading title={"Account Info"} />
        <Row>
          {data && data.length
            ? data.map((service, index) => {
                return (
                  <Col
                    key={service.name + service.category}
                    xs="6"
                    md="4"
                    lg="4"
                  >
                    <Card style={{ width: "auto", marginBottom: "24px" }}>
                      <Card.Img variant="top" src="/images/homecleaner.jpg" />
                      <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>
                        <Button
                          size="md"
                          variant="dark"
                          onClick={(window.localtion = "/signout")}
                        >
                          Log Out
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
