import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import apiKey from './config';
import SearchBar from './components/SearchBar';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  
  state = {
    photos: [],
    isLoading: true
  }

  componentDidMount() {
    this.handleSearch();
  }


  handleSearch = (query = 'cats') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&api_key=${apiKey}&format=json&nojsoncallback=1&extras=url_o&per_page=24`)
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
          <SearchBar onSearch={this.handleSearch} />
          <Nav />
          <Switch>
            <Route path="/" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery photos={this.state.photos}/>} />
  
            <Route component={PageNotFound} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  } 
}
export default App;