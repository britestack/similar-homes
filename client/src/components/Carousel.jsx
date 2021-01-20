import React from 'react';
import styled from 'styled-components';
import Home from './Home.jsx';
import NextButton from './NextButton.jsx';
import PrevButton from './PrevButton.jsx';

const Background = styled.div`
  box-sizing: border-box;
  color: rgb(59, 65, 68);
  display: block;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  font-size: 16px;
  height: 311px;
  letter-spacing: -0.1px;
  line-height: 24px;
  outline-color: rgb(59, 65, 68);
  outline-style: none;
  outline-width: 0px;
  position: relative;
  width: 960px;
`;

const ViewPort = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 960px;
  hieght: 327px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-scrollbar {
    display: none;
  };
  box-sizing: border-box;
`;

const CardContainer = styled.div`
  display: flex;
  width: fit-content;
  margin-bottom: -18px;
  padding-bottom: 18px;
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
        <Background>
          <PrevButton handleClick={this.handlePrev} />
          <NextButton handleClick={this.handleNext} />
          <ViewPort>
            <CardContainer view={this.state.view}>
              {homesList}
            </CardContainer>
          </ViewPort>
        </Background>
      </div>
    );
  }
}

export default Carousel;
