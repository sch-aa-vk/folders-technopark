import { useState } from 'react';
import openModalWindow from '../../utils';
import { ModalWindow } from '../ModalWindow';
import './style.scss';

export const Sidebar = (props) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <button className='button' onClick={() => setShowModal(true)}>Create</button>
        <button className='button'>My Folder</button>
        <button className='button'>Cart</button>
      </div>
      {showModal ? <ModalWindow showModal={showModal} setShowModal={setShowModal} parent={props.parent} /> : <></>}
    </div>
  )
}