import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
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
import { ArrowUpRight, Star, Twitter } from "react-feather";

function HomeScreen() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);
  const [providers, setProviders] = useState([]);
  const [categoryId, setCategoryId] = useState("1");

  function trimText(text) {
    if (text.length < 100) return text;
    return text.substring(0, 100) + "...";
  }

  async function getData() {
    axios
      .get("http://localhost:9000/api/service")
      .then(function (response) {
        console.log("home page service", data);
        setData(response.data.services);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  async function getProviders() {
    axios
      .get("http://localhost:9000/api/provider")
      .then(function (response) {
        console.log("providers", response.data.providers);
        setProviders(response.data.providers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getProviders();
  }, []);

  const handleSearchChange = (val) => {
    if (val === "") setSearchResults([]);
    setSearchValue(val);
  };

  const handleBookAppointment = (provider) => {
    setCategoryId(provider._id);
    window.location.href = "/task/" + provider._id;
  };

  function debounce(func, timeout = 800) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function getSearchResults() {
    if (searchValue.length > 3) {
      axios
        .get("http://localhost:9000/api/service")
        .then((response) => {
          let data = response?.data?.services || [];
          setSearchResults(data);
        })
        .catch((err) => {
          alert("Error !!!");
        });
    }
  }

  const processChange = debounce(() => getSearchResults());

  return (
    <Layout>
      <div id="banner">
        <Container>
          <div style={{ position: "relative" }}>
            <InputGroup className="mb-0" size="lg">
              <Form.Control
                className="mb-0"
                onKeyUp={processChange}
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                id="main-search"
                placeholder="What service are you looking for ? "
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            {searchResults.length && searchValue.length > 3 ? (
              <div
                style={{
                  position: "absolute",
                  padding: "24px",
                  paddingTop: "40px",
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                  marginTop: "-16px",
                  height: "200px",
                  width: "100%",
                  backgroundColor: "#fff",
                  overflowX: "scroll",
                  border: "1px solid #808080",
                  borderTop: 0,
                }}
              >
                {searchResults.map((result) => {
                  console.log("result", result);
                  return (
                    <div
                      onClick={() =>
                        (window.location.href = "/task/" + result._id)
                      }
                      key={result.name + result.id}
                      style={{ cursor: "pointer", marginBottom: "16px" }}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <p className="mb-0">{result.name}</p>
                      <ArrowUpRight color="#808080" />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </Container>
      </div>
      <Container>
        <Heading
          title={"Recomended Providers For You"}
          hasBtn={true}
          btnText={"View All"}
          btnFn={() => navigate("repairmates")}
        />
        <Row>
          {providers && providers.length
            ? providers.map((provider, index) => {
                if (index < 7) {
                  return (
                    <Col
                      key={provider.name + provider.category}
                      xs="12"
                      md="4"
                      lg="3"
                    >
                      <Card style={{ width: "auto", marginBottom: "24px" }}>
                        <Card.Img variant="top" src="/images/homecleaner.jpg" />
                        <Card.Body>
                          <Card.Title>{provider.userID}</Card.Title>
                          <Card.Text>{provider.serviceID}</Card.Text>
                          <div className="d-flex justify-content-between align-items-center">
                            {Array.from({ length: provider.rating }).map(
                              (_, index) => (
                                <Card.Text key={index}>
                                  <Star fill="black" size={18} />
                                </Card.Text>
                              )
                            )}
                            <h4 className="text-success">$92</h4>
                          </div>
                          <Button
                            size="md"
                            className="w-100"
                            variant="dark"
                            onClick={() => {
                              handleBookAppointment(provider._id);
                            }}
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
