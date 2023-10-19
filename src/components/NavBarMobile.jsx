import React, { useState } from 'react';
import {
  BsList, BsX, BsGithub, BsLinkedin, BsMedium,
} from 'react-icons/bs';
import { FaAngellist, FaSquareXTwitter } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const NavBarMobile = ({ activeLink, onUpdateActiveLink }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleMenuClick = () => {
    closeMobileMenu();
  };

  return (
    <div className="navbar-mobile">
      <button type="button" onClick={toggleMobileMenu} className="hamburger-button">
        {isMobileMenuOpen ? <BsX /> : <BsList />}
      </button>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a
            href="#home"
            className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => {
              onUpdateActiveLink('home');
              handleMenuClick();
            }}
          >
            Portfolio
          </a>
          <a
            href="#skills"
            className={`navbar-link ${activeLink === 'skills' ? 'active' : ''}`}
            onClick={() => {
              onUpdateActiveLink('skills');
              handleMenuClick();
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`navbar-link ${
              activeLink === 'projects' ? 'active' : ''
            }`}
            onClick={() => {
              onUpdateActiveLink('projects');
              handleMenuClick();
            }}
          >
            Projects
          </a>
          <a
            href="#connect"
            className={`navbar-link ${
              activeLink === 'connect' ? 'active' : ''
            }`}
            onClick={() => {
              onUpdateActiveLink('connect');
              handleMenuClick();
            }}
          >
            Contact
          </a>
          <div className="social-icon">
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
        </div>
      )}
    </div>
  );
};

NavBarMobile.propTypes = {
  activeLink: PropTypes.string.isRequired,
  onUpdateActiveLink: PropTypes.func.isRequired,
};

export default NavBarMobile;
