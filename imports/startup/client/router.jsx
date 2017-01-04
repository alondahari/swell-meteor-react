import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { AppLayout } from '/imports/ui/layouts/appLayout/AppLayout'
import Login from '/imports/ui/layouts/login/Login'
// // components
// import HomeBoardContainer from '../../ui/HomeBoard'
// import TaskBoardContainer from '../../ui/TaskBoard'
// import ListBoardContainer from '../../ui/ListBoard'
// // not found
// import { NotFound } from '../../ui/pages/not-found'

const routes = {
  path: '/',
  component: AppLayout,
  indexRoute: {
    component: Login,
  },
  // childRoutes: [
  //   {
  //     path: 'tasks',
  //     component: TaskBoardContainer
  //   },
  //   {
  //     path: 'lists',
  //     component: ListBoardContainer
  //   },
  //   {
  //     path: 'logout',
  //     onEnter: ({params}, replace) => {
  //       Meteor.logout()
  //       replace('/')
  //     }
  //   },
  //   {
  //     path: '*',
  //     component: NotFound
  //   }
  // ]
}

// react router way #1
Meteor.startup( () => {
  render(
    <Router history={ browserHistory } routes={ routes } />, document.getElementById( 'react-root' )
  )
})
