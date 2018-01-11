import React from 'react';
import Appbar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
// import Paper from 'material-ui/Paper';
// import RaisedButton from 'material-ui/RaisedButton';


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
    })
  };

  handleClose() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div className="navigation">
        <Appbar
          title="Guest Book"
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={
            <FlatButton label="Logout" />
            }
        />
      {/* </div>
      <div className="drawer"> */}
          <Drawer 
            open={this.state.open}
            docked={false}
            width={200}
            // onRequestChange={(open) => this.setState(open)}
            onRequestChange={this.handleToggle}
            >

            {/* <Paper style={style}> */}
              <MenuItem onClick={this.handleclose}>Create Event</MenuItem>
              <MenuItem>Upcoming Events</MenuItem>
              <MenuItem>Past Events</MenuItem>
              <MenuItem>Archived Events</MenuItem>
            {/* </Paper> */}
          </Drawer>
      </div>
    );
  }
}


const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};