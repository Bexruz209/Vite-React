import { Col, Container, Row } from "react-bootstrap";
import cobolt from "../../../assets/Chevralet/Cobolt/cobolt.png"

export default function Cobolt () {
    return (
        <>
        <Container>
            <Row>
                <Col lg="13 text-center">
                    <img src={cobolt} alt="" />
                    <p>Chevrolet Cobalt - 2004 yildan 2010 yilgacha Shimoliy Amerikada ishlab chiqarilgan ixcham avtomobil. 2011 yildan 2022 yilgacha xuddi shu nomdagi avtomobil ishlab chiqarildi, u rivojlanayotgan mamlakatlar bozorlariga mo'ljallangan, ammo birinchi avlod bilan hech qanday umumiylik yo'q.</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}