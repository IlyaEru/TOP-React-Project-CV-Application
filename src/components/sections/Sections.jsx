/* eslint-disable react/prop-types */
import React from 'react';
import PersonalDetails from './PersonalDetails';
import Education from './Education';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expendedEducation: false,
    };
    this.handleEducationExpansion = this.handleEducationExpansion.bind(this);
  }

  handleEducationExpansion() {
    this.setState((prevState) => ({
      expendedEducation: !prevState.expendedEducation,
    }));
  }

  render() {
    const { expendedEducation } = this.state;
    const {
      user,
      handlePersonalEdit,
      handlePersonalEditSave,
      handlePersonalEditCancel,
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
          edit={user.education.educationEdit}
          expendedEducation={expendedEducation}
          handleEducationExpansion={this.handleEducationExpansion}
        />
      </div>
    );
  }
}
