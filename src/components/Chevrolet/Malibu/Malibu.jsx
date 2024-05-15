import { Col, Container, Row } from "react-bootstrap";
import malibu from "../../../assets/Chevralet/Malibu/malibu.png"

export default function Malibu () {
    return (
        <>
        <Container>
            <Row>
                <Col lg="13 text-center">
                    <img src={malibu} alt="" />
                    <p>Chevrolet Malibu — „General Motors“ tomonidan ishlab chiqilgan avtomobil. Yuksak harakatlanish xarakteristikasi, zamonaviy xavfsizlik tizimi va betakror interyeri bilan alohida ajralib turuvchi „Malibu“da yangi dizaynerlik ishlanmalari qoʻllanilgan: ikki sektsiyali Chevrolet radiator panjaralari, kuchli ksenon faralar, shuningdek, svetodiodli bejirim orqa faralar shular jumlasidandir.[3]</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}