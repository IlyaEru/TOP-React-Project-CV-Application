/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import EditImg from '../../img/edit.svg';
import upImg from '../../img/up.svg';
import downImg from '../../img/down.svg';

export default function SectionHeader({
  sectionName,
  edit,
  editBtn,
  expendedSection,
  handleClick,
  handleSectionExpansion,
}) {
  if (edit === false) {
    if (editBtn === false) {
      if (expendedSection === false) {
        return (
          <div
            onClick={handleSectionExpansion}
            onKeyDown={handleSectionExpansion}
            className="section-header-wraper expandable-section"
            role="button"
            tabIndex={0}
          >
            <h3 className="section-header">{sectionName}</h3>
            <img className="direction-img" src={downImg} alt="down arrow" />
          </div>
        );
      }
      return (
        <div
          onClick={handleSectionExpansion}
          onKeyDown={handleSectionExpansion}
          className="section-header-wraper expandable-section expanded"
          role="button"
          tabIndex={0}
        >
          <h3 className="section-header">{sectionName}</h3>
          <img className="direction-img" src={upImg} alt="up arrow" />
        </div>
      );
    }
    return (
      <div className="section-header-wraper">
        <h3 className="section-header">{sectionName}</h3>
        <button onClick={handleClick} className="btn edit-section-btn" type="button">
          <img className="edit-section-img" alt="edit section" src={EditImg} />
          <div className="edit-section-text">Edit</div>
        </button>
      </div>
    );
  }
  return (
    <div className="section-header-wraper">
      <h3 className="section-header">{sectionName}</h3>
    </div>
  );
}
SectionHeader.propTypes = {
  sectionName: PropTypes.string.isRequired,
  edit: PropTypes.bool,
  handleClick: PropTypes.func,
  editBtn: PropTypes.bool,
  expendedSection: PropTypes.bool,
  handleSectionExpansion: PropTypes.func,

};
SectionHeader.defaultProps = {
  editBtn: true,
  expendedSection: false,
  edit: false,
};
