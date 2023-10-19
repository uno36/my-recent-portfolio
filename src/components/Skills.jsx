import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import headerImg from '../assets/img/header-img.svg';

const Skills = () => (
  <section className="skill" id="skills">
    <div className="container">
      <div>
        <div>
          <div className="skill-bx wow zoomIn">
            <h2>Skills</h2>
            <p>
              &quot;As a seasoned full-stack developer, I possess a diverse skill set
              that includes expertise in Node.js, Postgres, React/Redux, Ruby,
              Ruby on Rails, and JavaScript.These technologies
              have been the cornerstone of my career,
              enabling me to tackle a wide range of development challenges.&quot;
            </p>
            <div className="skill-slider">
              <div className="item">
                <img src={meter1} alt="Img" />
                <h5>Fullstack Web Development</h5>
              </div>
              <div className="item">
                <img src={meter2} alt="Img" />
                <h5>Postgres</h5>
              </div>
              <div className="item">
                <img src={meter3} alt="Img" />
                <h5>React/redux</h5>
              </div>
              <div className="item">
                <img src={meter1} alt="Img" />
                <h5>Ruby on Rails</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src={headerImg} alt="Header Img" className="header" />
  </section>
);

export default Skills;
