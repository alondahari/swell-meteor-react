import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import styles from './loginFormInputStyles'

export default LoginFormInput = (props) => {
  return (
    <Row>
      <Col xs={10} xsOffset={1}>
        <FormGroup
          controlId={`${props.type}Group`}
          validationState={props.validationState}
          >
          <FormControl
            type="text"
            placeholder={props.placeholder}
            onChange={props.onChange}
            style={styles.inputField}
            type={props.type}
            />
          <FormControl.Feedback style={styles.inputFeedback}/>
        </FormGroup>
      </Col>
    </Row>
  )
}
