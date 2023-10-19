import {
  Container, Row, Col, Tab, Nav,
} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard';
import projImg1 from '../assets/img/Game-hub-min.png';
import projImg2 from '../assets/img/space-port-min.png';
import projImg3 from '../assets/img/commons-summit-min.png';
import projImg4 from '../assets/img/MAth-Magician-min.png';
import projImg5 from '../assets/img/Leaderboard-App-min.png';
import projImg6 from '../assets/img/crypto-app-min.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Game-Hub',
      description:
        'The Game Hub app is a centralized platform where gamers can discover, explore, and engage with a diverse range of video games. It offers game recommendations, reviews, trailers, and a social community for sharing experiences. Users can track their gaming progress, connect with friends, and stay updated on the latest gaming news and events.',
      imgUrl: projImg1,
      projectLink: 'https://game-hub-six-sage.vercel.app/',
      sourceCodeLink: 'https://github.com/uno36/game-hub/',
    },
    {
      id: 2,
      title: 'SpacePort',
      description:
        "Introducing 'SpacePort: Your Cosmic Gateway'! The ultimate space traveler's hub app connecting adventurers across the cosmos. Discover launch schedules, book interstellar flights, explore celestial maps, and connect with fellow explorers.",
      imgUrl: projImg2,
      projectLink: 'https://react-redux-group-project-two.vercel.app/',
      sourceCodeLink:
        'https://github.com/uno36/SpacePort--space-traveler-s-hub-/',
    },
    {
      id: 3,
      title: 'Creative Commons Summit',
      description:
        'A joyful celebration believing in the value of openness and sharing, creating a positive change with people from over 80 countries is taking place in October, in Korea.',
      imgUrl: projImg3,
      projectLink: 'https://uno36.github.io/CC-Global-Summit-2015/',
      sourceCodeLink: 'https://github.com/uno36/CC-Global-Summit-2015/',
    },
    {
      id: 4,
      title: 'MathMagcian',
      description:
        'a software tool that performs mathematical calculations on a digital device. It provides a user-friendly interface to input numbers and perform operations such as addition, subtraction, multiplication, division, and more, allowing users to quickly and accurately solve numerical equations.',
      imgUrl: projImg4,
      projectLink: 'https://math-magician-ysb5.onrender.com/',
      sourceCodeLink: 'https://github.com/uno36/Math-Magician/',
    },
    {
      id: 5,
      title: 'Leaderboard',
      description:
        'Provides a dynamic ranking system for participants based on specified criteria or scores. It is designed to be a versatile and customizable solution for showcasing individual or team performance in various competitive contexts, including games, sports, or online communities.',
      imgUrl: projImg5,
      projectLink: 'https://leaderboard-3sbp.onrender.com/',
      sourceCodeLink: 'https://github.com/uno36/Leaderboard/',
    },
    {
      id: 6,
      title: 'Crypto App',
      description:
        'The app provides real-time data on cryptocurrency prices, market capitalization, trading volume, and historical trends. Users can track their investments, set price alerts, and access comprehensive charts and analytics to make informed decisions in the volatile cryptocurrency market.',
      imgUrl: projImg6,
      projectLink: 'https://lively-twilight-3f122e.netlify.app/',
      sourceCodeLink: 'https://github.com/uno36/crypto-app/',
    },
    // Add more projects with their respective projectLink
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    &quot;I invite you to explore my portfolio and see how my
                    expertise translates into real-world applications. It&apos;s
                    an opportunity to gain insights into the depth of experience
                    I bring to every development endeavor. If you find these
                    projects align with your requirements and vision, I&apos;m
                    ready to collaborate on your next project, feature, or
                    website.&quot;
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project) => (
                            <ProjectCard
                              key={project.id}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              projectLink={project.projectLink}
                              sourceCodeLink={project.sourceCodeLink}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          &quot;My knowledge in full-stack development,
                          encompasses a wide array of technologies, I&apos;m
                          well-equipped to assist you in building your next
                          product, feature, or website. I&apos;ve had the
                          privilege of working with Node.js, Postgres,
                          React/Redux, Ruby, Ruby on Rails, and JavaScript,
                          which have allowed me to contribute to a diverse range
                          of projects.&quot;
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          &quot;Whether it&apos;s building a new feature, revamping an
                          existing product, or tackling a fresh project, my
                          skill set is geared to transform ideas into reality.
                          Feel free to explore my portfolio to witness the
                          tangible results of my expertise, and don&apos;t hesitate
                          to connect if you&apos;re in need of a full-stack developer
                          who can bring your vision to life.&quot;
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
