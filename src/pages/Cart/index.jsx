import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Folder } from '../../components/Folder';
import { ContextMenuCart } from '../../layouts/ContextMenu/ContextMenuCart';
import { addToCart } from '../../store/slices/cart.slice';

import './style.scss';

export const Cart = () => {

  const items = useSelector(addToCart);

  const [showContextmenu, setShowContextmenu] = useState(false);
  const [isFolder, setIsFolder] = useState(null);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);

  function handleContextMenu(e) {
    e.preventDefault();
    setPageX(e.pageX > 1350 ? 1350 : e.pageX);
    setPageY(e.pageY > 700 ? 700 : e.pageY);
    if (e.target.className === 'folder' || e.target.className === 'folder-item') {
      const folder = e.target.dataset.folder;
      setIsFolder(folder)
    } else setIsFolder(null);

    if (!showContextmenu) {
      setShowContextmenu(true);
    } else {
      setShowContextmenu(false);
    }
  }

  function handleContextMenuClick() {
    setShowContextmenu(false);
  }

  return (
    <>
      <div className='cart' onContextMenu={(e) => handleContextMenu(e)} onClick={(e) => handleContextMenuClick(e)}>
        {items.payload.cart.map((item) => {
          return <Folder key={item.id} folder={item}/>
        })}
        {showContextmenu ? <ContextMenuCart pageX={pageX} pageY={pageY} isFolder={isFolder} /> : <></>}
      </div>
    </>
  )
}