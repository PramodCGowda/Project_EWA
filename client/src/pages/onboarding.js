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
  InputGroup,
  CardBody,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import Heading from "../components/heading";
import { TASK_TITLE } from "../mappings";
import { STATES } from "../static/states";
import { Star } from "react-feather";
import Header from "../components/header";
import axios from "axios";

export default function OnboardingPage() {
  // const [address, setAddress] = useState({
  //   street: "",
  //   city: "",
  //   state: "",
  //   zipcode: "",
  // });
  const [zipcode, setZipCode] = useState("");
  const [service, setService] = useState("");
  const [hourly_rate, setRate] = useState("");
  const [aboutme, setAboutMe] = useState("");
  const [categories, setCategories] = useState([]);

  const getCategories = (event) => {
    axios
      .get("http://localhost:9000/api/service")
      .then(function (response) {
        const serviceCategories = response.data.services.map((service) => ({
          id: service._id,
          name: service.name,
        }));
        setCategories(serviceCategories);
      })
      .catch(function (error) {
        alert("No Data Found !");
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const saveProvider = (event) => {
    let user = localStorage.getItem("userID");
    axios
      .post("http://localhost:9000/api/provider/add", {
        user,
        service,
        hourly_rate,
        aboutme,
      })
      .then(function (response) {
        console.log(response);
        let { email, name, token, _id } = response.data;
        // window.location.href = "/";
        alert("done");
      })
      .catch(function (error) {
        alert("Add Failed !");
      });
  };

  return (
    <Layout>
      <Container>
        <Heading title="Become a RepairMate !" />
        <br />

        <Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              // value={address.street}
              // onChange={(e) => handleAddressChange(e)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
              // value={address.city}
              // onClick={(e) => handleAddressChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                // value={address.state}
                // onChange={(e) => handleAddressChange(e)}
              >
                <option disabled>Choose...</option>
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
              <Form.Control
                value={zipcode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={service}
              onChange={(e) => {
                console.log("Selected value:", e.target.value);
                setService(e.target.value);
              }}
            >
              <option disabled>Choose...</option>;
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              placeholder="hourly rate"
              value={hourly_rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAbout">
            <Form.Label>AboutMe</Form.Label>
            <Form.Control
              placeholder="aboutme"
              as="textarea"
              style={{ height: "200px" }}
              value={aboutme}
              onChange={(e) => setAboutMe(e.target.value)}
            />
          </Form.Group>
        </Form>

        <Button
          onClick={saveProvider}
          variant="dark"
          className="w-100 mt-4 mb-5"
        >
          Became ReapairMate
        </Button>
      </Container>
    </Layout>
  );
}
