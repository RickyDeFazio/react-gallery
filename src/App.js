import React, { Component } from 'react';
import { Provider } from './components/Context';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import apiKey from './config';
import Search from './components/Search';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  
  state = {
    photos: [],
    isLoading: true,
    query: ""
  }

  componentDidMount() {
    this.handleSearch();
  }


  handleSearch = (query = 'computers') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&api_key=${apiKey}&format=json&nojsoncallback=1&extras=url_o&per_page=24`)
      .then(res => res.json())
      .then(data => this.setState({ 
        photos: data.photos.photo,
        isLoading: false,
        query
       }))
      .catch(err => console.log("Error fetching and parsing data", err));
  }


  handleNav = (query) => {
    this.handleSearch(query);
    this.setState({
      isLoading: true,
      query
    });
  }

  render() {
    return (
      <Provider value={{
        photos: this.state.photos,
        query: this.state.query,
        actions: {
          nav: this.handleNav,
          search: this.handleSearch
        }
      }}>
        <BrowserRouter>
          <div className="container">
            <Search onSearch={this.handleSearch} />
            <Nav />
            <Switch>

              <Route exact path="/" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery photos={this.state.photos} />} />
    
              <Route path="/cats" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery photos={this.state.photos} />} />

              <Route path="/dogs" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery photos={this.state.photos} />} />

              <Route path="/birds" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery photos={this.state.photos} />} />

              <Route path="/search/:topic" render={() => <Gallery photos={this.state.photos} />} />
              
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  } 
}
export default App;