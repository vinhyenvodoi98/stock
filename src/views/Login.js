import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";

import "../style/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };

    this.setStateLogin = this.setStateLogin.bind(this);
  }

  setStateLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin
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
            <Form>
              <Form.Group controlId='formGroupUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='Username' />
              </Form.Group>
              <Form.Group controlId='formGroupPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </div>
        ) : (
          <div className='box'>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridUsername'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type='text' placeholder='Username' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
              </Form.Row>

              <Form.Group id='formGridCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>

              <Button variant='primary' type='submit'>
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
