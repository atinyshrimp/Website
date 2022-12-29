import { Col, Container, Row } from "react-bootstrap"

export const Footer = () => {
    return (
        <section className="footer" id="footer">
            <Container>
               <Row>
                    <Col>
                        <div id="credits">
                            <div>Template by <a 
                            href="https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio"
                            target="_blank">judygab</a></div>
                            <div>Customization built by Joyce Lapilus</div>
                            <div>&copy;</div>

                        </div>
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}