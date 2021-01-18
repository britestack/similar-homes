import React from 'react';
import styled from 'styled-components';
import Similar from './Similar.jsx';
import Near from './Near.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarCarousel: [],
      nearCarousel: [],
    };
  }

  getHomes() {

  }

  render() {
    return (
      <div>
        <h1>Similar Homes You May Like</h1>
        <Similar homes={this.state.similarCarousel}/>
        <h1>New Listings near 224 Sea Cliff Ave</h1>
        <Near homes={this.state.nearCarousel}/>
      </div>
    );
  }
}

export default App;
