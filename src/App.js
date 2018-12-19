import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { PaidModal } from './paid-model';
import { ImageGrid } from './card-grid';
import { withRouter } from 'react-router-dom';

type State = {
  modalIsOpen: boolean,
  modalPic?: any,
}

export class AppComponent extends Component<{}, State> {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalPic: null,
    };

    // $FlowIgnore
    this.openModal = this.openModal.bind(this);
    // $FlowIgnore
    this.closeModal = this.closeModal.bind(this);

    if (process.env.NODE_ENV !== 'test') {
      ReactModal.setAppElement('#root');
    }
  }

  openModal(pic: any) {
    this.setState({ modalPic: pic, modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, modalPic: null });
  }


  render() {
    return (
      <React.Fragment>
        <PaidModal
          isOpen={this.state.modalIsOpen}
          modalPicture={this.state.modalPic}
          onRequestClose={this.closeModal}
        />
        <ImageGrid openModal={this.openModal} />
      </React.Fragment>
    );
  }
}

export const App = withRouter(AppComponent);
