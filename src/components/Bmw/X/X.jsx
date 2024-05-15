import { Col, Container, Row } from "react-bootstrap";
import bmw_x from "../../../assets/bmw_img/X/x.png"

export default function X () {
    return (
        <>
        <Container>
            <Row>
                <Col lg="13 text-center">
                    <img src={bmw_x} alt="" />
                    <p>BMW X5 - bu BMW tomonidan ishlab chiqarilgan o'rta o'lchamdagi hashamatli SUV[1]. BMW X5 o'zining debyutini 1999-yilda E53 modeli sifatida qilgan. Bu BMWning birinchi SUV MASHINASI edi. Ishga tushirilganda u to'liq g'ildirakli haydovchiga ega edi va qo'lda yoki avtomatik uzatmalar qutisi bilan mavjud edi. Ikkinchi avlod 2006-yilda sotuvga chiqarildi va u E70 nomi bilan tanilgan.</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}