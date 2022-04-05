import { Navbar, Container, Nav } from "react-bootstrap"

export default function NavbarEl({ currentPage, handlePageChange }) {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link
                        href="#home"
                        onClick={() => handlePageChange('home')}
                        className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
                    >
                        Home</Nav.Link>
                    <Nav.Link
                        href="#home"
                        onClick={() => handlePageChange('work')}
                        className={currentPage === 'work' ? 'nav-link active' : 'nav-link'}
                    >
                        My Projects</Nav.Link>
                    <Nav.Link
                        href="#home"
                        onClick={() => handlePageChange('about')}
                        className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
                    >
                        About</Nav.Link>
                    <Nav.Link
                        href="#home"
                        onClick={() => handlePageChange('contact')}
                        className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact me</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}