import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/vehicle-list">Danh sách</Link>
                    <Link to="/add-vehicle">Thêm mới</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;