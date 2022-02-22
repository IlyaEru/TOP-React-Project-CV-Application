import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import plusImg from '../../img/plus.svg';

export default function ProfessionalExperience({
  expendedExperience,
  handleExperienceExpansion,
  addExperience,
  handleAddExperience,
}) {
  if (addExperience === false) {
    return (
      <div className="section">
        <SectionHeader
          editBtn={false}
          sectionName="Professional Experience"
          expendedSection={expendedExperience}
          handleSectionExpansion={handleExperienceExpansion}
        />
        <div className="section-content-wraper experience-details-section">
          <button
            onClick={handleAddExperience}
            type="button"
            className="btn add-experience-btn add-btn"
          >
            <img className="add-img" src={plusImg} alt="plus" />
            Experience
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="section">
      <SectionHeader
        editBtn={false}
        sectionName="Professional Experience"
        expendedSection={expendedExperience}
        handleSectionExpansion={handleExperienceExpansion}
      />
      <div className="section-content-wraper experience-details-section">
        <button
          type="button"
          className="btn add-experience-btn"
        >
          <img className="add-img" src={plusImg} alt="plus" />
          Experience
        </button>
      </div>
    </div>
  );
}
ProfessionalExperience.propTypes = {
  expendedExperience: PropTypes.bool.isRequired,
  handleExperienceExpansion: PropTypes.func.isRequired,
  addExperience: PropTypes.bool.isRequired,
  handleAddExperience: PropTypes.func.isRequired,
};
