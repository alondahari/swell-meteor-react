import React, { Component } from 'react'
import LoginFormInput from '/imports/ui/components/loginFormInput/LoginFormInput'
import styles from './loginFormStyles.js'
import { Row, Col, Button } from 'react-bootstrap'
import validationRegex from '/imports/api/validationRegex'
import { Accounts } from 'meteor/accounts-base'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: {value: '', isValid: null},
      password: {value: '', isValid: null},
      errorMessage: ''
    }
  }

  getValidationState(isValid) {
    if (_.isNull(isValid)) {
      return null
    } else {
      return isValid ? 'success' : 'error'
    }
  }

  isValid(field, val) {
    regex = {
      email: validationRegex.email,
      password: validationRegex.password
    }
    if (!val.length) return null
    return regex[field].test(val)
  }

  valueChanged(e, field) {
    const val = e.target.value
    this.setState({
      [field]: {
        value: val,
        isValid: this.isValid(field, val)
      }
    })
  }

  renderErrorMessage() {
    if (this.state.errorMessage) {
      return (
        <p style={styles.loginErrorMessage}>
          {this.state.errorMessage}
        </p>
      )
    }
  }

  showError(message) {
    this.setState({errorMessage: message})
  }

  renderInputFields(fields) {
    return fields.map((field) => {
      return (
        <LoginFormInput
          onChange={(e) => this.valueChanged(e, field)}
          validationState={this.getValidationState(this.state[field].isValid)}
          placeholder={_.upperFirst(field)}
          type={field}
          key={field}
          />
      )
    })
  }

  userSignUp() {
    const email = this.state.email
    const password = this.state.password
    if (!email.isValid) {
      this.showError('invalid email')
      return
    }
    if (!password.isValid) {
      console.log('invalid password');
      return
    }
    Accounts.createUser({email: email.value, password: password.value})
  }

  renderButtons(buttons) {
    return buttons.map((button) => {
      return (
        <Button
          bsStyle="primary"
          bsSize="large"
          style={{...styles.buttonSubmit, ...styles[button]}}
          key={button}
          onClick={() => this[`user${button}`]()}
          >
          {_.startCase(button)}
        </Button>
      )
    })
  }

  render() {
    const fields = ['email', 'password']
    const buttons = ['SignUp', 'Login']
    return (
      <form>
        { this.renderInputFields(fields) }
        <Row>
          <Col xs={10} xsOffset={1}>
            { this.renderButtons(buttons) }
          </Col>
        </Row>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.renderErrorMessage()}
        </ReactCSSTransitionGroup>
      </form>
    )
  }
}
