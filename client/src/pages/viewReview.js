import React, { useEffect, useState } from "react";
import { Container, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import axios from "axios";

export default function ViewReviewPage() {
  const [userAge, setUserAge] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userOccupation, setUserOccupation] = useState("");
  const [reviewRating, setReviewRating] = useState("");
  const [reviewText, setReviewText] = useState("");
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios
      .get("http://localhost:9000/api/reviews/" + params.providerId)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        alert("Something went wrong !");
      });
  }

  return (
    <Layout>
      <Container className="mb-5">
        <h1>Service Provider Review</h1>
      </Container>
    </Layout>
  );
}
