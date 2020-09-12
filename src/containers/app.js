import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './app.css';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Jumbotron,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import React, { useRef } from 'react';
import ArrowIcon from '../components/icons/arrow';
import contentOne from '../assets/images/content-001.png';
import contentTwo from '../assets/images/content-002.png';
import logo from '../assets/images/logo.png';
import LoveIcon from '../components/icons/love';
import personOne from '../assets/images/person-001.jpg';
import personThree from '../assets/images/person-002.jpg';
import personTwo from '../assets/images/person-003.jpg';
import SearchIcon from '../components/icons/search';
import Slider from 'react-slick';

export default () => {
  const refContainer = useRef(null);

  const links = [
    { id: 1, title: 'Home', href: '#home' },
    { id: 2, title: 'About Us', href: '#about-us' },
    { id: 3, title: 'Services', href: '#services' },
    { id: 4, title: 'Pricing', href: '#pricing' },
    { id: 5, title: 'Careers', href: '#careers' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'David Champion',
      role: 'CEO of iCloud',
      img: personOne,
      message:
        'System is excelent. It has made my system user experience to become one of the easiest!',
    },
    {
      id: 2,
      name: 'David Frank van Hord',
      role: 'CEO of Marks.co',
      img: personTwo,
      message:
        'I just wanted to share a quick note and let you know that you guys do a really good job.',
    },
    {
      id: 3,
      name: 'Lucas Bond',
      role: 'BOD of Skyscanner',
      img: personThree,
      message:
        "Now it's almost like having a designer right. I just choose the page, make the change.",
    },
    {
      id: 4,
      name: 'Lucas Bond',
      role: 'BOD of Skyscanner',
      img: personThree,
      message:
        "Now it's almost like having a designer right. I just choose the page, make the change.",
    },
  ];

  const settings = {
    dots: true,
    // infinite: true,
    // autoplay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
          {/* Content */}
          <Row className="content">
            <Col xs={12} md={6} lg={7} className="image">
              <Container>
                <img src={contentOne} alt="First content" />
              </Container>
            </Col>
            <Col xs={12} md={6} lg={5} className="text">
              <Container>
                <h2 className="title">
                  We can give you our best user experience to your system
                </h2>
                <p className="description">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Container>
            </Col>
          </Row>
          <Row className="content">
            <Col xs={12} md={6} lg={5} className="text">
              <Container>
                <h2 className="title">
                  Easy access. Whenever, wherever you want
                </h2>
                <p className="description">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Container>
            </Col>
            <Col xs={12} md={6} lg={7} className="image">
              <Container>
                <img src={contentTwo} alt="Second content" />
              </Container>
            </Col>
          </Row>
          {/* Testimonial */}
          <Row className="testimonial">
            <Col>
              <Container>
                <div className="testimonial-heading">
                  <span className="icon-wrapper">
                    <LoveIcon
                      size={13}
                      color="var(--white)"
                      className="love-icon"
                    />
                  </span>
                  <h2 className="title">
                    What other people say about our service
                  </h2>
                </div>
                <Button
                  className="next-button"
                  onClick={() => refContainer.current.slickNext()}
                >
                  <ArrowIcon
                    size={15}
                    color="var(--purple)"
                    className="arrow-icon"
                  />
                </Button>
              </Container>
            </Col>
          </Row>
          {/* Testimonial Slider */}
          <Row className="testimonial-slider">
            <Col>
              <Container fluid>
                <Slider ref={refContainer} {...settings}>
                  {testimonials.map(person => (
                    <Card key={person.id}>
                      <div className="card-detail">
                        <Card.Img src={person.img} />
                        <div>
                          <Card.Title>{person.name}</Card.Title>
                          <Card.Subtitle className="text-muted">
                            {person.role}
                          </Card.Subtitle>
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Text>"{person.message}"</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Slider>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Footer */}
      <Row className="footer">
        <Col>
          <Container>This is footer</Container>
        </Col>
      </Row>
    </Container>
  );
};
