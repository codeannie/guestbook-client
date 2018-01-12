import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class SideMenuDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      open: false
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  };

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Create Event</MenuItem>
          <MenuItem>Upcoming Events</MenuItem>
          <MenuItem>Past Events</MenuItem>
          <MenuItem>Archived Events</MenuItem>
        </Drawer>
      </div>
    );
  }
}