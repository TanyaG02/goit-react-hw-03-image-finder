import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ModalImage } from './Modal/Modal.styled';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal';
import Searchbar from './Searchbar/Searchbar';
import LoadMore from './Button/LoadMore';
import LoaderImg from './Loader/Loader';

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

  async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchItem;
    const newSearch = this.state.searchItem;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevSearch !== newSearch || prevPage !== newPage) {
      this.setState({ status: 'pending' });
      if (prevSearch !== newSearch) {
        this.setState({ page: 1 });
      }

      try {
        const response = await axios.get(
          `/?q=${newSearch}&page=${newPage}&key=32054752-6682caedad00f1be23d6274c4&image_type=photo&orientation=horizontal&per_page=12`
        );
        const currentItems = response.data.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return { id, webformatURL, largeImageURL, tags };
          }
        );
        this.setState(prevState => ({
          items: [...prevState.items, ...currentItems],
          status: 'resolved',
        }));
        if (response.data.hits.length === 0) {
          toast.error('Oops, somethings wrong!');
        }
      } catch (error) {
        toast.error('Wrong!');
        this.setState({ status: 'rejected' });
      }
    }
  }

  handleFormSubmit = searchItem => {
    this.setState({ searchItem, items: [] });
  };

  ClickLoadBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ imageModal: largeImageURL });
  };

  render() {
    const { items, status, showModal, imageModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {items.length > 0 && (
          <ImageGallery pictures={items} onClick={this.toggleModal} />
        )}
        {status === 'pending' && <LoaderImg />}
        {(items.length === 12 || items.length > 12) && (
          <LoadMore onClick={this.ClickLoadBtn} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalImage src={imageModal} alt="" />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
