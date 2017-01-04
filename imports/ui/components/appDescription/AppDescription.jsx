import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-bootstrap'

const textStyle = {
  textAlign: 'center',
  fontSize: '2rem',
  marginBottom: '0',
  color: '#ff9e38',
}

const breakStyle = {
  borderColor: '#ff9e38',
  opacity: '.4',
}

export const DescriptionLine = (props) => {
  return (
    <Row>
      <Col xs={10} xsOffset={1}>
        <p style={textStyle}>{props.text}</p>
      </Col>
    </Row>
  )
}

DescriptionLine.propTypes = {
  text: PropTypes.string
}

export const DescriptionBreak = () => {
  return (
    <Row>
      <Col xs={4} xsOffset={4}>
        <hr style={breakStyle}/>
      </Col>
    </Row>
  )
}
