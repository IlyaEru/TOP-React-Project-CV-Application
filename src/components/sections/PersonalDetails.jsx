/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import defaultImg from '../../img/person.svg';
import checkImg from '../../img/check.svg';
import xImg from '../../img/x.svg';

export default function PersonalDetails({
  fullName,
  email,
  // eslint-disable-next-line react/prop-types
  phone,
  address,
  jobTitle,
  edit,
  photo,
  handlePersonalEdit,
  handlePersonalEditCancel,
  handlePersonalEditSave,

}) {
  if (edit === true) {
    return (
      <div className="section">
        <SectionHeader handleClick={handlePersonalEdit} edit={edit} sectionName="Edit Personal Details" />
        <div className="section-content-wraper section-edit personal-datails-edit">
          <div className="photo-input">
            <label htmlFor="avatar">Photo</label>
            <input
              type="file"
              id="avatar-input"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="input">
            <input defaultValue={fullName} placeholder=" " id="full-name-input" type="text" />
            <label htmlFor="full-name-input">Full name</label>
          </div>
          <div className="input">
            <input defaultValue={jobTitle} placeholder=" " id="job-title-input" type="text" />
            <label htmlFor="job-title-input">Job Title</label>
          </div>
          <div className="input">
            <input defaultValue={email} placeholder=" " id="email-input" type="email" />
            <label htmlFor="email-input">Email</label>
          </div>
          <div className="input">
            <input defaultValue={phone} placeholder=" " id="phone-input" type="number" />
            <label htmlFor="phone-input">Phone</label>
          </div>
          <div className="input">
            <input defaultValue={address} placeholder=" " id="address-input" type="text" />
            <label htmlFor="address-input">Address</label>
          </div>
          <div className="edit-btns">
            <button onClick={handlePersonalEditCancel} type="button" className="btn personal-cancel-btn">
              <img src={xImg} alt="cancel" />
              Cancel
            </button>
            <button onClick={handlePersonalEditSave} type="button" className="btn personal-confirm-btn">
              <img src={checkImg} alt="save" />
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="section">
      <SectionHeader handleClick={handlePersonalEdit} edit={edit} sectionName="Personal Details" />
      <div className="section-content-wraper personal-details-section">
        <img className="personal-photo" src={photo} alt="cv" />
        <h3 className="personal-details-name">{fullName}</h3>
        <h4>JobTitle</h4>
        <span className="jobtitle-detail">{jobTitle}</span>
        <h5>Email</h5>
        <span className="email-detail">{email}</span>
        <h5>Phone</h5>
        <span className="phone-detail">{phone}</span>
        <h5>Address</h5>
        <span className="address-detail">{address}</span>
      </div>
    </div>
  );
}
PersonalDetails.propTypes = {
  photo: PropTypes.string,
  fullName: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  jobTitle: PropTypes.string,
  edit: PropTypes.bool.isRequired,
  handlePersonalEdit: PropTypes.func.isRequired,
  handlePersonalEditSave: PropTypes.func.isRequired,
  handlePersonalEditCancel: PropTypes.func.isRequired,
};
PersonalDetails.defaultProps = {
  fullName: '',
  email: '',
  address: '',
  jobTitle: '',
  photo: defaultImg,
};
