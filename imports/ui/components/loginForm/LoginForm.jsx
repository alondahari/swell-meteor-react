import React, { Component } from 'react'
import LoginFormInput from '/imports/ui/components/loginFormInput/LoginFormInput'
import styles from './loginFormStyles.js'

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: ''
    }
  }

  getPasswordValidationState() {
    const length = this.state.email.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  getEmailValidationState() {
    const length = this.state.email.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  valueChanged(e, field) {
    this.setState({[field]: e.target.value})
  }

  render() {
    return (
      <form>
        <LoginFormInput
          value={this.state.email}
          onChange={(e) => this.valueChanged(e, 'email')}
          validationState={this.getEmailValidationState()}
        />
        <LoginFormInput
          value={this.state.password}
          onChange={(e) => this.valueChanged(e, 'password')}
          validationState={this.getPasswordValidationState()}
        />
      </form>
    )
  }
}
