import { Col, Container, Row } from "react-bootstrap";
import "./Home.css"

export default function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <h1 className="text">Bizni moshina tarihimizga <h1 className="text_smoll">hush kelipsiz</h1></h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}