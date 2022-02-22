/* eslint-disable react/prop-types */
import React from 'react';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import ProfessionalExperience from './ProfessionalExperience';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expendedEducation: false,
      expendedExperience: false,

    };
    this.handleEducationExpansion = this.handleEducationExpansion.bind(this);
    this.handleExperienceExpansion = this.handleExperienceExpansion.bind(this);
  }

  handleEducationExpansion() {
    this.setState((prevState) => ({
      expendedEducation: !prevState.expendedEducation,
      addEducation: prevState.addEducation,
      expendedExperience: prevState.expendedExperience,
      addExperience: prevState.addExperience,
    }));
  }

  handleExperienceExpansion() {
    this.setState((prevState) => ({
      expendedEducation: prevState.expendedEducation,
      addEducation: prevState.addEducation,
      expendedExperience: !prevState.expendedExperience,
      addExperience: prevState.addExperience,
    }));
  }

  render() {
    const {
      expendedEducation,
      expendedExperience,
    } = this.state;
    const {
      user,
      handlePersonalEdit,
      handlePersonalEditSave,
      handlePersonalEditCancel,
      handleAddEducation,
      handleEditEducation,
      handleEditEducationSave,
      handleAddExperience,
      handleAddEducationSave,
      handleAddEducationCancel,
    } = this.props;
    return (
      <div className="sections-container">
        <PersonalDetails
          fullName={user.general.fullName}
          email={user.general.email}
          phone={user.general.phone}
          address={user.general.address}
          jobTitle={user.general.jobTitle}
          edit={user.general.generalEdit}
          handlePersonalEdit={handlePersonalEdit}
          handlePersonalEditCancel={handlePersonalEditCancel}
          handlePersonalEditSave={handlePersonalEditSave}
        />
        <Education
          educationArray={user.education.educationArray}
          addEducation={user.education.addEducation}
          educationEdit={user.education.educationEdit}
          expendedEducation={expendedEducation}
          handleEducationExpansion={this.handleEducationExpansion}
          handleAddEducation={handleAddEducation}
          handleEditEducation={handleEditEducation}
          handleEditEducationSave={handleEditEducationSave}
          educationEditObj={user.education.educationEditObj}
          handleAddEducationSave={handleAddEducationSave}
          handleAddEducationCancel={handleAddEducationCancel}
        />
        <ProfessionalExperience
          addExperience={user.experience.addExperience}
          expendedExperience={expendedExperience}
          handleExperienceExpansion={this.handleExperienceExpansion}
          handleAddExperience={handleAddExperience}
        />
      </div>
    );
  }
}
