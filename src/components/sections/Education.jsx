import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import plusImg from '../../img/plus.svg';

export default function Education({
  edit,
  expendedEducation,
  handleEducationExpansion,
}) {
  return (
    <div className="section">
      <SectionHeader
        edit={edit}
        editBtn={false}
        sectionName="Education"
        expendedEducation={expendedEducation}
        handleEducationExpansion={handleEducationExpansion}
      />
      <div className="section-content-wraper education-details-section">
        <button
          type="button"
          className="btn add-education-btn"
        >
          <img className="add-education-img" src={plusImg} alt="plus" />
          Education
        </button>
      </div>
    </div>

  );
}
Education.propTypes = {
  edit: PropTypes.bool.isRequired,
  expendedEducation: PropTypes.bool.isRequired,
  handleEducationExpansion: PropTypes.func.isRequired,
};
