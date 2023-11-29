import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../../components/layout";
import axios from "axios";

export default function MyAppointmentPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let userID = localStorage.getItem("userId");
    axios
      .get("http://localhost:9000/api/order")
      .then(function (response) {
        const filteredOrders = response.data.orders.filter(
          (order) => order.providerID.user._id === userID
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
        <h1>My Appointments</h1>
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
                  src={appointment.userID.image}
                />
                <Card.Body>
                  <Card.Title>{appointment.serviceID.name}</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Customer Name: {appointment.userID.name}
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
                  <Button variant="primary">Mark Completed</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
