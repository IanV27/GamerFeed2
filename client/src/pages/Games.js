import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { get } from "http";

class Games extends Component {
  state = {
    search: [],
    games: [],
    reviews: [],
    gameReview: "",
    isComingFromSearch: false
  };

  componentDidMount() {
    this.loadGames();
  }

  loadGames = () => {
    API.getGames()
      .then(res => {
        // console.log('res.data.results >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',res.data.results[0].guid);
        this.setState({ games: res.data.results })
      }
    )
    .catch(err => console.log(err));

    };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getSearch(this.state.title)
        .then(res => this.setState({ games: res.data.results, isComingFromSearch: true }))
        .catch(err => console.log(err));
    }
  };
  
getGameRatings = guid => {
  if (guid) {
    API.getGameRating(guid)
      .then(res => this.setState({ gameReview: res.data.results.score }))
      .catch(err => console.log(err));
  }
};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Games Should I Search?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Game Title (required)"
              />
              
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Games Rating</h1>
              <h2>{this.state.gameReview}</h2>
            </Jumbotron>
            {this.state.games.length && !this.state.isComingFromSearch ? (
              <List>
                {this.state.games.map(game => (
                      <strong>
                        <li data-id={game.guid} onClick={() => this.getGameRatings(game.guid)}>{game.game.name} </li>
                      </strong>
                ))}
              </List>
            ) : (
              <List>
                {this.state.games.map(game => (
                      <strong>
                        <li data-id={game.guid} onClick={() => this.getGameRatings(game.guid)}>{game.name} </li>
                      </strong>
                ))}
              </List>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Games;
