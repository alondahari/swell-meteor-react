import React, {Component} from 'react'
import BGVideo from '/imports/ui/components/BGVideo/BGVideo'
import LoginWrapper from '/imports/ui/components/LoginWrapper/LoginWrapper'

export default class Login extends Component {
  render() {
    return (
      <div>
        <BGVideo />
        <LoginWrapper />
      </div>
    )
  }
}
