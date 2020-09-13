import { Container } from 'react-bootstrap';
import React from 'react';

export default ({ rootClassName, className, children }) => (
  <Container style={rootStyle} className={rootClassName}>
    <h2 style={titleStyle()} className={className}>
      {children}
    </h2>
  </Container>
);

// Default styles
const rootStyle = {
  textAlign: 'center',
  marginBottom: '25px',
};

const titleStyle = () => {
  const query = '(min-width: 992px)';
  const mediaQueryList = window.matchMedia(query);
  const largeScreen = mediaQueryList.matches;

  return {
    fontWeight: 600,
    color: 'var(--blue)',
    marginBottom: 0,
    fontSize: `${largeScreen ? '1.2rem' : '0.9rem'}`,
  };
};
