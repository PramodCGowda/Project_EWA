import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";
import Heading from "../components/heading";
import { TASK_TITLE } from "../mappings";
import { Twitter } from "react-feather";

export default function AboutPage() {
  const handleConnectWithRepairMate = (event) => {
    window.location.href = "/";
  };

  return (
    <Layout>
      <Container>
        <section id="team" class="team section-bg">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Team</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row">
              <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
                    </p>
                    <div class="social">
                      <a href="">
                        <Twitter />
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <p>
                      Aut maiores voluptates amet et quis praesentium qui senda
                      para
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>
                      Quisquam facilis cum velit laborum corrupti fuga rerum
                      quia
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 mt-4"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>
                      Dolorum tempora officiis odit laborum officiis et et
                      accusamus
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
