import React, {Component} from 'react';
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
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.handleSearch} />
          <Nav handleButton={this.handleNav}/>
          <Switch>

            <Route exact path="/" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery title={this.state.query.toUpperCase()} photos={this.state.photos}/>} />
  
            <Route path="/cats" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery title={this.state.query.toUpperCase()} photos={this.state.photos}/>} />

            <Route path="/dogs" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery title={this.state.query.toUpperCase()} photos={this.state.photos}/>} />

            <Route path="/birds" render={() => (this.state.isLoading) ? <p>Loading...</p> : <Gallery title={this.state.query.toUpperCase()} photos={this.state.photos}/>} />

            <Route path="/search/:topic" render={() => <Gallery title={this.state.query.toUpperCase()} photos={this.state.photos}/>} />
            
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  } 
}
export default App;