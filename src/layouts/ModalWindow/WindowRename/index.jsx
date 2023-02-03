import { useState } from 'react';
import { renameFolder } from '../../../store/slices/store.slice';
import store from '../../../store/store';

import '../style.scss';

export const ModalWindowRename = ({ setShowModal}) => {

  const folder = JSON.parse(document.querySelector('.sidebar__wrapper').querySelector('.transparent').dataset.folder);
  const [value, setValue] = useState(folder.name);

  return (
    <>
      <div className='modal'>
        <div className='modal__wrapper'>
          <h2>Rename folder</h2>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
          <div className='buttons__container'>
            <button className='button' onClick={() => setShowModal(false)}>Cancel</button>
            <button className='button' onClick={() => {
              renameFolderHandler(folder, value);
              setShowModal(false);
            }}>OK</button>
          </div>
        </div>
      </div>
      <div className='overlay' onClick={() => setShowModal(false)}></div>
    </>
  )
}

function renameFolderHandler(folder, value) {
  store.dispatch(renameFolder({
    id: folder.id,
    name: value,
    parentId: folder.parentId
  }));
}