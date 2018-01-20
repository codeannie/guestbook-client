import React from 'react';
import Appbar from 'material-ui/AppBar'
import { Drawer, FlatButton, MenuItem } from 'material-ui';
import * as routerPath from '../store/router/authenticated.routes';
import Dashboard from '../../dashboard/dashboard.container';
import EventForm from '../../events/event-form.container';
export default class NavBarDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      open: false
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleLogOut = () => {
    if (!this.props.currentUser) {
      this.props.onLogOut();
    }
  };

  getComponentByRoute() {
    switch (this.props.route) {
      case routerPath.DASHBOARD_ROUTE:
        return <Dashboard />;
      case routerPath.EVENT_NEW_ROUTE:
        return <EventForm />;
      default:
        return <Dashboard />; 
    }
  }

  render() {
    return (
      <div className="navigation">
        <Appbar
          title="Guest Book"
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={
            <FlatButton label="Logout" onClick={() => this.handleLogOut()} />
          }
        />
        <Drawer
          open={this.state.open}
          docked={false}
          width={200}
          // onRequestChange={(open) => this.setState(open)}
          onRequestChange={this.handleToggle}
        >
          <MenuItem>Dashboard</MenuItem>
          <MenuItem onClick={this.handleClose}>Create Event</MenuItem>
          <MenuItem>Upcoming Events</MenuItem>
          <MenuItem>Past Events</MenuItem>
          <MenuItem>Archived Events</MenuItem>
        </Drawer>
      </div>
    );
  }
}

const style = {
  display: "inline-block",
  margin: "16px 32px 16px 0"
};
