/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import plusImg from '../../img/plus.svg';
import checkImg from '../../img/check.svg';
import xImg from '../../img/x.svg';
import EditImg from '../../img/edit.svg';
import deleteImg from '../../img/delete.svg';

export default function ProfessionalExperience({
  expendedExperience,
  handleExperienceExpansion,
  addExperience,
  experienceEdit,
  experienceEditObj,
  handleAddExperience,
  handleEditExperience,
  handleEditExperienceSave,
  handleEditExperienceDelete,
  handleAddExperienceSave,
  handleAddExperienceCancel,
  experienceArray,
}) {
  if (experienceEdit === true) {
    return (
      <div className="section">
        <SectionHeader
          editBtn={false}
          sectionName="Experience"
          expendedSection={expendedExperience}
          handleSectionExpansion={handleExperienceExpansion}
        />
        <div id={experienceEditObj.id} className="section-content-wraper Experience-edit section-edit">
          <div className="input degree-input">
            <input defaultValue={experienceEditObj.jobTitle} placeholder=" " id="job-title-input" type="text" />
            <label htmlFor="job-title-input">Job Title</label>
          </div>
          <div className="school-input input">
            <input defaultValue={experienceEditObj.school} placeholder=" " id="employer-input" type="text" />
            <label htmlFor="employer-input">Employer</label>
          </div>
          <div className="input">
            <input defaultValue={experienceEditObj.city} placeholder=" " id="experience-city-input" type="text" />
            <label htmlFor="experience-city-input">City</label>
          </div>
          <div className="input">
            <input defaultValue={experienceEditObj.country} placeholder=" " id="experience-country-input" type="text" />
            <label htmlFor="experience-country-input">Country</label>
          </div>
          <div className="date-input-wraper input">
            <input defaultValue={experienceEditObj.startDate} className="experience-date-input" placeholder=" " id="experience-start-date-input" type="month" />
            <label htmlFor="experience-start-date-input">Start Date</label>
          </div>
          <div className="date-input-wraper input">
            <input defaultValue={experienceEditObj.endDate} className="experience-date-input" placeholder=" " id="experience-end-date-input" type="month" />
            <label htmlFor="experience-end-date-input">End Date</label>
          </div>
          <div className="input description-input">
            <textarea
              placeholder=" "
              defaultValue={experienceEditObj.description}
              id="experience-description-input"
              rows="5"
              cols="33"
            />
            <label htmlFor="experience-description-input">Description</label>
          </div>
          <div className="edit-btns Experience-edit-btns">
            <button onClick={handleAddExperienceCancel} type="button" className="btn Experience-cancel-btn">
              <img src={xImg} alt="cancel" />
              Cancel
            </button>
            <button onClick={handleEditExperienceDelete} type="button" className="btn Experience-delete-btn">
              <img className="delete-img" src={deleteImg} alt="delete" />
              Delete
            </button>
            <button onClick={handleEditExperienceSave} type="button" className="btn Experience-confirm-btn">
              <img src={checkImg} alt="save" />
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
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
          <div className="experience-list">
            <ul>
              {experienceArray.map((experience) => (
                <li key={experience.id} id={experience.id}>
                  <span className="job-title">
                    {experience.jobTitle}
                    {experience.jobTitle && ','}
                  </span>
                  <span className="employer">{experience.employer}</span>
                  <span className="start-date">
                    {experience.startDate}
                    {experience.startDate && ' -'}
                  </span>
                  <span className="end-date">
                    {experience.endDate}
                    {experience.endDate && ' | '}

                  </span>
                  <span className="country">
                    {experience.country}
                    {experience.country && ', '}
                    {experience.city}
                  </span>
                  <button onClick={handleEditExperience} className="btn edit-experience-btn" type="button"><img src={EditImg} alt="edit experience" /></button>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleAddExperience}
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
  return (
    <div className="section">
      <SectionHeader
        editBtn={false}
        sectionName="Professional Experience"
        expendedSection={expendedExperience}
        handleSectionExpansion={handleExperienceExpansion}
      />
      <div className="section-content-wraper add-experience-section section-edit">
        <div className="input job-title-input">
          <input placeholder=" " id="job-title-input" type="text" />
          <label htmlFor="job-title-input">Job Title</label>
        </div>
        <div className="employer-input input">
          <input placeholder=" " id="employer-input" type="text" />
          <label htmlFor="employer-input">Employer</label>
        </div>
        <div className="input">
          <input placeholder=" " id="experience-city-input" type="text" />
          <label htmlFor="experience-city-input">City</label>
        </div>
        <div className="input">
          <input placeholder=" " id="experience-country-input" type="text" />
          <label htmlFor="experience-country-input">Country</label>
        </div>
        <div className="date-input-wraper input">
          <input className="date-input" placeholder=" " id="experience-start-date-input" type="month" />
          <label htmlFor="experience-start-date-input">Start Date</label>
        </div>
        <div className="date-input-wraper input">
          <input className="date-input" placeholder=" " id="experience-end-date-input" type="month" />
          <label htmlFor="experience-end-date-input">End Date</label>
        </div>
        <div className="input description-input">
          <textarea
            placeholder=" "
            id="experience-description-input"
            rows="5"
            cols="33"
          />
          <label htmlFor="experience-description-input">Description</label>
        </div>
        <div className="edit-btns">
          <button onClick={handleAddExperienceCancel} type="button" className="btn experience-cancel-btn">
            <img src={xImg} alt="cancel" />
            Cancel
          </button>
          <button onClick={handleAddExperienceSave} type="button" className="btn experience-confirm-btn">
            <img src={checkImg} alt="save" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
ProfessionalExperience.propTypes = {
  expendedExperience: PropTypes.bool.isRequired,
  handleExperienceExpansion: PropTypes.func.isRequired,
  addExperience: PropTypes.bool.isRequired,
  handleAddExperience: PropTypes.func.isRequired,
  handleEditExperience: PropTypes.func.isRequired,
  handleAddExperienceSave: PropTypes.func.isRequired,
  handleAddExperienceCancel: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  experienceArray: PropTypes.array.isRequired,
  experienceEdit: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  experienceEditObj: PropTypes.object.isRequired,
  handleEditExperienceSave: PropTypes.func.isRequired,
  handleEditExperienceDelete: PropTypes.func.isRequired,
};
