import { Col, Container, Row } from "react-bootstrap";
import spark from "../../../assets/Chevralet/Spark/spark.png"

export default function Spark () {
    return (
        <>
        <Container>
            <Row>
                <Col lg="13 text-center">
                    <img src={spark} alt="" />
                    <p>Chevrolet Spark - 2005 yildan beri General Motors tomonidan ishlab chiqarilgan kichik avtomobil. 2015 yilgacha u ba'zi bozorlarda Daewoo Matiz nomi bilan tanilgan. 2015 yildan 2020 yilgacha esa Ravon R2 brendi ostida O‘zbekistondan tashqarida yetkazib berilgan. </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}