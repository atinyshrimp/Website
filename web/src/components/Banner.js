import { Col, Container, Row } from "react-bootstrap"
import { Download } from "react-bootstrap-icons";
import { CromerHourglass } from "./CromerHourglass";
import profilepic from "../assets/img/profile_pic.png";

export const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="personal-info">
                            <img src={profilepic} id="profile"/>
                            <span className="tagline">she/her | INFJ-A</span>
                        </div>
                        <h1>{"Hi I'm Joyce ! "}</h1>
                        <p>I am a 20 year old engineering student located in France. My interests are video games, volleyball, playing music, and learning about languages & cultures !</p>
                        <a href="https://www.canva.com/design/DAFZcVFIdso/SujFrqK9LDfwA3yQlcS5NQ/view?utm_content=DAFZcVFIdso&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                        target="_blank">Get My Resume !<div class="download-btn"><Download size={25}/></div></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <CromerHourglass />
                        {/* <img src={headerImg} alt="Header Img" /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}