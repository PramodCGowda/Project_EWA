import React, { useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Chart from "react-google-charts";
import axios from "axios";
import Layout from "../../components/layout";

export default function AdminViewPage() {
  const [orders, setOrders] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let userID = localStorage.getItem("userId");
      let apiUrl = "http://localhost:9000/api/order";

      if (selectedPeriod === "lastMonth") {
        apiUrl += "/orders?period=lastMonth";
      } else if (selectedPeriod === "lastYear") {
        apiUrl += "/orders?period=lastYear";
      }

      axios
        .get(apiUrl)
        .then(function (response) {
          const filteredOrders = response.data.orders.filter(
            (order) => String(order.userId) === String(userID)
          );
          setOrders(filteredOrders.length ? filteredOrders : []);
          console.log(filteredOrders);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchData();
  }, [selectedPeriod]); // Run the effect when the selected period changes

  const data1 = [
    [
      "Service Name",
      "Orders",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ...orders.map((order, index) => [
      order.service.name,
      order.total,
      index % 2 === 0 ? "silver" : "#b87333",
      null,
    ]),
  ];

  const options = {
    title: "Your Orders",
    chartArea: { width: "70%" },
    hAxis: {
      title: "Total Spent",
      minValue: 0,
    },
    vAxis: {
      title: "Service Category",
    },
  };

  return (
    <Layout>
      <Container>
        <div>
          <h1>Data Visualization</h1>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Period
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedPeriod("allOrders")}>
                All Orders
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedPeriod("lastMonth")}>
                Last Month
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedPeriod("lastYear")}>
                Last Year
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div style={{ width: "100vh", overflowY: "scroll" }}>
            {orders.length > 0 ? (
              <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data1}
                options={options}
              />
            ) : (
              <p>No orders available for the selected period.</p>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
