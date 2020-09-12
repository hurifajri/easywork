import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {
  Col,
  Container,
  Form,
  FormControl,
  Jumbotron,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import firstContent from '../assets/images/content-001.png';
import logo from '../assets/images/logo.png';
import React from 'react';
import SearchIcon from '../components/icons/search';
import secondContent from '../assets/images/content-002.png';

export default () => {
  const links = [
    { id: 1, title: 'Home', href: '#home' },
    { id: 2, title: 'About Us', href: '#about-us' },
    { id: 3, title: 'Services', href: '#services' },
    { id: 4, title: 'Pricing', href: '#pricing' },
    { id: 5, title: 'Careers', href: '#careers' },
  ];
  return (
    <Container fluid>
      {/* Header */}
      <Row className="header">
        <Col>
          {/* Navbar */}
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#">
                <img src={logo} width={60} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav defaultActiveKey="#home" className="m-auto">
                  {links.map(({ id, title, href }) => (
                    <Nav.Link href={href} key={id}>
                      {title}
                    </Nav.Link>
                  ))}
                </Nav>
                <Form inline className="search-form">
                  <FormControl type="text" className="search-input" />
                  <SearchIcon size={15} color="white" className="search-icon" />
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* Jumbotron */}
          <Jumbotron fluid>
            <Container>
              <h1 className="heading">Make development easy with us.</h1>
              <p className="subheading">
                Doing development can never be easy, and it takes time and
                resources. We at EasyWork has the solution.
              </p>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      {/* Main */}
      <Row className="main">
        <Col>
          <Container>
            {/* Content */}
            <Row className="content">
              <Col xs={12} md={7} className="image">
                <img src={firstContent} alt="First content" />
              </Col>
              <Col xs={12} md={5} className="text">
                <Container>
                  <h2 className="title">
                    We can give you our best user experience to your system
                  </h2>
                  <p className="description">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </Container>
              </Col>
            </Row>
            <Row className="content">
              <Col xs={12} md={5} className="text">
                <Container>
                  <h2 className="title">
                    Easy access. Whenever, wherever you want
                  </h2>
                  <p className="description">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </Container>
              </Col>
              <Col xs={12} md={7} className="image">
                <img src={secondContent} alt="Second content" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      {/* Footer */}
      <Row className="footer">
        <Col>This is footer</Col>
      </Row>
    </Container>
  );
};
