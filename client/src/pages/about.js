import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";
import Heading from "../components/heading";
import { TASK_TITLE } from "../mappings";
import { GitHub, Linkedin, Twitter } from "react-feather";

export default function AboutPage() {
  const handleConnectWithRepairMate = (event) => {
    window.location.href = "/";
  };

  const data = [
    {
      name: "Pramoda Chandru",
      github: "#",
      linkedin: "#",
      img: "/images/pramod.png",
    },
    {
      name: "Abhishek",
      github: "#",
      linkedin: "#",
      img: "/images/abhishek.png",
    },
    { name: "Payal", github: "#", linkedin: "#", img: "/images/payal.png" },
  ];

  return (
    <Layout>
      <Container>
        <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Team</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              {data.map((obj) => {
                return (
                  <div
                    className="col-lg-6 mt-4"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="member d-flex align-items-start">
                      <div className="pic">
                        <img src={obj.img} className="img-fluid" alt="" />
                      </div>
                      <div className="member-info">
                        <h4>{obj.name}</h4>
                        <span></span>
                        <p></p>
                        <div className="social">
                          <a href={obj.linkedin}>
                            <Linkedin />
                          </a>
                          <a href={obj.github}>
                            <GitHub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
