import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import { compose } from 'redux';
import { connect } from 'react-redux';
// NOTE
// add store and dispatch
import store from '../store';
import * as accountAction from '../actions/accountAction';

import '../style/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
    var host = window.location.hostname;
    if (host !== 'localhost') {
      host = 'cloud';
    }
    var url = 'http://' + host + ':5000/auth';

    axios
      .post(url, {
        username: this.state.username,
        password: this.state.password
      })
      .then(function(response) {
        localStorage.setItem('access_token', response.data.access_token);
        // NOTE
        // if response 200
        // gia su isLogin == true no se tra lại la true trong props
        var isLogin = true;
        store.dispatch(accountAction.login(isLogin));

        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  submitSignUp = () => {
    var host = window.location.hostname;
    if (host !== 'localhost') {
      host = 'cloud';
    }
    var url = 'http://' + host + ':5000/register';

    axios
      .post(url, {
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
    console.log(this.state.username);
    console.log(' is this account login ?', this.props.account.isLogin);
    return (
      <div className='Login'>
        <Button variant='outline-primary' onClick={this.setStateLogin}>
          {this.state.isLogin ? <span>Sign Up</span> : <span>Sign In</span>}
        </Button>
        {this.state.isLogin ? (
          <div className='box'>
            <p className='title'>Sign In</p>
            <Form>
              <Form.Group as={Col} controlId='formGroupUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Username'
                  onChange={this.handleUsernameChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGroupPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  placeholder='Password'
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>
            </Form>

            <Button variant='primary' type='submit' onClick={this.submitSignIn}>
              Submit
            </Button>
          </div>
        ) : (
          <div className='box'>
            <p className='title'>Sign Up</p>
            <Form>
              <Form.Group as={Col} controlId='formGridUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Username'
                  onChange={this.handleUsernameChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  placeholder='Password'
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>
            </Form>
            <Button variant='primary' type='submit' onClick={this.submitSignUp}>
              Submit
            </Button>
          </div>
        )}
      </div>
    );
  }
}

// NOTE
const mapStatetoProps = (state) => {
  // gan login o redux vào props ở trên chỉ cần gọi this.props.login để check
  return {
    account: state.account
  };
};

export default compose(connect(mapStatetoProps))(Login);
