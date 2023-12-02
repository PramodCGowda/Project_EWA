import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FloatingLabel,
  ListGroup,
  CardBody,
  CardText,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import Heading from "../components/heading";
import { PAYMENT_TITLE } from "../mappings";
import { Star } from "react-feather";
import axios from "axios";

export default function PaymentPage() {
  const params = useParams();
  const [order, setOrder] = useState(null);
  const [supportFee, setSupportFee] = useState();
  const [tax, setTax] = useState();
  const [total, setTotal] = useState();

  const handleConnectWithRepairMate = (event) => {
    window.location.href = "/";
  };

  async function handleMakePayment() {
    axios
      .post("http://localhost:9000/api/order/add", {
        user: localStorage.getItem("userId"),
        service: order.provider.serviceId,
        provider: order.provider.id,
        address: order.address,
        task: order.task,
        details: order.details,
        supportFee,
        tax,
        total,
      })
      .then(function (response) {
        const existingOrderIds =
          JSON.parse(localStorage.getItem("orderIds")) || [];
        const newOrderId = response.data.order.id;
        existingOrderIds.push(newOrderId);
        localStorage.setItem("orderIds", JSON.stringify(existingOrderIds));
        localStorage.removeItem("order");
        alert("Order has been generated");
        window.location.href = "/";
      })
      .catch(function (error) {
        alert("Something went wrong !");
      });
  }

  const makePayment = () => {
    alert("Payment Successful! OrderId: 6555e2f6d6f1ae933dab24b2");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        let orderDetails = localStorage.getItem("order");
        let order = JSON.parse(orderDetails);
        setTotal(order.provider.hourly_rate);
        if (order?.details) {
          setOrder(order);
          const supportFeeValue = (
            (order.provider.hourly_rate * 5.5) /
            100
          ).toFixed(2);
          setSupportFee(supportFeeValue);
          setTotal((prevTotal) => {
            const updatedTotal =
              (Number(prevTotal) || 0) + Number(supportFeeValue);
            const taxValue = ((updatedTotal * 10.5) / 100).toFixed(2);
            setTax(taxValue);
            return (Number(updatedTotal) || 0) + Number(taxValue);
          });
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <Layout>
      <Container className="mb-5">
        {order ? (
          <>
            <Heading title={PAYMENT_TITLE} />
            <Row>
              <Col xs={12} lg={8}>
                <Card className="p-4">
                  <h5>Review Task Description</h5>
                  <Form>
                    <Form.Control
                      disabled
                      placeholder="Edit your task detils."
                      value={order.task}
                      as="textarea"
                      style={{ height: "200px" }}
                    />
                  </Form>
                  <br />
                  <br />
                  <h5>Payment Method</h5>
                  <ListGroup>
                    <ListGroup.Item>Credit / Debit / Visa</ListGroup.Item>
                    <ListGroup.Item>Paypal</ListGroup.Item>
                    <ListGroup.Item>Google Pay</ListGroup.Item>
                    <ListGroup.Item>Apple Pay</ListGroup.Item>
                    <ListGroup.Item>Crypto</ListGroup.Item>
                  </ListGroup>
                  <Button
                    size="lg"
                    variant="outline-success"
                    className="w-100 mt-3"
                    onClick={() => handleMakePayment()}
                  >
                    Make Payment
                  </Button>
                </Card>
              </Col>
              <Col xs={12} lg={4}>
                <Card className="p-4">
                  <h5>RepairMate Details</h5>
                  <Card style={{ width: "auto", marginBottom: "24px" }}>
                    <div className="pic pt-3 text-center">
                      <img
                        style={{ borderRadius: "50%", overflow: "hidden" }}
                        src={
                          order.provider.user.image
                            ? order.provider.user.image
                            : "https://ui-avatars.com/api/?name=" +
                              order.provider.user.name
                        }
                        className="img-fluid"
                        height={120}
                        width={120}
                        alt=""
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{order.provider.user.name}</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {Array.from({ length: order.provider.rating }).map(
                            (_, index) => (
                              <Star
                                key={order.provider.id + index}
                                fill="black"
                                size={18}
                              />
                            )
                          )}
                        </div>
                        <p>({order.provider.reviews} reviews)</p>
                        <h4 className="text-success">
                          ${order.provider.hourly_rate}
                        </h4>
                      </div>
                      {/* <Button
                        size="md"
                        variant="dark"
                        className="w-100 mt-2"
                        onClick={handleConnectWithRepairMate}
                      >
                        View Profile
                      </Button> */}
                    </Card.Body>
                  </Card>
                </Card>
                <br />
                <Card className="p-4">
                  <h5>Price Details</h5>
                  <Card.Body>
                    <Card.Text className="d-flex justify-content-between align-items-center mb-0">
                      <p>Hourly Rate</p>
                      <p>${order.provider.hourly_rate}</p>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between align-items-center mb-0">
                      <p>Support Fee</p>
                      <p>${supportFee}</p>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between align-items-center mb-0">
                      <p>Taxes</p>
                      <p>${tax}</p>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between align-items-center mb-0">
                      <p>
                        <b>Total Price: </b>
                      </p>
                      <p>
                        <b className="text-success">${total}</b>
                      </p>
                    </Card.Text>
                    <Card.Text>
                      <span className="text-warning">
                        <b>Note:</b>{" "}
                      </span>
                      You may see a temporary hold on your payment method in the
                      amount of your task. You can cancel at any time. Tasks
                      cancelled less than 24 hours before the start time may be
                      billed a cancellation fee of one hour. Tasks have a
                      one-hour minimum. Please follow all public health
                      regulations in your area. Learn more.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>{" "}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </Layout>
  );
}
