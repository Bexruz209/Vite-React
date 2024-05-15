import { Col, Container, Row } from "react-bootstrap";
import rs6 from "../../../assets/audi/RS6/rs6.png"

export default function RS6() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13 text-center">
                        <img src={rs6} alt="" />
                        <p>Audi RS 6 - Audi Sport GmbH bo'limi (avval quattro GmbH) tomonidan Audi A6 platformasida ishlab chiqarilgan sport avtomobili. Avtomobil stansiya vagonida (Avant) mavjud. Uchinchi avlodga qadar u ikkita kuzov turida, sedan va stansiya vagonida (Avant) ishlab chiqarilgan. Audi S6 ning kamroq kuchli sport versiyasi mavjud.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}