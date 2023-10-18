import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import styles from '../css/MobileBanner.module.css'; // Import the CSS module

const MobileBanner = () => (
  <section className={styles['mobile-banner']} id="home">
    <Container>
      <Row className="align-items-center">
        <Col xs={12}>
          <div>
            <span className={styles.tagline}>Welcome to my Portfolio</span>
            <h1 className={styles['mobile-title']}>
              Hi! I&apos;m Emmanuel
              <br />
              <span
                className="txt-rotate"
                data-rotate='["Fullstack Developer", "Problem Solver", "Tester & Debugger"]'
              >
                <span className="wrap">Fullstack Developer</span>
              </span>
            </h1>
            <p className={styles['mobile-description']}>
              &quot;As a full-stack developer, with knowledge encompassing a
              wide array of technologies, I&apos;m well-equipped to assist you
              in building your next product, feature, or website. I&apos;ve
              had the privilege of working with Node.js, Postgres,
              React/Redux, Ruby, Ruby on Rails, and JavaScript, which have
              allowed me to contribute to a diverse range of projects.&quot;
            </p>
            <a href="#connect">
              <button type="button" className={styles['mobile-button']}>
                <span>Let&apos;s Connect</span>
                {' '}
                <BsFillArrowRightSquareFill size={25} />
              </button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default MobileBanner;
