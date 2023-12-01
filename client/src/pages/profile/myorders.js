import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Layout from "../../components/layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Star } from "react-feather";

export default function MyOrdersPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let userID = localStorage.getItem("userId");
    axios
      .get("http://localhost:9000/api/order/")
      .then(function (response) {
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
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {Array.from({ length: order.provider.rating }).map(
                        (_, index) => (
                          <Star
                            key={order.providerId + index}
                            fill="black"
                            size={18}
                          />
                        )
                      )}
                    </div>
                    <p>({order.provider.reviews} reviews)</p>
                    <h5 className="text-regular">
                      ${order.provider.hourly_rate}
                    </h5>
                  </div>
                  <ButtonGroup className="w-100" aria-label="Basic example">
                    <Button
                      size="md"
                      variant="dark"
                      onClick={() => navigate(`/review/${order.providerId}`)}
                    >
                      Write Review
                    </Button>
                    <Button
                      className="w-50"
                      variant="light"
                      onClick={() =>
                        navigate(`/viewreview/${order.providerId}`)
                      }
                    >
                      View Review
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
