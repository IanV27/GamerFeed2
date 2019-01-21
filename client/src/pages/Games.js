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
    isComingFromSearch: false,
    gameVideo: "",
    isComingFromVideo: false,
    
  };

  componentDidMount() {
    this.loadGames();
  }
// Calls on API to get the list of Games
  loadGames = () => {
    API.getGames()
      .then(res => {
        // console.log('res.data.results >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',res.data.results[0].guid);
        this.setState({ 
          games: res.data.results,
          isComingFromVideo: false,
          isComingFromSearch: false,
         })
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

// Calls on API to search any game on the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getSearch(this.state.title)
        .then(res => this.setState({ games: res.data.results, isComingFromSearch: true }))
        .catch(err => console.log(err));
    }
  };
  
// Calls on API to get a list of games with a Rating from 1-5
getGameRatings = guid => {
  if (guid) {
    API.getGameRating(guid)
      .then(res => this.setState({ gameReview: res.data.results.score }))
      .catch(err => console.log(err));
  }
};

// Calls on API to get a list of games with a YouTube video
getGameVideos = () => {
  API.getYouTubeVideos()
  .then(res => {
    this.setState({ games: res.data.results, isComingFromVideo: true })
  }
)
.catch(err => console.log(err));

};

// Calls on API to pull one video from the list of games that have videos
getGameVideo = (guid) => {
  if (guid) {
  API.getYouTubeVideo(guid)
  .then(res => {
    this.setState({ gameVideo: res.data.results.youtube_id, isComingFromVideo: true })
  }
)
.catch(err => console.log(err));
  }
};


  render() {
    let html=""; 
    
    let html_video= "";

    
    if(this.state.games.length && !this.state.isComingFromSearch && !this.state.isComingFromVideo)  { 
      html=
      <List>
        {this.state.games.map(game => (
              <strong>
                <li data-id={game.guid} onClick={() => this.getGameRatings(game.guid)}>{game.game.name} </li>
              </strong>
        ))}
      </List>;
    } else if(this.state.isComingFromSearch) {
      html=
      <List>
        {this.state.games.map(game => (
              <strong>
                <li data-id={game.guid} onClick={() => this.getGameRatings(game.guid)}>{game.name} </li>
              </strong>
        ))}
      </List>;
    } else if(this.state.isComingFromVideo) {
      html=
      <List>
        {this.state.games.map(game => (
              <strong>
                <li data-id={game.guid} onClick={() => this.getGameVideo(game.guid)}>{game.name} </li>
              </strong>
        ))}
      </List>;
      if (this.state.gameVideo) {
        html_video=
        <h2><a href={`https://www.youtube.com/watch?v=${this.state.gameVideo}`} >YouTube video</a></h2>;
       }

    }
// Returns Search, Videos and Description of Game
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
                Search
              </FormBtn>

            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Game Rating 1-5</h1>
              
              <h2>Rating: {this.state.gameReview}</h2>
            {html_video}
            </Jumbotron>

            <FormBtn
                onClick={this.getGameVideos}
              >
                Videos
              </FormBtn>

            <FormBtn
                onClick={this.loadGames}
              >
                Ratings
              </FormBtn>

{html}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Games;
