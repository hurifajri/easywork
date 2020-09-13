import { Container } from 'react-bootstrap';
import React from 'react';

export default ({
  rootClassName,
  leftClassName,
  rightClassName,
  iconWrapperClassName,
  titleClassName,
  icon,
  button,
  title,
}) => (
  <Container style={rootStyle()} className={rootClassName}>
    <div style={leftStyle} className={leftClassName}>
      <span style={iconWrapperStyle()} className={iconWrapperClassName}>
        {icon}
      </span>
      <h2 style={titleStyle()} className={titleClassName}>
        {title}
      </h2>
    </div>
    <div style={rightStyle()} className={rightClassName}>
      {button}
    </div>
  </Container>
);

// Default styles
const rootStyle = () => {
  const query = '(min-width: 1200px)';
  const mediaQueryList = window.matchMedia(query);
  const largeScreen = mediaQueryList.matches;

  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '35px',
    paddingLeft: 0,
    paddingRight: 0,
    maxWidth: `${largeScreen ? '950px' : 'unset'}`,
  };
};

const leftStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const rightStyle = () => {
  const query = '(min-width: 1200px)';
  const mediaQueryList = window.matchMedia(query);
  const largeScreen = mediaQueryList.matches;

  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: `${largeScreen ? '117px' : 'unset'}`,
  };
};

const iconWrapperStyle = () => {
  const query = '(min-width: 1200px)';
  const mediaQueryList = window.matchMedia(query);
  const largeScreen = mediaQueryList.matches;

  return {
    position: 'relative',
    display: 'inline-block',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    marginRight: `${largeScreen ? '25px' : '10px'}`,
  };
};

const titleStyle = () => {
  const query = '(min-width: 992px)';
  const mediaQueryList = window.matchMedia(query);
  const largeScreen = mediaQueryList.matches;

  return {
    display: 'inline-block',
    fontWeight: 600,
    color: 'var(--blue)',
    marginBottom: 0,
    fontSize: `${largeScreen ? '1.2rem' : '0.9rem'}`,
    maxWidth: `${largeScreen ? 'unset' : '155px'}`,
  };
};
