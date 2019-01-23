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
  
  getYouTubeVideo: function(guid) {
    return axios.get
    ("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/video/"+guid+"/?format=json&api_key=4b4ba55b0118821989326754d56880f35e4178e0");
  },
  getReleases: function(id) {
    return axios.get
    ("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/releases/"+id+"/?api_key=4b4ba55b0118821989326754d56880f35e4178e0&format=json");
  },
  getYouTubeVideos: function() {
    return axios.get
    ("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/videos/?format=json&api_key=4b4ba55b0118821989326754d56880f35e4178e0");
  },

};

