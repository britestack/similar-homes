import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Similar from './Similar';
import Near from './Near';

const PageLayout = styled.div`
  filter: blur(${(props) => (props.showModal ? 2 : 0)}px);
  position: relative;
  color: rgb(59, 65, 68);
  max-width: 960px;
  margin: auto;
  padding: 16px env(safe-area-inset-right) 48px env(safe-area-inset-left);
`;

const API_URL = '/api/homes';
class App extends React.Component {
  constructor(props) {
    super(props);
    // const { ID } = props;

    this.state = {
      // _id: ID,
      showModal: false,
      similarCarousel: [],
      nearCarousel: [],
    };
    this.displayBlur = this.displayBlur.bind(this);
    this.removeBlur = this.removeBlur.bind(this);
  }

  componentDidMount() {
    this.getHomes();
  }

  getHomes() {
    this.getSimilarHomes();
    this.getNearbyHomes();
  }

  getNearbyHomes() {
    const app = this;
    // const { _id } = this.state;
    axios.get(`${API_URL}/new/1000`)
      .then((results) => {
        app.setState({
          nearCarousel: results.data,
        });
      })
      .catch((err) => { console.log(err); });
  }

  getSimilarHomes() {
    const app = this;
    // const { _id } = this.state;
    axios.get(`${API_URL}/similar/1000`)
      .then((results) => {
        app.setState({
          similarCarousel: results.data,
        });
      })
      .catch((err) => { console.log(err); });
  }

  displayBlur() {
    this.setState({
      showModal: true,
    });
  }

  removeBlur() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    // Why does my app not work if this isnt here...
    const { similarCarousel } = this.state;
    const { nearCarousel } = this.state;
    const { showModal } = this.state;
    if (similarCarousel.length === 0 || nearCarousel.length === 0) {
      return (<div />);
    }

    return (
      <PageLayout showModal={showModal}>
        <Similar
          homes={similarCarousel}
          handleClick={this.displayBlur}
          handleExit={this.removeBlur}
        />
        <Near
          homes={nearCarousel}
          handleClick={this.displayBlur}
          handleExit={this.removeBlur}
        />
      </PageLayout>
    );
  }
}

export default App;
