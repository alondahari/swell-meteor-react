import React, {Component} from 'react'
import {styles} from './LoginWrapperStyles'

export default class LoginWrapper extends Component {
  render() {
    return (
      <div>
        <div className="wrapper-bg" style={styles.wrapperBGStyle}></div>
        <div className="wrapper" style={styles.wrapperStyle}>
          <div className="view" style={styles.viewStyle}>
            <h1 className="logo" style={styles.logoStyle}>Swell</h1>
            <h4 className="tag-line" style={styles.tagLineStyle}>Real time Surf Conditions.</h4>
          </div>
        </div>
      </div>
    )
  }
}
