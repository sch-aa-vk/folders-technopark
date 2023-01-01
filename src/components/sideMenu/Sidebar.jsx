import React, { useState } from 'react';
import { ModalWindow } from '../modalWindow/ModalWindow';
import './sidebar.css';

export function Sidebar(props) {

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