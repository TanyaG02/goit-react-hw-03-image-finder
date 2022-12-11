import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalDiv, Overlay } from './Modal.styled.js';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = { children: PropTypes.node.isRequired };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('нажали ESC');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalDiv>{this.props.children}</ModalDiv>
      </Overlay>,
      modalRoot
    );
  }
}
