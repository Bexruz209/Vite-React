import { Col, Container, Row } from "react-bootstrap";
import brabus from "../../../assets/img1/Maybach/Brabus.png";
import "./Brabus.css"


export default function Brabus() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <div className="w221_box">
                            <img src={brabus} />
                        </div>
                        <p className="w221_text">Kompaniya Bodo Buschmann o'z avtomobillarini yaratmoqchi bo'lganidan boshlandi. Buschmann o'z brendini yaratishga qaror qilgandan so'ng, Brabus GmbH dastlab 1977-yilda G'arbiy Germaniyada Buschmanning do'sti Klaus Brakman bilan ro'yxatdan o'tgan, chunki Germaniya qonunchiligi kamida ikki kishidan iborat kompaniya tashkil etilishini talab qilgan. Kompaniyaning nomi asoschilar familiyasining dastlabki uchta belgisidan (Bra ckmann, Bus chmann) olingan. Kompaniya tashkil etilgandan so'ng, Brakmann transport vositalarini o'zgartirish yoki biznes yuritishga qiziqish bildirmadi, shuning uchun u o'z kompaniyasi aktsiyalarini Buschmannga 100 yevroga sotdi[1].</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}