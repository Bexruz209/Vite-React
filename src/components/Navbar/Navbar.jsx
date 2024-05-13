import { Col, Container, Row } from "react-bootstrap";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="10" className="justify-content-between">
                        <ul className="list">
                            <Link to="/">
                            <li className="list_item">Mers</li>
                            </Link>
                            <Link to="/Audi">
                            <li className="list_item">Audi</li>
                            </Link>
                            <Link to="/Bmw">
                            <li className="list_item">Bmw</li>
                            </Link>
                        </ul>
                        {/* <div className="list_text">
                        <h1 className="list_h1">Bizni Moshina eloniga <h1 className="list_h2">Hush kelipsi</h1></h1>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}