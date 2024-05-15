import { Col, Container, Row } from "react-bootstrap";
import W124 from "../../../assets/img1/W124/w124.png";
import "./Maybach.css"

export default function Maybach() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <div className="Maybach_img">
                        <img src={W124} />
                        </div>
                        <p className="Maybach_text">Birinchi jahon urushi tugagandan so'ng, Versal shartnomasiga ko'ra, Germaniyada harbiy texnika ishlab chiqarish to'xtatildi. Taqiq samolyot dvigatellariga ham tegishli. Maybach kompaniyasi avtobuslar, o't o'chirish mashinalari va tez yordam mashinalari, lokomotivlar uchun dvigatellar ishlab chiqarishni yo'lga qo'yish orqali o'z faoliyat sohasini o'zgartirdi[2]. 1918 yilda kompaniya nomi Maybach-Motorenbau GmbH[12] ga o'zgartirildi. Karl Maybax yengil avtomobil ishlab chiqaruvchilar orasida ham xaridorlarni qidirdi. 1920 yilda u Gollandiyaning Spyker avtomobil kompaniyasi bilan 1000 ta dvigatel uchun shartnoma tuzdi: Maybach Spykerga Spyker 30/40 C4 modeli uchun 5,7 litrli olti silindrli W2 dvigateli (70 ot kuchi) bilan ta'minladi[2][5][comm. . 2].</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}