import React from 'react';

import styles from '../css/MobileSkills.module.css'; // Import the CSS module

const MobileSkills = () => (
  <section className={styles.skill} id="skills">
    <div className="container">
      <div>
        <div>
          <div className={`${styles['skill-bx']} wow zoomIn`}>
            <h2>Skills</h2>
            <p>
              &quot;As a seasoned full-stack developer, I possess a diverse
              skill set that includes expertise in Node.js, Postgres,
              React/Redux, Ruby, Ruby on Rails, and JavaScript. These
              technologies have been the cornerstone of my career, enabling me
              to tackle a wide range of development challenges.&quot;
            </p>
            <div className={styles['skill-slider']}>
              <div className={styles.item}>
                <h5>Fullstack Web Development</h5>
              </div>
              <div className={styles.item}>
                <h5>Postgres</h5>
              </div>
              <div className={styles.item}>
                <h5>React/redux</h5>
              </div>
              <div className={styles.item}>
                <h5>Ruby on Rails</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MobileSkills;
