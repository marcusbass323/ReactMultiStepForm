import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import UserForm from './UserForm'


export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
            <React.Fragment>
             <AppBar showMenuIconButton={false} title="Please Enter Your Contact Information"/>
             

             
             <div className="UserFormFlex">
                 
                 <div>  
                     
                <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    
                />
                <br/>
                <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br />
                <TextField
                    hintText="Enter Your Phone Number"
                    floatingLabelText="Phone"
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                />
                <br />
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                    </div>

              
                    <div className="Details">
                        <h1>Tell us a few details!</h1>
                        <p>First we want to know what's the best
                            way of contacting you, should we have 
                            any questions.
                        </p>
                    </div>

                    </div>
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

export default FormUserDetails
