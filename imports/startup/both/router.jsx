import { FlowRouter } from 'meteor/kadira:flow-router-ssr'
import { mount } from 'react-mounter'
import Login from '/imports/ui/layouts/login/Login'
import React from 'react'

FlowRouter.route('/', {
  action() {
    mount(Login)
  }
});
