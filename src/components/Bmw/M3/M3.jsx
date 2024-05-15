import { Col, Container, Row } from "react-bootstrap";
import bmw_m3 from "../../../assets/bmw_img/M3/m3.png"

export default function M3 () {
    return (
        <>
        <Container>
            <Row>
                <Col lg="13 text-center">
                    <img src={bmw_m3} alt="" />
                    <p>BMW M3 - BMW M GmbH sho''ba korxonasi BMW 3 Series sport versiyasi. "Standart" BMW 3 seriyali avtomobillardan asosiy farqlari kuchliroq dvigatel, yaxshilangan osma, o'zgartirilgan dizayn, ichki va tashqi ko'rinishdagi bir nechta aksanlar, bu uning "M"/Motorsport liniyasiga tegishli ekanligini ko'rsatadi. 1986 yildan beri ishlab chiqarilgan.BMW M3 (E30) ning birinchi versiyasi 1986 yilda chiqarilgan va faqat ikki eshikli sedan sifatida taqdim etilgan. 1988 yil o'rtalaridan boshlab M3 kabriolet sifatida ham taklif qilindi.</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}