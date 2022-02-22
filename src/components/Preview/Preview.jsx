/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import locationImg from '../../img/location.svg';
import emailImg from '../../img/email.svg';
import phoneImg from '../../img/phone.svg';

export default function Preview({ user }) {
  return (
    <div>
      <div className="preview-container">
        <div className="preview-header">
          {user.general.photo
            && <img className="resume-photo" src={user.general.photo} alt="avatar" />}
          <h2 className="preview-fullname">{user.general.fullName}</h2>
          <h3 className="preview-job-title">{user.general.jobTitle}</h3>
          <div className="preview-general-info">
            {user.general.address
              && <span>
                <img className="preview-general-img" src={locationImg} alt="location" />
                {user.general.address}
              </span>}
            {user.general.email
              && <span>
                <img className="preview-general-img" src={emailImg} alt="email" />
                {user.general.email}
              </span>}
            {user.general.phone
              && <span>
                <img className="preview-general-img" src={phoneImg} alt="phone" />
                {user.general.phone}
              </span>}
          </div>
          {user.education.educationArray.length > 0
            && <div className="preview-education">
              <h4 className="preview-education-header">Education</h4>
              <ul className="preview-education-list">
                {user.education.educationArray.map((education) => (
                  <li key={education.id}>
                    <span className="degree">
                      <span className="degree-name">{education.degree}
                      </span>
                      {education.school && ', '}
                      {education.school}
                    </span>
                    <span className="date">
                      {education.startDate}
                      {education.endDate && ' -'}
                      {education.endDate}
                    </span>
                    <span className="country">
                      {education.country}
                      {education.country && ', '}
                      {education.city}
                    </span>
                    <span className="description">
                      {education.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>}
          {user.experience.experienceArray.length > 0
            && <div className="preview-experience">
              <h4 className="preview-experience-header">Professional Experience</h4>
              <ul className="preview-experience-list">
                {user.experience.experienceArray.map((experience) => (
                  <li key={experience.id}>
                    <span className="job-title">
                      <span className="job-title-name">{experience.jobTitle}
                      </span>
                      {experience.employer && ', '}
                      {experience.employer}
                    </span>
                    <span className="date">
                      {experience.startDate}
                      {experience.endDate && ' -'}
                      {experience.endDate}
                    </span>
                    <span className="country">
                      {experience.country}
                      {experience.country && ', '}
                      {experience.city}
                    </span>
                    <span className="description">
                      {experience.description}
                    </span>
                  </li>
                ))}
              </ul>

            </div>}
        </div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};
