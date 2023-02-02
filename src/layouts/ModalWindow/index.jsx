import { useState } from 'react';
import './style.scss';

import { createFolder } from '../../store/slices/store.slice';
import store from '../../store/store';

export const ModalWindow = ({showModal, setShowModal, parent}) => {

  const [value, setValue] = useState('');

  return (
    <>
      <div className='modal'>
        <div className='modal__wrapper'>
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
      <div className='overlay' onClick={() => setShowModal(false)}></div>
    </>
  )
}

function createFolderHandler(parentId, value) {
  store.dispatch(createFolder({
    id: store.getState().todos.length + 1,
    name: value,
    parentId: parentId
  }));
}