import { Col, Container, Row } from "react-bootstrap"
import audi from "../../assets/audi/audi.png"
import "./Audi.css"

export default function Audi() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="13">
                        <div className="audi_box">
                            <img src={audi} alt="" className="audi_img" />
                        </div>
                        <p className="audi_text">Audining hozirgi koʻrinishi, DKW , Horch , Audi va Wanderer brendlari ostida avtomobil va mototsikl ishlab chiqaradigan toʻrtta kompaniyaning birlashishi natijasida hosil boʻlgan. Auto Union kompaniyasi vorisi hisoblanadi. Oʻzgartirishlar natijasida faqat Audi savdo belgisi saqlanib qoldi. Wanderer brendi birinchi avtomobilini1913-yilda ishlab chiqargan. Avgust Xorch 1899-yilda oʻzining birinchi shaxsiy korxonasini (Horch & Co.) tashkil etdi va kreditorlar uni biznesdan olib tashlagach, 1909-yilda birinchi avtomobilini ishlab chiqargan. Nemis tilidan tarjima qilingan Horch-"tinglash" degan maʼnoni anglatadi. Yangi brend uchun nom tanlashda, Avgustning biznes sheriklaridan birining oʻgʻli asoschining familiyasini lotin tiliga tarjima qilishni taklif qildi, yaʼni Audi - audire  feʼlining ikkinchi shaxsining imperativ shakli (lotin tilidan tarjima qilingan   -  „tinglang“)[3]. 1921-yildan kompaniya muvaffaqiyatga erisha boshladi. Bu yil chap qoʻlda ishlaydigan birinchi nemis mashinasi ishlab chiqarilgan. Bungacha kompaniya faqat dvigatellar va suspenziyalar ishlab chiqarish bilan shugʻullangan boʻlsa, endilikda u foydalanish qulayligiga eʼtibor qarata boshladi. 1928-yilda kompaniyani DKW mototsikl ishlab chiqaruvchisi sotib oldi va 1931-yilda old gʻildirakli DKW F1 nomi bilan ilk avtomobilini ishlab chiqardi[4]. Bunga 1929-yilda boshlangan jahon iqtisodiy inqirozi yordam berdi. Gap shundaki, katta dvigatel hajmiga ega boʻlgan avtomobillar umumiy pul yetishmasligi tufayli talabni toʻxtatdi. Keyin Audi rahbari old gʻildirakli ixcham avtomobilni ishlab chiqishni buyurdi.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}