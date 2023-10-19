import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjectCard = ({
  title,
  description,
  imgUrl,
  projectLink,
  sourceCodeLink,
}) => (
  <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
      <img src={imgUrl} alt="projectImg" />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      <button type="button" className="btn btn-primary mb-4 ">
        See Project
      </button>
    </a>
    <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
      <button type="button" className="btn btn-primary mb-4 mx-3">
        See Source Code
      </button>
    </a>
  </Col>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  sourceCodeLink: PropTypes.string.isRequired,
};

export default ProjectCard;
