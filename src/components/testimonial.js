import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import React, { useRef } from 'react';
import ArrowIcon from '../components/icons/arrow';
import LoveIcon from '../components/icons/love';
import person001 from '../assets/images/person-001.jpg';
import person002 from '../assets/images/person-002.jpg';
import person003 from '../assets/images/person-003.jpg';
import SectionHeader from '../components/section-header';
import Slider from 'react-slick';

export default () => {
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
    infinite: true,
    autoplay: true,
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
    <Container className="section">
      <Row className="testimonial">
        <Col>
          <SectionHeader
            title="What other people say about our service"
            rightClassName="right-wrapper"
            iconWrapperClassName="icon-wrapper"
            icon={
              <LoveIcon size={13} color="var(--white)" className="love-icon" />
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
  );
};
