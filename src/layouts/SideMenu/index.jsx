import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalWindowCreate } from '../ModalWindow/WindowCreate';
import { ModalWindowRename } from '../ModalWindow/WindowRename';
import './style.scss';

export const Sidebar = () => {

  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalRename, setShowModalRename] = useState(false);
  const parentId = +window.location.pathname.substring(1) || null;

  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <button className='button' onClick={() => setShowModalCreate(true)}>Create</button>
        <Link to='/'><button className='button'>My Folder</button></Link>
        <Link to='/cart'><button className='button'>Cart</button></Link>
        <button className='button transparent' onClick={() => setShowModalRename(true)}>Rename</button>
      </div>
      {showModalCreate ? <ModalWindowCreate setShowModal={setShowModalCreate} parent={parentId} /> : <></>}
      {showModalRename ? <ModalWindowRename setShowModal={setShowModalRename} /> : <></>}
    </div>
  )
}