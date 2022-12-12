import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

axios.defaults.baseURL = 'https://pixabay.com/api';

class App extends Component {
  state = {
    searchItem: '',
    items: [],
    status: 'idle',
    page: 1,
    showModal: false,
    imageModal: null,
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   const prevSearch = prevState.searchItem;
  //   const newSearch = this.state.searchItem;
  //   const prevPage = prevState.page;
  //   const newPage = this.state.page;
  // }

  // if(condition) {}

  handleFormSubmit = searchItem => {
    this.setState({ searchItem });
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };
  render() {
    // const { showModal } = this.state;

    return (
      <>
        {/* <button type="button" onClick={this.toggleModal}>
          Open
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={imageModal} alt="" />
          </Modal>
        )} */}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
