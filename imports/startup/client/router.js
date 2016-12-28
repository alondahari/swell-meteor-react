import { FlowRouter } from 'meteor/kadira:flow-router-ssr'
import { mount } from 'react-mounter'
import App from '/imports/ui/layouts/main/App'

FlowRouter.route('/', {
  action() {
    mount(App)
  }
});
