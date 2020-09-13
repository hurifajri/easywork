import { Container, Jumbotron } from 'react-bootstrap';
import React from 'react';

export default () => (
  <Jumbotron fluid>
    <Container>
      <div className="content">
        <h1 className="title">Make development easy with us.</h1>
        <p className="subtitle">
          Doing development can never be easy, and it takes time and resources.
          We at EasyWork has the solution.
        </p>
      </div>
    </Container>
  </Jumbotron>
);
