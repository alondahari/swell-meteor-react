import React, { Component } from 'react'
import LoginFormInput from '/imports/ui/components/loginFormInput/LoginFormInput'
import styles from './loginFormStyles.js'

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  getPasswordValidationState() {
    const length = this.state.email.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  getValidationState(field) {
    const length = this.state[field].length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  valueChanged(e, field) {
    this.setState({[field]: e.target.value})
  }

  renderInputFields(fields) {
    return fields.map((field) => {
      return (
        <LoginFormInput
          onChange={(e) => this.valueChanged(e, field)}
          validationState={this.getValidationState(field)}
          placeholder={_.upperFirst(field)}
          type={field}
          key={field}
          />
      )
    })
  }

  render() {
    const fields = ['email', 'password']
    return (
      <form>
        { this.renderInputFields(fields) }
      </form>
    )
  }
}
