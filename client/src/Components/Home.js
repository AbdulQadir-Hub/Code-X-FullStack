import React from "react";
import "./Styles/Home.css";

function HomePage() {
  return (
    <div>
      {/* Carousel Section */}
      <div className="container2">
        <div className="container2-1">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://www.code-x.in/images/slider.png"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.code-x.in/images/slider-2.png"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.code-x.in/images/slider-3.png"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.code-x.in/images/slider-4.png"
                  className="d-block w-100"
                  alt="Slide 4"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.code-x.in/images/slider-5.png"
                  className="d-block w-100"
                  alt="Slide 5"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container3">
        <h1>Welcome to Code-X Technologies</h1>
        <p>
          In the present scenario most of the countries over the world have
          relied upon Indian software company and firms or Software Companies
          for the software development activities, as the country possesses a
          global competency in the IT sector. The Software development company
          India comprises of businesses related to the production and
          maintenance of computer software. The roots of the Software Industry
          India lies in the IT phenomenon. Services regarding software such as
          training, consulting and maintenance are a part of this ever-growing
          industry.
          <br />
          <br />
          The Software companies are witnessing a rapid growth and offer
          lucrative job opportunities making IT a premium career option for the
          youth. In fact, it is one of the fastest-growing sectors of Indian
          industry.
          <br />
          <br />
          India is emerging as a Global IT superpower. The success can be
          attributed to the factor advantage of high-quality software human
          resources. The Software Industry has succeeded in converting this
          comparative advantage to increasing exports. More and more companies
          are receiving the ISO 9000 certification, and the day is not far when
          India will have the highest number of ISO 9000 companies in the world.
        </p>
        <h2>Our Products</h2>
      </div>

      {/* Products Section */}
      <div className="container4">
        <div className="container4-1">
          <img
            className="img2"
            width="80px"
            src="https://www.code-x.in/images/Survey%20Solution.ico"
            alt="Survey Solution Icon"
          />
          <br />
          <br />
          <strong className="big">
            India's 1st rapidly growing Survey report generation software that
            gives peace of mind.
          </strong>
          <br />
          <p>
            This is very surveyor friendly software. Despite any other available
            survey software(s), this unique software is very user-friendly and
            easy to operate. As tested in real-world working scenarios,{" "}
            <strong>Survey Solution</strong> Software improves day-to-day
            working efficiency and increases productivity. This software also
            has built-in album creation software that helps to{" "}
            <strong>create photo-sheets</strong> within seconds. This software
            comes with a vast variety of reports.
          </p>
          <br />
          <a className="for" href="#">
            For more information &gt;&gt;
          </a>
        </div>
        <div className="container4-2">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/mTQvRBm9oZE?si=95bM7sYfnVUgyCUo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="container5">
        <div className="container5-1">
          <div className="features">
            <h3 className="orange">Projects</h3>
            <i className="fa fa-5x fa-sitemap" aria-hidden="true"></i>
          </div>
          <span className="span">
            Over the years, we at Code-X Technologies have successfully
            completed a wide range of projects for different industries and
            business sectors. The projects differ in...
          </span>
          <br />
          <br />
          <br />
          <a href="#">Read more</a>
        </div>
        <div className="container5-2">
          <div className="features">
            <h3 className="red">Services</h3>
            <i className="fa fa-5x fa-cogs" aria-hidden="true"></i>
          </div>
          <br />
          <ul>
            <li>Product Development.</li>
            <li>Research and Consulting.</li>
            <li>Offshore Web Applications Request for Proposal.</li>
            <li>Architecture, Design, and Development.</li>
          </ul>
          <br />
          <a href="#">Read more </a>
        </div>
        <div className="container5-3">
          <div className="features">
            <h3 className="blue">Careers</h3>
            <i className="fa fa-5x fa-graduation-cap" aria-hidden="true"></i>
          </div>
          <br />
          <span>
            The working environment has evolved over the years so that each
            person feels comfortable developing their skills or potential and
            making the best use of their abilities…
          </span>
          <br />
          <br />
          <br />
          <br />
          <a href="#">Read more </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
