import './style.scss';

import { useSelector } from 'react-redux';
import { Folder } from '../../components/Folder';
import { createFolder } from '../../store/slices/store.slice';
import { useState } from 'react';
import { ContextMenu } from '../ContextMenu';

export const MainMenu = (props) => {

  const parentId = props.parent | 0;
  const items = useSelector(createFolder);
  const arr = findParents(items.payload.todos, parentId).reverse();

  const [showContextmenu, setShowContextmenu] = useState(false);
  const [isFolder, setIsFolder] = useState(false);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);

  function handleContextMenu(e) {
    e.preventDefault();
    setPageX(e.pageX > 1350 ? 1350 : e.pageX);
    setPageY(e.pageY > 700 ? 700 : e.pageY);
    if (e.target.className === 'folder' || e.target.className === 'folder-item') setIsFolder(true);
    else setIsFolder(false);
    if (!showContextmenu) setShowContextmenu(true);
    else {
      setShowContextmenu(false);
    }
  }

  function handleContextMenuClick(e) {
    setShowContextmenu(false);
  }

  return (
    <div className='main-menu' onContextMenu={(e) => handleContextMenu(e)} onClick={(e) => handleContextMenuClick(e)}>
      <div className='main-menu__wrapper'>
        <div className='breadcrumps'>
          {arr.map((item) => {
            return <span key={item.id}>/ {item.name}</span>
          })}
        </div>
        <div className='folders__container'>
          {items.payload.todos.map((item) => {
            return item.parentId === parentId ? 
            <Folder key={item.id} folder={item}></Folder> : ''
          })}
        </div>
      </div>
      {showContextmenu ? <ContextMenu pageX={pageX} pageY={pageY} isFolder={isFolder} /> : <></>}
    </div>
  )
}

function findParents(items, parentId) {
  function toArray(items, parentId) {
    if (parentId !== 0) {
      arr.push(items.find((item) => item.id === parentId));
      return toArray(items, arr[arr.length - 1].parentId)
    }
    return;
  }

  const arr = [];
  toArray(items, parentId);
  return arr;
}