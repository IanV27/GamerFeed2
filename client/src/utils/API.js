import axios from "axios";

export default {
  // Get all search results
  getSearch: function(title) {
    return axios.get
    ("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search/?api_key=4b4ba55b0118821989326754d56880f35e4178e0&format=json&query="+title+"&resources=game");
  },
  getGames: function() {
    return axios.get
    ("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/reviews/?format=json&api_key=4b4ba55b0118821989326754d56880f35e4178e0");
    // ("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=4b4ba55b0118821989326754d56880f35e4178e0&format=json");
  },

  // Gets all game reviews
  getGameRating: function(guid) {
    return axios.get
    ("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/review/"+guid+"/?api_key=4b4ba55b0118821989326754d56880f35e4178e0&format=json");
  },
  // Gets a list of games that have a Youtube video
  getYouTubeVideo: function(guid) {
    return axios.get
    ("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/video/"+guid+"/?format=json&api_key=4b4ba55b0118821989326754d56880f35e4178e0");
  },
  // Gets a Youtube video for a game
  getYouTubeVideos: function() {
    return axios.get
    ("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/videos/?format=json&api_key=4b4ba55b0118821989326754d56880f35e4178e0");
  },

};

