import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './app.css';
import { Container } from 'react-bootstrap';
import Footer from './footer';
import Header from './header';
import Main from './main';
import React from 'react';

export default () => {
  return (
    <Container fluid>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
