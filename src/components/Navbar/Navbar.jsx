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
                                <li className="list_item">Home</li>
                            </Link>
                            <Link to="/Mers">
                                <li className="list_item">Mers</li>
                            </Link>
                            <Link to="/Audi">
                                <li className="list_item">Audi</li>
                            </Link>
                            <Link to="/Bmw">
                                <li className="list_item">Bmw</li>
                            </Link>
                            <Link to="/Chevrolet">
                            <li className="list_item">Chevrolet</li>
                            </Link>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}