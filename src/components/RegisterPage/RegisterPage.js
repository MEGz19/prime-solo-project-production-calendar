import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI Imports
import TextField from '@material-ui/core/TextField';

class RegisterPage extends Component {
  // State contains all necessary contact info input fields
  state = {
    name: '',
    username: '',
    password: '',
    phoneNumber: '',
    email: '',
    roles: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    if (
      this.state.name &&
      this.state.username &&
      this.state.password &&
      this.state.phoneNumber &&
      this.state.email &&
      this.state.roles &&
      this.state.addressLine1 &&
      this.state.addressLine2 &&
      this.state.city &&
      this.state.state &&
      this.state.zipCode
    ) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          name: this.state.name,
          username: this.state.username,
          password: this.state.password,
          phoneNumber: this.state.phoneNumber,
          email: this.state.email,
          roles: this.state.roles,
          addressLine1: this.state.addressLine1,
          addressLine2: this.state.addressLine2,
          city: this.state.city,
          state: this.state.state,
          zipCode: this.state.zipCode
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="name">
              <TextField
                required
                id="name"
                label="name"
                margin="dense"
                value={this.state.name}
                onChange={this.handleInputChangeFor('name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="username">
              <TextField
                required
                id="username"
                label="username"
                margin="dense"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <TextField
                required
                id="password"
                label="password"
                margin="dense"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="phoneNumber">
              <TextField
                required
                id="standard-required"
                label="phone number"
                margin="dense"
                value={this.state.phoneNumber}
                onChange={this.handleInputChangeFor('phoneNumber')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <TextField
                required
                id="standard-required"
                label="email"
                margin="dense"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="roles">
              <TextField
                required
                id="standard-required"
                label="role(s)"
                margin="dense"
                value={this.state.roles}
                onChange={this.handleInputChangeFor('roles')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="addressLine1">
              <TextField
                id="standard-name"
                label="address line 1"
                margin="dense"
                value={this.state.addressLine1}
                onChange={this.handleInputChangeFor('addressLine1')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="addressLine2">
              <TextField
                id="standard-name"
                label="address line 2"
                margin="dense"
                value={this.state.addressLine2}
                onChange={this.handleInputChangeFor('addressLine2')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              <TextField
                id="standard-name"
                label="city"
                margin="dense"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="state">
              <TextField
                id="standard-name"
                label="state"
                margin="dense"
                value={this.state.state}
                onChange={this.handleInputChangeFor('state')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="zipCode">
              <TextField
                id="standard-name"
                label="zip code"
                margin="dense"
                value={this.state.zipCode}
                onChange={this.handleInputChangeFor('zipCode')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

