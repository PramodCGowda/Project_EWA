import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";

function SignupScreen({ changeScreen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [zipcode, setZipCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ width: "100%" }}>
      <h4 style={{ fontWeight: "700" }}>User Signup: </h4>
      <Form style={{ padding: "24px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="lg"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="lg"
            required
          />
        </Form.Group>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text>+1</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              size="lg"
              required
            />
          </InputGroup>
        </div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            size="lg"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsertype">
          <Form.Select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            size="lg"
            required
          >
            <option disabled value="">
              Choose Type
            </option>
            <option value="customer">Customer</option>
            <option value="serviceProvider">Service Provider</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicZipCode">
          <Form.Control
            type="text"
            placeholder="Zip Code"
            value={email}
            onChange={(e) => setZipCode(e.target.value)}
            size="lg"
            required
          />
        </Form.Group>
        <Button variant="dark" size="lg" type="submit" className="w-100">
          Signup
        </Button>
        <hr />
        <Button
          className="text-center w-100"
          variant="outline-dark"
          size="md"
          onClick={changeScreen}
        >
          Already have an account? Signin
        </Button>
      </Form>
    </div>
  );
}

export default SignupScreen;
