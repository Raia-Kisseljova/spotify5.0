import { Row, Col } from "react-bootstrap";


const Navbar = () => {
    return (
        <Row>
            <Col md={3} lg={3}>
                <div className='static-nav'>

                    <ul>
                        <li><img src='.\data\home.png' />Home</li>
                        <li><img src='./data/search.png' />Search</li>
                        <li><img src='.\data\playlist.png' />Your library</li>
                    </ul>
                </div>

            </Col>
        </Row>




    )
}

export default Navbar