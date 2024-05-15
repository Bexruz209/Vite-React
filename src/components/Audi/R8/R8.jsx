import { Col, Container, Row } from "react-bootstrap";
import audi_img from "../../../assets/audi/R8/r8.png";
import "./R8.css"

export default function R8() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <div className="audi_box">
                            <img src={audi_img} alt=" " className="audi_smoll_img" />
                        </div>
                        <p className="audi_text">Audi R8 ning 525 ot kuchiga ega 5,2 litrli atmosfera V10 dvigateli bilan modifikatsiyasi. Dvigateldan qatʼi nazar, quvvat olti pogʻonali mexanik yoki avtomatik Audi R Tronic transmissiyasi orqali uzatish mexanizmi yordamida uzatiladi (xuddi shunday Lamborghini Gallardo[4] ga oʻrnatilgan). Bundan tashqari, R8 toʻliq gʻildirakli haydovchi tizimi va engil alyuminiy qotishma korpusi bilan jihozlangan. Avtomobil italiyalik avtomobil dizayneri Valter de Silva va uning dizayn jamoasi tomonidan ishlab chiqilgan[5].</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}