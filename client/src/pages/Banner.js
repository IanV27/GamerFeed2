import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { get } from "http";
import "../sass/main.css";

class Banner extends Component {
  
    render(){
    return (
      <Container fluid>
      <div class="banner"> This is My Banner </div>
      </Container>
    );
}
}
export default Banner;
