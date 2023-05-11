import React, { useEffect } from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import $ from "jquery";
function Home({ setTitle }) {
  useEffect(() => {
    setTitle("Welcome");
  });

  return (
    <div>
      <div class="img"></div>
      <div class="center">
        <div class="title">Online Service</div>
        <div class="sub_title">Management System</div>
        <div class="btns">
          <button>Learn More</button>
          <button>Subscribe</button>
        </div>
      </div>
      <section className="servicecontainer">
        <canvas class="orb-canvas"></canvas>

        <div class="overlay">
          <div class="overlay__inner">
            <h1 class="overlay__title">
              Hey, would you like to learn how to create a
              <span class="text-gradient">generative</span> UI just like this?
            </h1>

            <p class="overlay__description">
              In this tutorial we will be creating a generative “orb” animation
              using pixi.js, picking some lovely random colors and pulling it
              all together in a nice frosty UI.
              <strong>We're gonna talk accessibility, too.</strong>
            </p>

            <div class="overlay__btns">
              <button class="overlay__btn overlay__btn--transparent">
                <a
                  href="https://georgefrancis.dev/writing/create-a-generative-landing-page-and-webgl-powered-background/"
                  target="_blank"
                >
                  View Tutorial
                </a>
              </button>

              <button class="overlay__btn overlay__btn--colors">
                <span>Randomise Colors</span>
                <span class="overlay__btn-emoji">🎨</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section">
        <h3 className="service-title">Our Services</h3>
        <p class="section-lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="services-grid">
          <div class="service service1">
            <i class="ti-bar-chart"></i>
            <h4>Wealth Management</h4>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" class="cta">
              Read More <span class="ti-angle-right"></span>
            </a>
          </div>

          <div class="service service2">
            <i class="ti-light-bulb"></i>
            <h4>Financial Planning</h4>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" class="cta">
              Read More <span class="ti-angle-right"></span>{" "}
            </a>
          </div>

          <div class="service service3">
            <i class="ti-money"></i>
            <h4>Investment Banking</h4>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" class="cta">
              Read more <span class="ti-angle-right"></span>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <form id="contact" action="" method="post">
            <h3>Contact Form</h3>
            <h4>Contact us for custom quote</h4>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number (optional)"
                type="tel"
                tabindex="3"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Web Site (optional)"
                type="url"
                tabindex="4"
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabindex="5"
                required
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <section className="testimonial">
        <h3>WHAT OUR CLIENTS SAY</h3>
        <div>
          <div className=" container-flex" style={{ display: "flex" }}>
            <div className="row" style={{ width: "70%" }}>
              <div className=" d-lg-block ">
                <ol className="carousel-indicators tabs">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  >
                    <figure>
                      <img
                        src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                  >
                    <figure>
                      <img
                        src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png"
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                  </li>
                </ol>
              </div>
            </div>
            <div style={{ width: "30%" }}>
              <p>
                I have tried a lot of food delivery services but Plate is
                something out of this world! Their food is really healthy and it
                tastes great, which is why I recommend this company to all my
                friends!
              </p>
              <hr />
              <p>
                I have tried a lot of food delivery services but Plate is
                something out of this world! Their food is really healthy and it
                tastes great, which is why I recommend this company to all my
                friends!
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <p class="copyright">
        Admin{" "}
        <Link to="/admin/signin" title="">
          login
        </Link>
      </p>
    </div>
  );
}

export default Home;
