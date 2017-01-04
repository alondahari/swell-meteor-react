import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import styles from './loginFormInputStyles'

export default class LoginFormInput extends Component {
  render() {
    return (
      <Row>
        <Col xs={10} xsOffset={1}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.props.validationState}
            >
            <FormControl
              type="text"
              value={this.props.value}
              placeholder="Email"
              onChange={this.props.onChange}
              style={styles.inputField}
              />
            <FormControl.Feedback style={styles.inputFeedback}/>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}
