import {
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
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
  );
};
