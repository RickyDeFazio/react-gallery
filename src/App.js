import React, {Component} from 'react';
import Gallery from './components/Gallery';
import Title from './components/Title';


class App extends Component {
  
  state = {
    title: "React Gallery Title"
  }


  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Title title={this.state.title}/>
        <Gallery />
      </div>
    );
  } 
}
export default App;