import React from 'react';
import Appbar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import SideBar from './sidebar.component';

const AppNav = (props) => {
  return (
    <Appbar
      title="Guest Book"
      // onLeftIconButtonClick={this.props.toggle}
      iconElementRight={<FlatButton label="Logout" />}
    />
  )
}

export default AppNav;