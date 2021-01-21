import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Home from './Home';
import SeeMoreCard from './SeeMoreCard';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

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
  width: 960px;
  hieght: 327px;
  overflow: auto;
  overflow: hidden;
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
  transform: translateX(-${(props) => 912 * props.view}px);
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
    const { view } = this.state;
    const newView = view + 1;
    this.setState({
      view: newView,
    });
  }

  handlePrev() {
    const { view } = this.state;
    const newView = view - 1;
    this.setState({
      view: newView,
    });
  }

  render() {
    const { view } = this.state;
    const { currentHomes } = this.state;
    const homesList = currentHomes.map((home) => (<Home home={home} />));
    return (
      <div>
        <Background>
          <PrevButton handleClick={this.handlePrev} view={view} />
          <NextButton handleClick={this.handleNext} view={view} />
          <ViewPort>
            <CardContainer view={view}>
              {homesList}
              <SeeMoreCard />
            </CardContainer>
          </ViewPort>
        </Background>
      </div>
    );
  }
}

// Carousel.propTypes = {
//   currentHomes: PropTypes.array.isRequired,
// };

export default Carousel;
