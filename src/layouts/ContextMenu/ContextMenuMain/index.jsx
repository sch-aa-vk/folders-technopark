import '../style.scss';

import { deleteFolder } from '../../../store/slices/store.slice';
import { useAppDispatch } from '../../../store/store.hooks';
import { addToCart } from '../../../store/slices/cart.slice';

export const ContextMenuMain = ({pageX, pageY, isFolder}) => {

  const dispatch = useAppDispatch();

  return (
    <nav className='contextmenu' style={{top: `${pageY}px`, left: `${pageX}px`}}>
      <ul>
        {!isFolder ? 
          <li onClick={() => document.querySelector('.sidebar__wrapper').querySelector('.button').click()}>Create</li> :
          <>
            <li onClick={() => {
              dispatch(addToCart(JSON.parse(isFolder)));
              dispatch(deleteFolder(JSON.parse(isFolder)));
            }}>Delete</li>
            <li onClick={() => {
              document.querySelector('.sidebar__wrapper').querySelector('.transparent').dataset.folder = isFolder;
              document.querySelector('.sidebar__wrapper').querySelector('.transparent').click();
            }}>Rename</li>
          </>
        }
      </ul>
    </nav>
  )
}