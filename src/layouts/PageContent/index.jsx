import './style.scss';

import { useSelector } from 'react-redux';
import { Folder } from '../../components/Folder';
import { createFolder } from '../../store/slices/store.slice';
import { Breadcrumps } from '../../components/Breadcrumps';

export const PageContent = (props) => {

  const parentId = props.parent || null;
  const items = useSelector(createFolder);
  const arr = findParents(items.payload.folders, parentId).reverse();

  return (
    <div className='main-menu'>
      <div className='main-menu__wrapper'>
        <Breadcrumps items={arr}/>
        <div className='folders__container'>
          {items.payload.folders.map((item) => {
            return item.parentId === parentId ? 
            <Folder key={item.id} folder={item} /> : ''
          })}
        </div>
      </div>
    </div>
  )
}

function findParents(items, parentId) {
  function toArray(items, parentId) {
    if (parentId !== null) {
      arr.push(items.find((item) => item.id === parentId));
      return toArray(items, arr[arr.length - 1].parentId)
    }
    return;
  }

  const arr = [];
  toArray(items, parentId);
  return arr;
}