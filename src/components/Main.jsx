/* eslint-disable max-len */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import uniqid from 'uniqid';
import Sections from './sections/Sections';
import Preview from './Preview/Preview';

export default function Main() {
  const [user, setUser] = useState({
    general: {
      generalEdit: false,
      fullName: 'Anonymouse Guest',
      email: '',
      address: '',
      jobTitle: '',
      phone: '',
    },
    education: {
      educationEdit: false,
      educationEditObj: {},
      addEducation: false,
      educationArray: [],
    },
    experience: {
      experienceEdit: false,
      experienceEditObj: {},
      addExperience: false,
      experienceArray: [],
    },
  });

  const handlePersonalEdit = () => {
    const stateCopy = JSON.parse(JSON.stringify(user));
    stateCopy.general.generalEdit = true;
    setUser(stateCopy);
  };
  const handlePersonalEditSave = () => {
    const photo = document.querySelector('#avatar-input').files[0];
    const photoInput = photo ? URL.createObjectURL(photo) : user.general.photo;
    const fullNameInput = document.querySelector('#full-name-input').value;
    const jobTitleInput = document.querySelector('#job-title-input').value;
    const emailInput = document.querySelector('#email-input').value;
    const phoneInput = document.querySelector('#phone-input').value;
    const addressInput = document.querySelector('#address-input').value;
    const stateCopy = JSON.parse(JSON.stringify(user));
    stateCopy.general = {
      generalEdit: false,
      photo: photoInput || user.general.photoInput,
      fullName: fullNameInput || user.general.fullName,
      email: emailInput || user.general.email,
      address: addressInput || user.general.address,
      jobTitle: jobTitleInput || user.general.jobTitle,
      phone: phoneInput || user.general.phone,
    };
    setUser(stateCopy);
  };

  const handlePersonalEditCancel = () => {
    const stateCopy = JSON.parse(JSON.stringify(user));
    stateCopy.general.generalEdit = false;
    setUser(stateCopy);
  };

  const handleAddEducation = () => {
    const stateCopy = JSON.parse(JSON.stringify(user));
    stateCopy.education.addEducation = true;
    setUser(stateCopy);
  };

  const handleAddEducationSave = () => {
    const degreeInput = document.querySelector('#degree-input').value;
    const schoolInput = document.querySelector('#school-input').value;
    const cityInput = document.querySelector('#city-input').value;
    const countryInput = document.querySelector('#country-input').value;
    const startDateInput = document.querySelector('#start-date-input').value;
    const endDateInput = document.querySelector('#end-date-input').value;
    const descriptionInput = document.querySelector('#description-input').value;
    const educationId = uniqid();

    const newEducation = {
      degree: degreeInput || '',
      school: schoolInput || '',
      country: countryInput || '',
      city: cityInput || '',
      startDate: startDateInput || '',
      endDate: endDateInput || '',
      description: descriptionInput || '',
      id: educationId,

    };
    const stateCopy = JSON.parse(JSON.stringify(user));
    stateCopy.education.educationArray.push(newEducation);
    stateCopy.education.addEducation = false;
    setUser(stateCopy);
  };

  const handleAddEducationCancel = () => {
    const stateCopy = JSON.parse(JSON.stringify(user));
    stateCopy.education.addEducation = false;
    stateCopy.education.educationEdit = false;
    setUser(stateCopy);
  };

  const handleEditEducation = (e) => {
    const educationId = e.currentTarget.parentNode.getAttribute('id');
    const stateCopy = JSON.parse(JSON.stringify(user));
    const educationObj = stateCopy.education.educationArray.find((x) => x.id === educationId);
    stateCopy.education.educationEdit = true;
    stateCopy.education.educationEditObj = educationObj;
    setUser(stateCopy);
  };

  const handleEditEducationSave = (e) => {
    const degreeInput = document.querySelector('#degree-input').value;
    const schoolInput = document.querySelector('#school-input').value;
    const cityInput = document.querySelector('#city-input').value;
    const countryInput = document.querySelector('#country-input').value;
    const startDateInput = document.querySelector('#start-date-input').value;
    const endDateInput = document.querySelector('#end-date-input').value;
    const descriptionInput = document.querySelector('#description-input').value;

    const educationId = e.currentTarget.parentNode.parentNode.getAttribute('id');
    const stateCopy = JSON.parse(JSON.stringify(user));
    const editedIndex = stateCopy.education.educationArray.findIndex((x) => x.id === educationId);
    stateCopy.education.educationArray[editedIndex] = {
      degree: degreeInput || '',
      school: schoolInput || '',
      country: countryInput || '',
      city: cityInput || '',
      startDate: startDateInput || '',
      endDate: endDateInput || '',
      description: descriptionInput || '',
      id: educationId,
    };
    stateCopy.education.educationEdit = false;
    setUser(stateCopy);
  };

  const handleEditEducationDelete = (e) => {
    const educationId = e.currentTarget.parentNode.parentNode.getAttribute('id');
    const stateCopy = JSON.parse(JSON.stringify(user));
    const editedIndex = stateCopy.education.educationArray.findIndex((x) => x.id === educationId);
    stateCopy.education.educationArray.splice(editedIndex, 1);
    stateCopy.education.educationEdit = false;
    setUser(stateCopy);
  };

  const handleAddExperience = () => {
    const stateCopy = JSON.parse(JSON.stringify(user));
    stateCopy.experience.addExperience = true;
    setUser(stateCopy);
  };

  const handleAddExperienceSave = () => {
    const jobTitleInput = document.querySelector('#job-title-input').value;
    const employerInput = document.querySelector('#employer-input').value;
    const cityInput = document.querySelector('#experience-city-input').value;
    const countryInput = document.querySelector('#experience-country-input').value;
    const startDateInput = document.querySelector('#experience-start-date-input').value;
    const endDateInput = document.querySelector('#experience-end-date-input').value;
    const descriptionInput = document.querySelector('#experience-description-input').value;
    const experienceId = uniqid();

    const newExperience = {
      jobTitle: jobTitleInput || '',
      employer: employerInput || '',
      country: countryInput || '',
      city: cityInput || '',
      startDate: startDateInput || '',
      endDate: endDateInput || '',
      description: descriptionInput || '',
      id: experienceId,

    };
    const stateCopy = JSON.parse(JSON.stringify(user));
    stateCopy.experience.experienceArray.push(newExperience);
    stateCopy.experience.addExperience = false;
    setUser(stateCopy);
  };

  const handleAddExperienceCancel = () => {
    const stateCopy = JSON.parse(JSON.stringify(user));
    stateCopy.experience.addExperience = false;
    stateCopy.experience.experienceEdit = false;
    setUser(stateCopy);
  };

  const handleEditExperience = (e) => {
    const experienceId = e.currentTarget.parentNode.getAttribute('id');
    const stateCopy = JSON.parse(JSON.stringify(user));
    const experienceObj = stateCopy.experience.experienceArray.find((x) => x.id === experienceId);
    stateCopy.experience.experienceEdit = true;
    stateCopy.experience.experienceEditObj = experienceObj;
    setUser(stateCopy);
  };

  const handleEditExperienceSave = (e) => {
    const jobTitleInput = document.querySelector('#job-title-input').value;
    const employerInput = document.querySelector('#employer-input').value;
    const cityInput = document.querySelector('#experience-city-input').value;
    const countryInput = document.querySelector('#experience-country-input').value;
    const startDateInput = document.querySelector('#experience-start-date-input').value;
    const endDateInput = document.querySelector('#experience-end-date-input').value;
    const descriptionInput = document.querySelector('#experience-description-input').value;

    const experienceId = e.currentTarget.parentNode.parentNode.getAttribute('id');
    const stateCopy = JSON.parse(JSON.stringify(user));
    const editedIndex = stateCopy
      .experience.experienceArray.findIndex((x) => x.id === experienceId);
    stateCopy.experience.experienceArray[editedIndex] = {
      jobTitle: jobTitleInput || '',
      employer: employerInput || '',
      country: countryInput || '',
      city: cityInput || '',
      startDate: startDateInput || '',
      endDate: endDateInput || '',
      description: descriptionInput || '',
      id: experienceId,
    };
    stateCopy.experience.experienceEdit = false;
    setUser(stateCopy);
  };

  const handleEditExperienceDelete = (e) => {
    const experienceId = e.currentTarget.parentNode.parentNode.getAttribute('id');
    const stateCopy = JSON.parse(JSON.stringify(user));
    const editedIndex = stateCopy
      .experience.experienceArray.findIndex((x) => x.id === experienceId);
    stateCopy.experience.experienceArray.splice(editedIndex, 1);
    stateCopy.experience.experienceEdit = false;
    setUser(stateCopy);
  };

  return (
    <main>
      <Sections
        handlePersonalEdit={handlePersonalEdit}
        handlePersonalEditSave={handlePersonalEditSave}
        handlePersonalEditCancel={handlePersonalEditCancel}
        handleAddEducation={handleAddEducation}
        handleAddEducationSave={handleAddEducationSave}
        handleAddEducationCancel={handleAddEducationCancel}
        handleEditEducation={handleEditEducation}
        handleEditEducationSave={handleEditEducationSave}
        handleEditEducationDelete={handleEditEducationDelete}
        handleAddExperience={handleAddExperience}
        handleAddExperienceSave={handleAddExperienceSave}
        handleAddExperienceCancel={handleAddExperienceCancel}
        handleEditExperience={handleEditExperience}
        handleEditExperienceSave={handleEditExperienceSave}
        handleEditExperienceDelete={handleEditExperienceDelete}
        user={user}
      />
      <Preview
        user={user}
      />
    </main>
  );
}
