import React from 'react';
import Modal from 'react-modal';
import Chip from '@material-ui/core/Chip';

import './styles.css';

type Props = {
  isOpen: boolean,
  onRequestClose: () => void,
  modalPicture: any,
}

export const PaidModal = ({ isOpen, onRequestClose, modalPicture }: Props) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
    >

      <div className='modal-header' >
        <button className='modal-header-closebutton' onClick={onRequestClose}>X</button>
      </div>

      <img
        src={modalPicture.images.low_resolution.url}
        alt=""
        className={'modal-picture'}
      />

      <div className='modal-content' >
        <div className='user' > Name: {modalPicture.user.name} </div>
        <div className='likes' > Likes: {modalPicture.likes} </div>
        <div className='comments' > Comments: {modalPicture.comments} </div>
        <div>
          <span>Tags: </span>

          {
            modalPicture.tags.map((tag, i) => (
              <Chip
                label={tag}
                variant="outlined"
                key={i}
              />

            ))
          }
        </div>

      </div>
    </Modal>);
};