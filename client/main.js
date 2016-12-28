import React from 'react'
import { render } from 'react-dom'
import App from '/imports/ui/layouts/main/App'

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
