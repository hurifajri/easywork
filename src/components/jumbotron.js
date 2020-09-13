import * as contents from '../contents/jumbotron';
import { Container, Jumbotron } from 'react-bootstrap';
import React from 'react';

export default () => (
  <Jumbotron fluid>
    <Container>
      <div className="content">
        <h1 className="title">{contents.TITLE}</h1>
        <p className="subtitle">{contents.SUBTITLE}</p>
      </div>
    </Container>
  </Jumbotron>
);
