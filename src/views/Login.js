import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';

import '../style/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      username: '',
      password: ''
    };

    this.setStateLogin = this.setStateLogin.bind(this);
    this.submitSignIn = this.submitSignIn.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  setStateLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin
    });
  };

  handleUsernameChange(evt) {
    this.setState({ username: evt.target.value });
  }

  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }

  submitSignIn = () => {
    // axios
    //   .post('http://127.0.0.1:5000/register', {
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  submitSignUp = () => {
    axios
      .post('http://127.0.0.1:5000/register', {
        username: this.state.username,
        password: this.state.password
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='Login'>
        <Button onClick={this.setStateLogin}>
          {this.state.isLogin ? <span>SignIn</span> : <span>SignUp</span>}
        </Button>
        {this.state.isLogin ? (
          <div className='box'>
            <p className='title'>SignIn</p>
            <Form>
              <Form.Group as={Col} controlId='formGroupUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Username'
                  onChange={this.handleUsernameChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGroupPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>

              <Button variant='primary' type='submit' onClick={this.submitSignIn}>
                Submit
              </Button>
            </Form>
          </div>
        ) : (
          <div className='box'>
            <p className='title'>SignUp</p>
            <Form>
              <Form.Group as={Col} controlId='formGridUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Username'
                  onChange={this.handleUsernameChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>

              <Button variant='primary' type='submit' onClick={this.submitSignUp}>
                Submit
              </Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
