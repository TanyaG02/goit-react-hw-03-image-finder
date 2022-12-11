import React, { Component } from 'react';
// import axios from 'axios';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hi</h1>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
