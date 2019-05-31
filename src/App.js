import React, {Component} from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Gallery from './components/Gallery';
import Header from './components/Header';
import apiKey from './config';

class App extends Component {
  
  state = {
    title: "React Gallery",
    photos: []
  }

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=cat,dog,computer&api_key=${apiKey}&format=json&nojsoncallback=1&extras=url_o&per_page=16`)
      .then(res => res.json())
      .then(data => this.setState( { photos: data.photos.photo } ))
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header title={this.state.title}/>
          <Route path="/" render={() => <Gallery photos={this.state.photos}/>} />
        </div>
      </BrowserRouter>
    );
  } 
}
export default App;