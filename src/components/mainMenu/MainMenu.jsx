import React from 'react';
import './mainMenu.css';

import { useSelector } from 'react-redux';
import { Folder } from '../folder/Folder';
import { createFolder } from '../../store/slices/store.slice';

export function MainMenu(props) {

  const parentId = props.parent;
  const items = useSelector(createFolder);

  return (
    <div className='main-menu'>
      <div className='main-menu__wrapper'>
        {items.payload.todos.map((item) => {
          return item.parentId === parentId ? 
          <Folder name={item.name} key={item.id}></Folder> :
          <p key={item.id}>Nothing</p>
        })}
      </div>
    </div>
  )
}