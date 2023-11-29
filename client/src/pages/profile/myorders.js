import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../../components/layout";
import axios from "axios";

export default function MyOrdersPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let userID = localStorage.getItem("userId");
    axios
      .get("http://localhost:9000/api/order")
      .then(function (response) {
        console.log(response);
        const filteredOrders = response.data.orders.filter(
          (order) => order.userID._id === userID
        );
        setData(filteredOrders.length ? filteredOrders : {});
        console.log(filteredOrders);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Layout>
      <Container>
        <h1>My Orders</h1>
        <Row>
          {data.map((appointment) => (
            <Col key={appointment._id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  style={{
                    width: "auto",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={appointment.providerID.user.image}
                />
                <Card.Body>
                  <Card.Title>{appointment.serviceID.name}</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Provider Name: {appointment.providerID.user.name}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    Appointment Date:{" "}
                    {new Date(appointment.details.aptDate).toLocaleDateString()}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    Appointment Time: {appointment.details.aptTime}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    Task: {appointment.task}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    Payment: ${}
                  </Card.Text>
                  <Button variant="primary">Write Review</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
