import React from 'react';
import Appbar from 'material-ui/AppBar'
import { Divider, Drawer, FlatButton, MenuItem } from 'material-ui';
import styles from './nav-bar-drawer.styles';

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
    // conditional not working? 
    // if (!this.props.currentUser) {
    //   this.props.onLogOut();
    // }
    this.props.onLogOut();
  };

  // write handler to check if dashboard already open, then close the drawer 
  render() {
    return (
      <div className="navigation">
        <Appbar
          title="Guest Book"
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={
            <FlatButton label="Logout" onClick={() => this.handleLogOut()} />
          }
          style={styles}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          width={200}
          style={styles.drawer}
          // onRequestChange={(open) => this.setState(open)}
          onRequestChange={this.handleToggle}
        >
          <MenuItem onClick={() => {this.props.openDashboard()}}>Dashboard</MenuItem>
          <Divider />
          <MenuItem onClick={() => {this.props.openEventForm()}}>Create Event</MenuItem>
          <MenuItem>Upcoming Events</MenuItem>
          <MenuItem>Past Events</MenuItem>
          {/* <MenuItem>Archived Events</MenuItem> */}
        </Drawer>
      </div>
    );
  }
}
