import { Col, Container, Row } from "react-bootstrap";
import bmw_m5f90 from "../../../assets/bmw_img/M5F90/m5f90.png"

export default function M5F90 () {
    return (
        <>
        <Container>
            <Row>
                <Col lg="13 text-center">
                    <img src={bmw_m5f90} alt="" />
                    <p>BMW M5 - BMW Motorsport tomonidan BMW beshinchi seriyali avtomobilining o'zgartirilgan versiyasi. Birinchi avlod 1986 yilda taqdim etilgan. M5 ning keyingi avlodlari beshinchi seriyali avtomobillarning har bir avlodi, jumladan E34, E39, E60/61, F10 bilan almashtirildi. G30 modelini ishlab chiqarish boshlanishi bilan, birinchi buyurtmalar olinganidan so'ng, uning M versiyasini ishlab chiqarish ham 2018 yil mart oyida boshlangan.</p>              
                </Col>
            </Row>
        </Container>
        </>
    )
}