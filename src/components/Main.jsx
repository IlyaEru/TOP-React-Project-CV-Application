/* eslint-disable react/prefer-stateless-function */
import React from 'react';
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
        },
        experience: {},
      },
    };
    this.handlePersonalEdit = this.handlePersonalEdit.bind(this);
    this.handlePersonalEditSave = this.handlePersonalEditSave.bind(this);
    this.handlePersonalEditCancel = this.handlePersonalEditCancel.bind(this);
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
          educationEdit: false,
        },
        experience: {},
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
          educationEdit: false,
        },
        experience: {},
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

  render() {
    const { user } = this.state;
    return (
      <main>
        <Sections
          handlePersonalEditSave={this.handlePersonalEditSave}
          handlePersonalEdit={this.handlePersonalEdit}
          handlePersonalEditCancel={this.handlePersonalEditCancel}
          user={user}
        />
        <Preview />
      </main>
    );
  }
}
