import { Col, Container, Row } from "react-bootstrap"
import Chevrolet_img from "../../assets/Chevralet/Chevrolet.png"
import "./Chevrolet.css"
import { Link } from "react-router-dom"

export default function Bmw() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <div className="Chevrolet_box">
                            <img src={Chevrolet_img} alt="Chevrolet_img" className="Chevrolet__img" />
                        </div>
                        <ul className="list_">
                            <Link to="/Chevrolet/Spark" >
                                <li className="list__itemas">Spark</li>
                            </Link>
                            <Link to="/Chevrolet/Malibu" >
                                <li className="list__itemas">Malibu</li>
                            </Link>
                            <Link to="/Chevrolet/Cobolt" >
                                <li className="list__itemas">Cobolt</li>
                            </Link>
                        </ul>
                        <p className="Chevrolet_text">Kompaniya 1911 yil 3-noyabrda Uilyam Dyurant tomonidan, shuningdek 1908 yilda General Motors kompaniyasiga asos solgan mashhur poygachi va avtomobil muhandisi Lui Chevrolet va sarmoyadorlar Uilyam Littl va Edvin Kempbell bilan birgalikda tashkil etilgan. Kompaniya oʻsha paytda Buick poyga jamoasida boʻlgan Lui Chevrolet sharafiga nomlangan. U Devid Buikning eng sevimli poygachisi edi.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}