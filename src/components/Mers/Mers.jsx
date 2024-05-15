import SetFlags from "../../assets/img1/22.png"
import { Col, Container, Row } from "react-bootstrap"
// import benz from "https://www.mercedes-benz.com/en/"
import "./Mers.css"
import { Link } from "react-router-dom"

export default function Mers() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <div className="box">
                            <img src={SetFlags} className="img" />
                        </div>
                        <ul className="mers_list">
                            <Link to="/Mers/Gclass">
                                <li className="list_items">G-class</li>
                            </Link>
                            <Link to="/Mers/Brabus">
                                <li className="list_items">Brabus</li>
                            </Link>
                            <Link to="/Mers/Maybach">
                                <li className="list_items">Maybach</li>
                            </Link>
                        </ul>
                        <p className="mers_text">Mercedes-Benz 1886-yili asos solingan. Tashkilotchilar Karl Bents Gotlib Daymler Vilgelm Maybax. Joylashuvi Shtutgart  Germaniya. Mahsuloti Yengil avtomobillar, yuk tashuvchi avtomobillar avtobuslar dvigatellar. Web sahifasi mercedes-benzde 2021-yil mart oyida „Mercedes-Benz“ Xitoy bozoridan 2,6 million avtomobilni qaytarib olishga qaror qildi. Qaror ushbu mamlakatda ishlab chiqarilib, import qilingan avtomobillarga ham, modellarga ham tegishli boʻladi. Avtomobillarni qaytarib olishga ulardagi dasturiy taʼminot – favqulodda xizmatlarni chaqirish tizimida qayd etilgan muammo sabab boʻlgan. Nosozlik tufayli tizim avtohalokat sodir boʻlganidan keyin favqulodda xizmatlarga notoʻgʻri maʼlumotlar yuborgan va oqibatda qutqaruvchilar notoʻgʻri manzillarga borgan[4].</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}