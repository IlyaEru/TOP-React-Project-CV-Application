/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import plusImg from '../../img/plus.svg';
import checkImg from '../../img/check.svg';
import xImg from '../../img/x.svg';
import EditImg from '../../img/edit.svg';

export default function Education({
  expendedEducation,
  handleEducationExpansion,
  addEducation,
  educationEdit,
  educationEditObj,
  handleAddEducation,
  handleEditEducation,
  handleEditEducationSave,
  handleAddEducationSave,
  handleAddEducationCancel,
  educationArray,
}) {
  if (educationEdit === true) {
    return (
      <div className="section">
        <SectionHeader
          editBtn={false}
          sectionName="Education"
          expendedSection={expendedEducation}
          handleSectionExpansion={handleEducationExpansion}
        />
        <div id={educationEditObj.id} className="section-content-wraper education-edit section-edit">
          <div className="input degree-input">
            <input defaultValue={educationEditObj.degree} placeholder=" " id="degree-input" type="text" />
            <label htmlFor="degree-input">Degree</label>
          </div>
          <div className="school-input input">
            <input defaultValue={educationEditObj.school} placeholder=" " id="school-input" type="text" />
            <label htmlFor="school-input">School</label>
          </div>
          <div className="input">
            <input defaultValue={educationEditObj.city} placeholder=" " id="city-input" type="text" />
            <label htmlFor="city-input">City</label>
          </div>
          <div className="input">
            <input defaultValue={educationEditObj.country} placeholder=" " id="country-input" type="text" />
            <label htmlFor="country-input">Country</label>
          </div>
          <div className="date-input-wraper input">
            <input defaultValue={educationEditObj.startDate} className="date-input" placeholder=" " id="start-date-input" type="month" />
            <label htmlFor="start-date-input">Start Date</label>
          </div>
          <div className="date-input-wraper input">
            <input defaultValue={educationEditObj.endDate} className="date-input" placeholder=" " id="end-date-input" type="month" />
            <label htmlFor="end-date-input">End Date</label>
          </div>
          <div className="edit-btns">
            <button onClick={handleAddEducationCancel} type="button" className="btn education-cancel-btn">
              <img src={xImg} alt="cancel" />
              Cancel
            </button>
            <button onClick={handleEditEducationSave} type="button" className="btn education-confirm-btn">
              <img src={checkImg} alt="save" />
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (addEducation === false) {
    return (
      <div className="section">
        <SectionHeader
          editBtn={false}
          sectionName="Education"
          expendedSection={expendedEducation}
          handleSectionExpansion={handleEducationExpansion}
        />
        <div className="section-content-wraper education-details-section">
          <div className="education-list">
            <ul>
              {educationArray.map((education) => (
                <li key={education.id} id={education.id}>
                  <span className="school">
                    {education.school}
                    {education.school && ','}
                  </span>
                  <span className="degree">{education.degree}</span>
                  <span className="start-date">
                    {education.startDate}
                    {education.startDate && ' -'}
                  </span>
                  <span className="end-date">
                    {education.endDate}
                    {education.endDate && ' | '}

                  </span>
                  <span className="country">
                    {education.country}
                    {education.country && ', '}
                    {education.city}
                  </span>
                  <button onClick={handleEditEducation} className="btn edit-education-btn" type="button"><img src={EditImg} alt="edit education" /></button>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleAddEducation}
            type="button"
            className="btn add-education-btn"
          >
            <img className="add-img" src={plusImg} alt="plus" />
            Education
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <SectionHeader
        editBtn={false}
        sectionName="Education"
        expendedSection={expendedEducation}
        handleSectionExpansion={handleEducationExpansion}
      />
      <div className="section-content-wraper education-edit section-edit">
        <div className="input degree-input">
          <input placeholder=" " id="degree-input" type="text" />
          <label htmlFor="degree-input">Degree</label>
        </div>
        <div className="school-input input">
          <input placeholder=" " id="school-input" type="text" />
          <label htmlFor="school-input">School</label>
        </div>
        <div className="input">
          <input placeholder=" " id="city-input" type="text" />
          <label htmlFor="city-input">City</label>
        </div>
        <div className="input">
          <input placeholder=" " id="country-input" type="text" />
          <label htmlFor="country-input">Country</label>
        </div>
        <div className="date-input-wraper input">
          <input className="date-input" placeholder=" " id="start-date-input" type="month" />
          <label htmlFor="start-date-input">Start Date</label>
        </div>
        <div className="date-input-wraper input">
          <input className="date-input" placeholder=" " id="end-date-input" type="month" />
          <label htmlFor="end-date-input">End Date</label>
        </div>
        <div className="edit-btns">
          <button onClick={handleAddEducationCancel} type="button" className="btn education-cancel-btn">
            <img src={xImg} alt="cancel" />
            Cancel
          </button>
          <button onClick={handleAddEducationSave} type="button" className="btn education-confirm-btn">
            <img src={checkImg} alt="save" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
Education.propTypes = {
  expendedEducation: PropTypes.bool.isRequired,
  handleEducationExpansion: PropTypes.func.isRequired,
  addEducation: PropTypes.bool.isRequired,
  handleAddEducation: PropTypes.func.isRequired,
  handleEditEducation: PropTypes.func.isRequired,
  handleAddEducationSave: PropTypes.func.isRequired,
  handleAddEducationCancel: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  educationArray: PropTypes.array.isRequired,
  educationEdit: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  educationEditObj: PropTypes.object.isRequired,
  handleEditEducationSave: PropTypes.func.isRequired,
};
