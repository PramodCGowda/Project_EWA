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
          (order) => String(order.providerId) === String(userID)
        );
        setData(filteredOrders.length ? filteredOrders : {});
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
            <Col key={appointment.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  style={{
                    width: "auto",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={
                    appointment.user.image
                      ? appointment.user.image
                      : "https://ui-avatars.com/api/?name=" +
                        appointment.user.name
                  }
                />
                <Card.Body>
                  <Card.Title>{appointment.service.name}</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Customer Name: {appointment.user.name}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    Appointment Date:{" "}
                    {new Date(appointment.aptDate).toLocaleDateString()}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    Appointment Time: {appointment.aptTime}
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
