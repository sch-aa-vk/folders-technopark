import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalWindow } from '../ModalWindow';
import './style.scss';

export const Sidebar = () => {

  const [showModal, setShowModal] = useState(false);
  const parentId = +window.location.pathname.substring(1) || null;

  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <button className='button' onClick={() => setShowModal(true)}>Create</button>
        <Link to='/'><button className='button'>My Folder</button></Link>
        <Link to='/cart'><button className='button'>Cart</button></Link>
      </div>
      {showModal ? <ModalWindow showModal={showModal} setShowModal={setShowModal} parent={parentId} /> : <></>}
    </div>
  )
}