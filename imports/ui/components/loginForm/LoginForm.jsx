import React, { Component } from 'react'
import LoginFormInput from '/imports/ui/components/loginFormInput/LoginFormInput'
import styles from './loginFormStyles.js'
import { Row, Col, Button } from 'react-bootstrap'

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: {value: '', isValid: null},
      password: {value: '', isValid: null}
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
      email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      password: /^[\w\d!@#$%]{6,}$/
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

  renderButtons(buttons) {
    return buttons.map((button) => {
      return (
        <Button
          bsStyle="primary"
          bsSize="large"
          style={{...styles.buttonSubmit, ...styles[button]}}
          key={button}
          >
          {button}
        </Button>
      )
    })
  }

  render() {
    const fields = ['email', 'password']
    const buttons = ['Sign Up', 'Login']
    return (
      <div>
        <form>
          { this.renderInputFields(fields) }

        </form>
        <Row>
          <Col xs={10} xsOffset={1}>
            { this.renderButtons(buttons) }
          </Col>
        </Row>
      </div>
    )
  }
}
