import React, {Component} from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';


class App extends Component {
  
  state = {
    title: "React Gallery"
  }


  componentDidMount() {
    // fetch data and add to state
  }

  render() {
    return (
      <div className="container">
        <Header title={this.state.title}/>
        <Gallery />
      </div>
    );
  } 
}
export default App;