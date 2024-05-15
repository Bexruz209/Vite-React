import { Col, Container, Row } from "react-bootstrap"
import bmw from "../../assets/bmw_img/bmw.png"
import "./Bmw.css"
import { Link } from "react-router-dom"

export default function Bmw() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <div className="bmw_box">
                            <img src={bmw} alt="" className="bmw_img" />
                        </div>
                        <ul className="bmw_list">
                            <Link to="/Bmw/M3">
                                <li className="bmw_items">M3</li>
                            </Link>
                            <Link to="/Bmw/M5F90">
                                <li className="bmw_items">M5 F90</li>
                            </Link>
                            <Link to="X">
                                <li className="bmw_items">X</li>
                            </Link>
                        </ul>
                        <p className="bmw_text">2016 yilda yetakchi nemis avtokonsernlaridan biri, BMW (nem. Bayerische Motoren Werke-Bavariya motor zavodi) o‘zining yuz yilligini nishonlamoqda.
                            Aytish joizki, bu eng birinchi avtomobil zavodi emas, Mercedes-Benz, Opel, Ford, Renault va Fiat kompaniyalari undan avval paydo bo‘lgan, ammo BMW o‘z sinfining yo‘nalishini belgilab beruvchi avtomobillarni ko‘plab ishlab chiqara olgan, desak xato bo‘lmaydi.
                            Qanchalik ajablanarli bo‘lmasin, avtomobilsozlik BMWning asosiy daromad manbai va bosh maqsadi ham bo‘lmagan. 1916 yili kompaniya aviatsiya dvigatellari ishlab chiqara boshlagan, 1923 yilga kelib mototsikllarni o‘zlashtirgan kompaniya, asta-sekinlik bilan, 1928-yildan avtomobil sanoatiga kirib kelgan.
                            «"Rulda huzur-halovat bilan!" — bu shunchaki shior emas, balki BMW falsafasidir. Va biz unga rioya etishda davom etamiz», — deb hikoya qiladi Lyudvig Villish, BMW North America kompaniyasi prezidenti.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}