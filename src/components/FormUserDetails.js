import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider >
                <React.Fragment>
                    <Dialog
                        open="true"
                        fullWidth="true"
                        maxWidth='sm'
                    >
                        <AppBar title="Enter User Details" />
                        <TextField
                            placeholder="Enter Your First Name"
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            margin="normal"
                            fullWidth="true"
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Last Name"
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            margin="normal"
                            fullWidth="true"
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Email"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            margin="normal"
                            fullWidth="true"
                        />
                        <br />
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Continue</Button>
                    </Dialog>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;

