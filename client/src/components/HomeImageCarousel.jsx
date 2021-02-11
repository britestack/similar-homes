import React from 'react';
import styled from 'styled-components';
import HomeModal from './HomeModal';
// import NextButton from './NextButton';

const HomeImageContainer = styled.div`
  position: absolute;
  width: 224px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
`;

const HomeImage = styled.img`
  cursor: pointer;
  object-fit: cover;
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  width: 224px;
  height: 160px;

  -webkit-transition: all 0.7s ease; /* Safari and Chrome */
  -moz-transition: all 0.7s ease; /* Firefox */
  -ms-transition: all 0.7s ease; /* IE 9 */
  -o-transition: all 0.7s ease; /* Opera */
  transition: all 0.7s ease;

  &:hover {
    -webkit-transform:scale(1.2); /* Safari and Chrome */
    -moz-transform:scale(1.2); /* Firefox */
    -ms-transform:scale(1.2); /* IE 9 */
      -o-transform:scale(1.2); /* Opera */
      transform:scale(1.2);
  };
`;

class HomeImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      image: props.image,
      view: 0,
    };
    this.displayModal = this.displayModal.bind(this);
    this.removeModal = this.removeModal.bind(this);
  }

  displayModal() {
    const { handleClick } = this.props;
    handleClick();
    this.setState({
      showModal: true,
    });
  }

  removeModal() {
    const { handleExit } = this.props;
    handleExit();
    this.setState({
      showModal: false,
    });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div>
        {showModal ? (
          <HomeModal image={this.state.image} handleExit={this.removeModal} />
        ) : null}
        <HomeImageContainer onClick={this.displayModal}>
          {/* <NextButton handleClick={() => {}} view={1} /> */}
          <HomeImage src={this.state.image} alt="missing" />
        </HomeImageContainer>
      </div>
    );
  }
}

export default HomeImageCarousel;
