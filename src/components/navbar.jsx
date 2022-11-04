import React from 'react';
import styles from './css/navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'


function components() {
    return <div>
        <Navbar expand="lg" className={styles.homeBar} >
            <Container fluid>
                <Navbar.Brand href="#" className={styles.brand}>
                    <Image src={Logo} width="140" height="55" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '250px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className={styles.navLinkActive} >HOME</Nav.Link>
                        <Nav.Link href="#action2" className={styles.navLink} >INSTITUCIONAL</Nav.Link>
                        <Nav.Link href="#action2" className={styles.navLink} >SERVIÇOS</Nav.Link>
                        <Nav.Link href="#action2" className={styles.navLink} >PROJETOS</Nav.Link>
                        <Nav.Link href="#action2" className={styles.navLink} >CLIENTES</Nav.Link>
                        <Nav.Link href="#action2" className={styles.navLink} >TRABALHE CONOSCO</Nav.Link>
                        <Nav.Link href="#action2" className={styles.navLink} >CONTATO</Nav.Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        
                    </Nav>
                 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

export default components;