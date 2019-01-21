import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { get } from "http";
import axios from "axios";

class Signup extends Component {
  state = {
    firstName: ''
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // get our form data out of state
    const newUser = {
      firstName: this.state.firstName
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
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
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
