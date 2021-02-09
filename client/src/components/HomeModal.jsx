import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import ModalNext from './ModalNext';
import ModalPrev from './ModalPrev';
import ExitModalButton from './ExitModalButton';

const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  position: fixed;
  width: 100%;
  height: 101%;
  display: 'block';
  justify-content: 'center';
  align-items: 'center';
  background-color: rgba(0,0,0,0.8);
`;

const ViewWrapper = styled.div`
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  width: 448px;
  height: 320px;
`;

const HomeImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 448px;
  height: 320px;
  border-radius: 16px;
  overflow: hidden;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  transition: transform 0.3s 0s ease-in;
  transform: translateX(-${(props) => (448 * props.view)}px);
`;

const HomeImage = styled.img`
  transition: 0.4s;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  width: 448px;
  height: 320px;
`;

const ViewPort = styled.div`
  overflow: hidden;
  display: flex;
  position: absolute;
  width: 448px;
  height: 320px;
  box-sizing: border-box;
`;

const SingleHome = ({ image }) => (
  <HomeImageContainer>
    <HomeImage src={image} alt="missing" />
  </HomeImageContainer>
);

class HomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
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
    const { image } = this.state;
    const { handleExit } = this.props;
    const homes = <SingleHome image={image} />;
    debugger;
    return (
      ReactDOM.createPortal(
        <Container>
          <ExitModalButton handleExit={handleExit} view={view} />
          {/* <ModalPrev handleClick={this.handlePrev} view={view} />
          <ModalNext handleClick={this.handleNext} view={view} /> */}
          <ViewWrapper>
            <ViewPort>
              <CardContainer view={view}>
                {homes}
              </CardContainer>
            </ViewPort>
          </ViewWrapper>
        </Container>,
        document.getElementById('similar'),
      )
    );
  }
}

export default HomeModal;
