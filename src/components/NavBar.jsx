import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs';
import { FaAngellist, FaSquareXTwitter } from 'react-icons/fa6';
import logo from '../assets/img/logo.png';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === 'home'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://github.com/uno36"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/emmanuel-tofa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://wellfound.com/u/emmanuel-tofa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaAngellist />
                </a>
                <a
                  href="https://twitter.com/tofauemmanuel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSquareXTwitter />
                </a>
                <a
                  href="https://medium.com/me/stats/post/9989a5e0a852"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsMedium />
                </a>
              </div>
              <HashLink to="#connect">
                <button type="button" className="vvd">
                  <span>Let&apos;s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
