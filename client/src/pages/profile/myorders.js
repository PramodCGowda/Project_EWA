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
          (order) => String(order.userId) === String(userID)
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
          {data.map((order) => (
            <Col key={order.id} md={4} className="mb-4">
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
                    order.provider.user.image
                      ? order.provider.user.image
                      : "https://ui-avatars.com/api/?name=" +
                        order.provider.user.name
                  }
                />
                <Card.Body>
                  <Card.Title>{order.service.name}</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Provider Name: {order.provider.user.name}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    order Date: {new Date(order.aptDate).toLocaleDateString()}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    order Time: {order.aptTime}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    Task: {order.task}
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
