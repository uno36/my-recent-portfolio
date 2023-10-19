import { Container, Row, Col } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs';
import { FaAngellist, FaSquareXTwitter } from 'react-icons/fa6';
import logo from '../assets/img/logo.png';

const Footer = () => (
  <footer className="footer">
    <Container className="row">
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" className="footer-logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon socia-footer">
            <a href="https://github.com/uno36" target="_blank" rel="noreferrer">
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
          <p>Copyright 2022. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
