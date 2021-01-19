import React from 'react';
import styled from 'styled-components';
import Home from './Home.jsx';

const ViewPort = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  hieght: 327px;
  width: 960px;
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  width: fit-content;
  transition: transform 0.4s 0s ease-in;
  transform: translateX(-${(props) => 860 * props.view}px);
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHomes: props.homes,
      view: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    let newView = this.state.view + 1;
    this.setState({
      view: newView,
    });
  }

  handlePrev() {
    let newView = this.state.view - 1;
    this.setState({
      view: newView,
    });
  }

  render() {
    var homesList = this.state.currentHomes.map((home) => (<Home home={home} />));
    return (
      <div>
        <div>
          <button onClick={this.handlePrev}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
        </div>
        <ViewPort>
          <CardContainer view={this.state.view}>
            {homesList}
          </CardContainer>
        </ViewPort>
      </div>
    );
  }
}

export default Carousel;
