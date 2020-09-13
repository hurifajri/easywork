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
  Image,
  Jumbotron,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import React, { useRef } from 'react';
import ArrowIcon from '../components/icons/arrow';
import HappyIcon from '../components/icons/happy';
import intro001 from '../assets/images/intro-001.png';
import intro002 from '../assets/images/intro-002.png';
import logo from '../assets/images/logo.png';
import LoveIcon from '../components/icons/love';
import mapMockup from '../assets/images/map-mockup.png';
import partner1 from '../assets/images/apple.png';
import partner2 from '../assets/images/airbnb.png';
import partner3 from '../assets/images/google.png';
import partner4 from '../assets/images/nvidia.png';
import partner5 from '../assets/images/tesla.png';
import partner6 from '../assets/images/samsung.png';
import partner7 from '../assets/images/facebook.png';
import partner8 from '../assets/images/microsoft.png';
import person001 from '../assets/images/person-001.jpg';
import person002 from '../assets/images/person-002.jpg';
import person003 from '../assets/images/person-003.jpg';
import person004 from '../assets/images/person-004.jpg';
import person005 from '../assets/images/person-005.jpg';
import person006 from '../assets/images/person-006.jpg';
import person007 from '../assets/images/person-007.jpg';
import person008 from '../assets/images/person-008.jpg';
import person009 from '../assets/images/person-009.jpg';
import person010 from '../assets/images/person-010.jpg';
import SearchIcon from '../components/icons/search';
import SectionHeader from '../components/section-header';
import SectionTitle from '../components/section-title';
import Slider from 'react-slick';

export default () => {
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
      img: person001,
      message:
        'System is excelent. It has made my system user experience to become one of the easiest!',
    },
    {
      id: 2,
      name: 'David Frank van Hord',
      role: 'CEO of Marks.co',
      img: person002,
      message:
        'I just wanted to share a quick note and let you know that you guys do a really good job.',
    },
    {
      id: 3,
      name: 'Lucas Bond',
      role: 'BOD of Skyscanner',
      img: person003,
      message:
        "Now it's almost like having a designer right. I just choose the page, make the change.",
    },
    {
      id: 4,
      name: 'David Champion',
      role: 'CEO of iCloud',
      img: person001,
      message:
        'System is excelent. It has made my system user experience to become one of the easiest!',
    },
  ];

  const refContainer = useRef(null);
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

  const people = [
    {
      id: 1,
      name: 'Frank Ltarnam',
      role: 'CEO',
      img: person004,
    },
    {
      id: 2,
      name: 'Bob Shefley',
      role: 'UI/UX Designer',
      img: person005,
    },
    {
      id: 3,
      name: 'Jason Stewars',
      role: 'Full-Stack Developer',
      img: person006,
    },
    {
      id: 4,
      name: 'Sabrina Rachel',
      role: 'Marketing',
      img: person007,
    },
    {
      id: 5,
      name: 'Marissa Lawren',
      role: 'Customer Support',
      img: person008,
    },
    {
      id: 6,
      name: 'Romane Regad',
      role: 'Jr UI/UX Designer',
      img: person009,
    },
    {
      id: 7,
      name: 'Tania Ferreira',
      role: 'Business Analyst',
      img: person010,
    },
  ];

  const partners = [
    { id: 1, img: partner1 },
    { id: 2, img: partner2 },
    { id: 3, img: partner3 },
    { id: 4, img: partner4 },
    { id: 5, img: partner5 },
    { id: 6, img: partner6 },
    { id: 7, img: partner7 },
    { id: 8, img: partner8 },
  ];

  return (
    <Container fluid>
      {/* Header */}
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
      {/* Main */}
      <Row className="main">
        <Col>
          {/* Intro */}
          <Container className="section">
            <Row className="intro">
              <Col xs={12} md={6} lg={7} className="image">
                <Image src={intro001} alt="First intro" />
              </Col>
              <Col xs={12} md={6} lg={5} className="text">
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
              </Col>
            </Row>
            <Row className="intro">
              <Col xs={12} md={{ span: 6, order: 2 }} lg={7} className="image">
                <Image src={intro002} alt="Second intro" />
              </Col>
              <Col xs={12} md={{ span: 6, order: 1 }} lg={5} className="text">
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
              </Col>
            </Row>
          </Container>
          {/* Testimonial */}
          <Container className="section">
            <Row className="testimonial">
              <Col>
                <SectionHeader
                  title="What other people say about our service"
                  rightClassName="right-wrapper"
                  iconWrapperClassName="icon-wrapper"
                  icon={
                    <LoveIcon
                      size={13}
                      color="var(--white)"
                      className="love-icon"
                    />
                  }
                  button={
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
                  }
                />
              </Col>
            </Row>
            <Row className="testimonial-slider">
              <Col>
                <Slider ref={refContainer} {...settings}>
                  {testimonials.map(person => (
                    <Card key={person.id}>
                      <div className="card-detail">
                        <Card.Img src={person.img} />
                        <div>
                          <Card.Title>{person.name}</Card.Title>
                          <Card.Subtitle>{person.role}</Card.Subtitle>
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Text>"{person.message}"</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Slider>
              </Col>
            </Row>
          </Container>
          {/* Our people */}
          <Container className="section">
            <Row className="our-people">
              <Col>
                <SectionHeader
                  title="Our important people is listed here"
                  rightClassName="right-wrapper"
                  iconWrapperClassName="icon-wrapper"
                  icon={
                    <HappyIcon
                      size={13}
                      color="var(--white)"
                      className="happy-icon"
                    />
                  }
                  button={
                    <>
                      <Button className="edit-button">Edit</Button>
                      <Button className="add-button">Add</Button>
                    </>
                  }
                />
              </Col>
            </Row>
            <Row className="our-people-grid">
              {people.map(({ id, name, role, img }) => (
                <Col
                  className="item"
                  xs={12}
                  sm={5}
                  md={3}
                  lg={2}
                  xl={2}
                  key={id}
                >
                  <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Subtitle>{role}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          {/* Clients */}
          <Container className="section">
            <Row className="partners">
              <Col>
                <SectionTitle>We've worked with</SectionTitle>
              </Col>
            </Row>
            <Row className="partners-list">
              <Col>
                {partners.map(partner => (
                  <Image src={partner.img} key={partner.id} />
                ))}
              </Col>
            </Row>
          </Container>
          {/* Contact Us */}
          <Container className="section">
            <Row className="contact-us">
              <Col>
                <SectionTitle>Contact Us</SectionTitle>
              </Col>
            </Row>
            <Row className="contact-us scale">
              <Col xs={12} md={6} className="form-wrapper">
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="select">
                      <option>Please select your subject</option>
                      <option>Question</option>
                      <option>Help</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      placeholder="Write your message here"
                    />
                  </Form.Group>
                  <div className="button-wrapper">
                    <Button className="submit-button" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
              <Col xs={12} md={6} className="map-wrapper">
                <Image src={mapMockup} alt="location" />
              </Col>
            </Row>
          </Container>
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
