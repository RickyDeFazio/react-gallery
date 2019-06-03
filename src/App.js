import React, {Component} from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import apiKey from './config';
import Search from './components/Search';

class App extends Component {
  
  state = {
    photos: [],
    isLoading: true
  }

  componentDidMount() {
    this.handleSearch();
  }


  handleSearch = (query = 'cats, dogs, computers') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&api_key=${apiKey}&format=json&nojsoncallback=1&extras=url_o&per_page=16`)
      .then(res => res.json())
      .then(data => this.setState({ 
        photos: data.photos.photo,
        isLoading: false
       }))
      .catch(err => console.log("Error fetching and parsing data", err));
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.handleSearch} />
          <Nav />
          <Route path="/" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery photos={this.state.photos}/>} />
        </div>
      </BrowserRouter>
    );
  } 
}
export default App;