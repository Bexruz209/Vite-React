import { Col, Container, Row } from "react-bootstrap"
import bmw from "../../assets/bmw_img/bmw.png"
import "./Bmw.css"

export default function Bmw() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <div className="bmw_box">
                            <img src={bmw} alt="" className="bmw_img" />
                        </div>
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