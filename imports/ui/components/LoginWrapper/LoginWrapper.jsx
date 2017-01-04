import React, {Component} from 'react'
import {styles} from './LoginWrapperStyles'
import {DescriptionLine, DescriptionBreak} from '/imports/ui/components/appDescription/AppDescription'
import LoginForm from '/imports/ui/components/loginForm/LoginForm'

export default class LoginWrapper extends Component {
  render() {
    return (
      <div>
        <div className="wrapper-bg" style={styles.wrapperBGStyle}></div>
        <div className="wrapper" style={styles.wrapperStyle}>
          <div className="view" style={styles.viewStyle}>
            <h1 className="logo animated fadeInDown" style={styles.logoStyle}>Swell</h1>
            <h4 className="tag-line animated fadeInDown" style={styles.tagLineStyle}>Real time Surf Conditions.</h4>
            <DescriptionLine text="Swell is a community based app for surfers, by coders."/>
            <DescriptionLine text="Help fellow surfers by rating the conditions at the beach."/>
            <DescriptionBreak />
            <DescriptionLine text="Sign up now to see what's happening out there, right now."/>
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}
