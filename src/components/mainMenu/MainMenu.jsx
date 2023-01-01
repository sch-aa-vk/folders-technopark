import './mainMenu.css';

import { useSelector } from 'react-redux';
import { Folder } from '../folder/Folder';
import { createFolder } from '../../store/slices/store.slice';

export function MainMenu(props) {

  const parentId = props.parent;
  const items = useSelector(createFolder);
  const arr = findParents(items.payload.todos, parentId).reverse();

  return (
    <div className='main-menu'>
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