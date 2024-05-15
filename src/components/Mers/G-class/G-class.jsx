import { Col, Container, Row } from "react-bootstrap";
import "./G-class.css"
import gclass from "../../../assets/img1/G-class/G-class.png"

export default function Gclass() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="class_box">
                            <img src={gclass} className="class_box_img"/>
                        </div>
                        <p className="class_box_text">G-klassi Eron shohi taklifi asosida Mercedes[3] ga harbiy avtomobil sifatida ishlab chiqilgan. 1979-yilda fuqarolik versiyasi sifatida taqdim etilgan. Ushbu transport vositasi baʼzan „Boʻri“ deb atalgan. Peugeot P4 Fransiyada Peugeot dvigateliga ega, litsenziya asosida ishlab chiqarilgan variant edi. Uni dunyodagi birinchi harbiy Argentina armiyasi 1981-yilda 461 harbiy modeli bilan boshlangan[4]. G-Classning rivojlanishi 1972-yilda Avstriyaning Grats shahrida Daimler-Benz va Steyr-Daimler-Puch oʻrtasidagi hamkorlik shartnomasi bilan boshlangan. Mercedes-Benz muhandislari dizayn va sinov uchun mas’ul boʻlgan. Birinchi model 1973-yilda Daimler-Benz rahbariyatiga taqdim etilgan. „G Model“ 1979-yilda Gratsda ishlab chiqarila boshlangan. </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}