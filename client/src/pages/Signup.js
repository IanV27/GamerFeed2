import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { get } from "http";
import axios from "axios";

class Signup extends Component {
  state = {
    signUp: [],
    firstName: '',
    lastName: '',
    userName: '',
    email: ''
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
      userName: this.state.userName,
      email: this.state.email
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

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <h1>Welcome to GamerFeed!</h1>
              <h1>Please sign up</h1>
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
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="User Name"
              />
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="email"
                placeholder="e-mail"
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

export default Signup;
