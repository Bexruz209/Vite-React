import { Col, Container, Row } from "react-bootstrap";
import Q_img from "../../../assets/audi/Q8/q8.png"

export default function Q8() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13 text-center">
                        <img src={Q_img} alt="" />
                        <p>Audi Q8 - nemis avtomobil ishlab chiqaruvchisi Audi kompaniyasining sport krossoveri. Audi Q8 kontsepti ommaga 2017-yil 9-yanvarda AQShning Detroyt shahrida bo‘lib o‘tgan Shimoliy Amerika xalqaro avtosalonida (NAIAS) taqdim etildi. Ishlab chiqarish versiyasi 2018-yilning may oyida Xitoydagi Shenzhen avtosalonida[2] taqdim etilgan. RS Q8 ning sport versiyasi keyinroq Jeneva avtosalonida namoyish etiladi[3]. Q8 - SQ8 va RS Q8 ning sport versiyalarini sinovdan o'tkazish allaqachon davom etmoqda[4].</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}