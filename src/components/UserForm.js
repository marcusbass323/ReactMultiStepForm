import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occupation: '',
        city: '',
        bio: '',
    }
    

    //PROCEED TO NEXT FORM STEP
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    //GO BACK TO PREVIOUS FORM STEP
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }
    
    //HANDLE CHANGE
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        
    }

    render() {
        
        const { step, firstName, lastName, email, phone, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, phone, occupation, city, bio }

        switch (step) {
            case 1:
                return (

                    

                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}   
                    />
                );
            case 2:
            return (
                <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            );
            case 3:
            return (
                <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            );
            case 4:
                return <Success />;    
        }
        
  }
  
}

export default UserForm
