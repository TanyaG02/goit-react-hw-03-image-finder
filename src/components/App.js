import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal';
import Searchbar from './Searchbar/Searchbar';
import ApiFetch from './Api';

class App extends Component {
  state = {
    searchItem: '',
    totalImages: 0,
    items: [],
    status: 'idle',
    page: 1,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchItem !== this.state.searchItem ||
      prevState.page !== this.state.page
    ) {
      this.getFetchImage();
    }
  }

  fetchImage = async () => {
    const response = await ApiFetch(this.state.searchItem, this.state.page);
    this.setState({ totalImages: response.totalHits });
    if (this.state.page === 1) {
      response.totalHits === 0
        ? toast.error('Oops, somethings wrong!')
        : toast.success('Success!');
    }
    return response;
  };

  getFetchImage = async () => {
    try {
      const response = await this.fetchImage();
      this.setState(prevState => ({
        items: [...prevState.items, response.hits],
      }));
    } catch {
      toast.error('Oops, somethings wrong!');
    }
    // finally {
    //   this.setState
    // }
  };

  finderImage = word => {
    this.setState({ error: false });
    if (this.state.searchItem !== word) {
      this.setState({ searchItem: word, page: 1, items: [] });
    }
  };

  onModalClick = event => {
    this.toggleModal();

    const currentImage = Number(event.target.id);
    const currentItem = this.state.items.find(item => item.id === currentImage);
    const modalData = {
      src: currentItem.largeImageURL,
      alt: currentItem.tags,
    };
    this.setState({ modalData });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal, items } = this.state;

    return (
      <>
        {/* <button type="button" onClick={this.toggleModal}>
          Open
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.finderImage} />
        <ImageGallery imageModal={this.onModalClick} items={items} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
