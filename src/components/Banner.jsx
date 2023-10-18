import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import TrackVisibility from 'react-on-screen';
import myProfilePic from '../assets/img/myProfilePic.png';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const toRotate = ['Fullstack Developer', 'Problem Solver', 'Tester & Debugger'];
  const period = 2000;

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  });

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    Hi! I&apos;m Emmanuel
                    <br />
                    <span
                      className="txt-rotate"
                      data-rotate='[ "Fullstack Developer", "Problem Solver", "Tester & Debugger" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    &quot;As a full-stack developer, with knowledge
                    encompassing a wide array of technologies, I&apos;m well-equipped
                    to assist you in building your next product, feature, or
                    website. I&apos;ve had the privilege of working with Node.js,
                    Postgres, React/Redux, Ruby, Ruby on Rails, and JavaScript,
                    which have allowed me to contribute to a diverse range of
                    projects. Take a moment to explore my portfolio and delve
                    into my rich professional background. If you find my work
                    aligns with your vision and you have a coding project in
                    mind, don&apos;t hesitate to reach out. I&apos;m ready to bring your
                    ideas to life and help you achieve your goals.&quot;
                  </p>
                  <a href="#connect">
                    <button type="button">
                      Let’s Connect
                      {' '}
                      <BsFillArrowRightSquareFill size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img
                    src={myProfilePic}
                    alt="Header Img"
                    className="profile-pic"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
