import {
  Col,
  Container,
  Form,
  FormControl,
  Image,
  Jumbotron,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import React from 'react';
import SearchIcon from '../components/icons/search';

export default () => {
  const links = [
    { id: 1, title: 'Home', href: '#home' },
    { id: 2, title: 'About Us', href: '#about-us' },
    { id: 3, title: 'Services', href: '#services' },
    { id: 4, title: 'Pricing', href: '#pricing' },
    { id: 5, title: 'Careers', href: '#careers' },
  ];
  return (
    <Row className="header">
      <Col>
        {/* Navbar */}
        <Navbar expand="md">
          <Container>
            <Navbar.Brand href="#">
              <Image src={logo} alt="EeasyWork" />
            </Navbar.Brand>
            <Navbar.Toggle>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Navbar.Toggle>
            <Navbar.Collapse>
              <Nav defaultActiveKey="#home" className="m-auto">
                {links.map(({ id, title, href }) => (
                  <Nav.Link href={href} key={id}>
                    {title}
                  </Nav.Link>
                ))}
              </Nav>
              <Form inline className="search-form">
                <FormControl type="text" className="search-input" />
                <SearchIcon
                  size={15}
                  color="var(--white)"
                  className="search-icon"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* Jumbotron */}
        <Jumbotron fluid>
          <Container>
            <div className="content">
              <h1 className="title">Make development easy with us.</h1>
              <p className="subtitle">
                Doing development can never be easy, and it takes time and
                resources. We at EasyWork has the solution.
              </p>
            </div>
          </Container>
        </Jumbotron>
      </Col>
    </Row>
  );
};
