import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { get } from "http";
import axios from "axios";
import { Route, Redirect } from 'react';

class Login extends Component {
  state = {
    signUp: [],
    firstName: '',
    lastName: '',
    Email: '',
    userName: '',
    password: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // get our form data out of state
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    console.log(newUser)
    axios.post('/api/users', newUser)
      .then((result) => {
        console.log(result)
        //access the results here....
      });
  };
  
  render() {
    const { firstName } = this.state;
    if (this.state.isRegistered === true) {
      return <Redirect to='/games' />
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <h1>Welcome to GamerFeed!</h1>
              <h1>This is our login page</h1>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="E-mail"
              />
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="User Name"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
              />
              
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  } 
}

export default Login;