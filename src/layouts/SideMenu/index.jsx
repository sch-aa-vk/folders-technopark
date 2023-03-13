import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AddIcon } from '../../assets/AddIcon';
import { MyDriveIcon } from '../../assets/MyDriveIcon';
import { TrashIcon } from '../../assets/TrashIcon';
import { ModalWindowCreate } from '../ModalWindow';
import './style.scss';

export const Sidebar = () => {
  const [pathname, setPathname] = useState('/');
  const [showModalCreate, setShowModalCreate] = useState(false);
  const location = useLocation();
  const parentId = +location.pathname.substring(1) || null;

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <button className='button-create' onClick={() => setShowModalCreate(true)}>
          <AddIcon />
          <p className='link-text'>Create</p>
        </button>
        <Link data-active={pathname === '/'} className='sidebar__item' to='/'>
          <MyDriveIcon />
          <p className='link-text'>My Drive</p>
        </Link>
        <Link data-active={pathname === '/cart'} className='sidebar__item' to='/cart'>
          <TrashIcon />
          <p className='link-text'>Cart</p>
        </Link>
      </div>
      {showModalCreate ? <ModalWindowCreate setShowModal={setShowModalCreate} parent={parentId} /> : <></>}
    </div>
  )
}