import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {

    render() {
    return (
      <MuiThemeProvider>
            <React.Fragment>
             <AppBar showMenuIconButton={false} title="Success"/>   
            <h1>Thank You For Registering</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Success;
