import { Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";


const Navbar = () => {
    return (
        <Row>
            <Col md={2} lg={2}>
                <div className='static-nav'>
                    <img src="src\data\spotify-logo.png" />
                    <ul>
                        <li>
                            <img src={require("../data/home.png")} />
                            Home
                        </li>
                        <li><img src={'./data / search.png'} />Search</li>
                        < li > <img src='.\data\playlist.png' />Your library</li>
                    </ul>
                    <button className="signUp btn">SIGN UP</button>
                    <button className="login">LOGIN</button>
                </div>
            </Col>
            <Navigation />
        </Row >




    )
}

export default Navbar