import { Col, Container, Row } from "react-bootstrap"
import Chevrolet_img from "../../assets/Chevralet/Chevrolet.png"
import "./Chevrolet.css"

export default function Bmw() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <div className="Chevrolet_box">
                            <img src={Chevrolet_img} alt="Chevrolet_img" className="Chevrolet__img" />
                        </div>
                        <p className="Chevrolet_text">Kompaniya 1911 yil 3-noyabrda Uilyam Dyurant tomonidan, shuningdek 1908 yilda General Motors kompaniyasiga asos solgan mashhur poygachi va avtomobil muhandisi Lui Chevrolet va sarmoyadorlar Uilyam Littl va Edvin Kempbell bilan birgalikda tashkil etilgan. Kompaniya oʻsha paytda Buick poyga jamoasida boʻlgan Lui Chevrolet sharafiga nomlangan. U Devid Buikning eng sevimli poygachisi edi.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}