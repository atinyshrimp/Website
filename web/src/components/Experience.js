import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { EducationList, ExperienceList, ProfessionalList } from "./ExperienceList";
import education from "../assets/img/graduation-cap.svg"
import professional from "../assets/img/briefcase.svg"

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <h2>Experiences</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <Tab.Container id="exp-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <img src={education}/>
                                        Educational
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <img src={professional}/>
                                        Professional
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <EducationList />
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <ProfessionalList/>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}