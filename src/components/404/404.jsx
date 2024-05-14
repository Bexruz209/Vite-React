import { Col, Container, Row } from "react-bootstrap";
import PageFound_img from "../../assets/404/404.png"

export default function PageFound() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <img src={PageFound_img} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}