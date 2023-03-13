import { useState } from 'react';
import { createFolderHandler } from '../../utils';

import './style.scss';

export const ModalWindowCreate = ({ setShowModal, parent}) => {
  const [value, setValue] = useState('');

  return (
    <div className='modal-window_overlay' onClick={() => setShowModal(false)}>
      <div className='modal-window'>
        <h2>New folder</h2>
        <input type="text" placeholder='Untitled folder' onChange={(e) => setValue(e.target.value)}/>
        <div className='buttons__container'>
          <button className='button' onClick={() => setShowModal(false)}>Cancel</button>
          <button className='button' onClick={() => {
            createFolderHandler(parent, value);
            setShowModal(false);
          }}>OK</button>
        </div>
      </div>
    </div>
  );
};