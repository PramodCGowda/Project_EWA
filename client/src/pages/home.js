import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import Layout from "../components/layout";
import axios from "axios";
import Heading from "../components/heading";

function HomeScreen() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  function trimText(text) {
    if (text.length < 100) return text;
    return text.substring(0, 100) + "...";
  }

  async function getData() {
    axios
      .get("http://localhost:9000/api/service")
      .then(function (response) {
        setData(response.data.services);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
  };

  const handleBookAppointment = (event) => {
    window.location.href = "/taskData";
  };

  return (
    <Layout>
      <div id="banner">
        <Container>
          <h3 className="font-weight-bold">Home service at your door step.</h3>
          <InputGroup size="lg" className="mb-3">
            <Form.Control
              id="main-search"
              placeholder="What service are you looking for ? "
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
        </Container>
      </div>
      <Container>
        <Heading
          title={"Popular Providers"}
          hasBtn={true}
          btnText={"View All"}
          btnFn={() => navigate("services")}
        />
        <Row>
          {data && data.length
            ? data.map((service, index) => {
                if (index < 7) {
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
                          <Card.Text>{trimText(service.description)}</Card.Text>
                          <Button
                            size="md"
                            variant="dark"
                            onClick={handleBookAppointment}
                          >
                            Book Appointment
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                }
              })
            : null}
        </Row>
      </Container>

      {/* <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchValue}
        onChange={handleSearchChange}
      /> */}
    </Layout>
  );
}

export default HomeScreen;
