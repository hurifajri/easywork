import * as contents from '../contents/navbar';
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
    { id: 1, title: contents.HOME, href: contents.HOME_URL },
    { id: 2, title: contents.ABOUT_US, href: contents.ABOUT_US_URL },
    { id: 3, title: contents.SERVICES, href: contents.SERVICES_URL },
    { id: 4, title: contents.PRICING, href: contents.PRICING_URL },
    { id: 5, title: contents.CAREERS, href: contents.CAREERS_URL },
  ];
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href={contents.HOME_URL}>
          <Image src={logo} alt={contents.TITLE} />
        </Navbar.Brand>
        <Navbar.Toggle>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav defaultActiveKey={contents.HOME_URL} className="m-auto">
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
