import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/users.svg";
import meter2 from "../assets/img/world.svg";
import meter3 from "../assets/img/laptop-code.svg";
import meter4 from "../assets/img/browser.svg";
import meter5 from "../assets/img/cubes.svg";
import meter6 from "../assets/img/manette-de-jeu.svg";
import meter7 from "../assets/img/analyse-alt.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                What I can do
                <br></br>
                <span>(also what I am currently learning to do)</span>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h4>3D Modeling</h4>
                  <h6>
                    SolidWorks, <span>Blender</span>
                  </h6>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <span>
                    <h4>Data Analysis</h4>
                  </span>
                  <span>
                    <h6>Power BI</h6>
                  </span>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <span>
                    <h4>Game Development</h4>
                  </span>
                  <span>
                    <h6>Unity3D</h6>
                  </span>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h4>Languages</h4>
                  <h6>
                    French, English, <span>Korean</span>, <span>Japanese</span>
                  </h6>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h4>Programming</h4>
                  <h6>
                    C#, <span>Python</span>, R
                  </h6>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" style={{ color: "#fff" }} />
                  <h4>Team Management</h4>
                  <h6>Budgeting, Organization</h6>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h4>Web Development</h4>
                  <h6>HTML, CSS, JavaScript (React.js)</h6>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} /> */}
    </section>
  );
};
