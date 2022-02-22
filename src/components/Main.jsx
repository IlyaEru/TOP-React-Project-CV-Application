/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import uniqid from 'uniqid';
import Sections from './sections/Sections';
import Preview from './Preview/Preview';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
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
          addExperience: false,
          experienceArray: [],
        },
      },
    };
    this.handlePersonalEdit = this.handlePersonalEdit.bind(this);
    this.handlePersonalEditSave = this.handlePersonalEditSave.bind(this);
    this.handlePersonalEditCancel = this.handlePersonalEditCancel.bind(this);
    this.handleAddEducationSave = this.handleAddEducationSave.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleAddEducationCancel = this.handleAddEducationCancel.bind(this);
    this.handleEditEducation = this.handleEditEducation.bind(this);
    this.handleEditEducationSave = this.handleEditEducationSave.bind(this);
  }

  handlePersonalEdit() {
    this.setState((prevState) => ({
      user: {
        general: {
          generalEdit: true,
          fullName: prevState.user.general.fullName,
          email: prevState.user.general.email,
          address: prevState.user.general.address,
          jobTitle: prevState.user.general.jobTitle,
          phone: prevState.user.general.phone,
        },
        education: {
          educationEdit: prevState.user.education.educationEdit,
          addEducation: prevState.user.education.addEducation,
          educationArray: prevState.user.education.educationArray,

        },
        experience: {
          experienceEdit: prevState.user.experience.experienceEdit,
          addExperience: prevState.user.experience.addExperience,
          experienceArray: prevState.user.experience.experienceArray,
        },
      },
    }));
  }

  handlePersonalEditCancel() {
    this.setState((prevState) => ({
      user: {
        general: {
          generalEdit: false,
          fullName: prevState.user.general.fullName,
          email: prevState.user.general.email,
          address: prevState.user.general.address,
          jobTitle: prevState.user.general.jobTitle,
          phone: prevState.user.general.phone,
        },
        education: {
          educationEdit: prevState.user.education.educationEdit,
          addEducation: prevState.user.education.addEducation,
          educationArray: prevState.user.education.educationArray,

        },
        experience: {
          experienceEdit: prevState.user.experience.experienceEdit,
          addExperience: prevState.user.experience.addExperience,
          experienceArray: prevState.user.experience.experienceArray,
        },
      },
    }));
  }

  handlePersonalEditSave() {
    const fullNameInput = document.querySelector('#full-name-input').value;
    const jobTitleInput = document.querySelector('#job-title-input').value;
    const emailInput = document.querySelector('#email-input').value;
    const phoneInput = document.querySelector('#phone-input').value;
    const addressInput = document.querySelector('#address-input').value;

    this.setState((prevState) => ({
      user: {
        general: {
          generalEdit: false,
          fullName: fullNameInput || prevState.user.general.fullName,
          email: emailInput || prevState.user.general.email,
          address: addressInput || prevState.user.general.address,
          jobTitle: jobTitleInput || prevState.user.general.jobTitle,
          phone: phoneInput || prevState.user.general.phone,
        },
        education: {
          educationEdit: false,
        },
        experience: {},
      },
    }));
  }

  handleAddEducation() {
    // eslint-disable-next-line react/destructuring-assignment
    const stateCopy = JSON.parse(JSON.stringify(this.state.user));
    stateCopy.education.addEducation = true;
    this.setState({ user: stateCopy });
  }

  handleEditEducation(e) {
    const educationId = e.currentTarget.parentNode.getAttribute('id');
    // eslint-disable-next-line react/destructuring-assignment
    const stateCopy = JSON.parse(JSON.stringify(this.state.user));
    const educationObj = stateCopy.education.educationArray.find((x) => x.id === educationId);
    stateCopy.education.educationEdit = true;
    stateCopy.education.educationEditObj = educationObj;
    this.setState({ user: stateCopy });
  }

  handleEditEducationSave(e) {
    const degreeInput = document.querySelector('#degree-input').value;
    const schoolInput = document.querySelector('#school-input').value;
    const cityInput = document.querySelector('#city-input').value;
    const countryInput = document.querySelector('#country-input').value;
    const startDateInput = document.querySelector('#start-date-input').value;
    const endDateInput = document.querySelector('#end-date-input').value;

    const educationId = e.currentTarget.parentNode.parentNode.getAttribute('id');
    // eslint-disable-next-line react/destructuring-assignment
    const stateCopy = JSON.parse(JSON.stringify(this.state.user));
    const editedIndex = stateCopy.education.educationArray.findIndex((x) => x.id === educationId);
    stateCopy.education.educationArray[editedIndex] = {
      degree: degreeInput || '',
      school: schoolInput || '',
      country: countryInput || '',
      city: cityInput || '',
      startDate: startDateInput || '',
      endDate: endDateInput || '',
      id: educationId,
    };
    stateCopy.education.educationEdit = false;
    this.setState({ user: stateCopy });
  }

  handleAddExperience() {
    // eslint-disable-next-line react/destructuring-assignment
    const stateCopy = JSON.parse(JSON.stringify(this.state.user));
    stateCopy.experience.addExperience = true;
    this.setState({ user: stateCopy });
  }

  handleAddEducationSave() {
    const degreeInput = document.querySelector('#degree-input').value;
    const schoolInput = document.querySelector('#school-input').value;
    const cityInput = document.querySelector('#city-input').value;
    const countryInput = document.querySelector('#country-input').value;
    const startDateInput = document.querySelector('#start-date-input').value;
    const endDateInput = document.querySelector('#end-date-input').value;
    const educationId = uniqid();

    const newEducation = {
      degree: degreeInput || '',
      school: schoolInput || '',
      country: countryInput || '',
      city: cityInput || '',
      startDate: startDateInput || '',
      endDate: endDateInput || '',
      id: educationId,

    };
    // eslint-disable-next-line react/destructuring-assignment
    const stateCopy = JSON.parse(JSON.stringify(this.state.user));
    stateCopy.education.educationArray.push(newEducation);
    stateCopy.education.addEducation = false;
    this.setState({ user: stateCopy });
  }

  handleAddEducationCancel() {
    // eslint-disable-next-line react/destructuring-assignment
    const stateCopy = JSON.parse(JSON.stringify(this.state.user));
    stateCopy.education.addEducation = false;
    stateCopy.education.educationEdit = false;
    this.setState({ user: stateCopy });
  }

  render() {
    const { user } = this.state;
    return (
      <main>
        <Sections
          handlePersonalEditSave={this.handlePersonalEditSave}
          handlePersonalEdit={this.handlePersonalEdit}
          handlePersonalEditCancel={this.handlePersonalEditCancel}
          handleAddExperience={this.handleAddExperience}
          handleAddEducation={this.handleAddEducation}
          handleEditEducation={this.handleEditEducation}
          handleEditEducationSave={this.handleEditEducationSave}
          handleAddEducationSave={this.handleAddEducationSave}
          handleAddEducationCancel={this.handleAddEducationCancel}
          user={user}
        />
        <Preview />
      </main>
    );
  }
}
