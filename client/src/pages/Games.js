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
    API.getRating()
      .then(res =>
        this.setState({ rating: res.data, results: {} })
    )
    .catch(err => console.log(err));
  //   API.getReviews()
  //   .then(res =>
  //     this.setState({ reviews: res.data, results: [] })
  //   )
  //   .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

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
        .then(res => this.setState({ games: res.data.results })
        )
        .catch(err => console.log(err));
    }
  };
  
getGameRatings = guid => {
  if (guid) {
    API.getGameRating(guid)
      .then(res => this.setState({ gameReview: res.data.number_of_total_results }))
      
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
              {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              /> */}
              {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.games.length ? (
              <List>
                {this.state.games.map(game => (
                  // <ListItem key={book._id}>
                  //   <Link to={"/books/" + book._id}>
                      <strong>
                        <li data-id={game.guid} onClick={() => this.getGameRatings(game.guid)}>{game.name} {this.state.gameReview}</li>
                      </strong>
                    // </Link>
                  //   <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  // </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Games to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Games;
