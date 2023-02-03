import '../style.scss';

import openModalWindow from '../../../utils';
import { deleteFolder } from '../../../store/slices/store.slice';
import { useAppDispatch } from '../../../store/store.hooks';
import { addToCart } from '../../../store/slices/cart.slice';

export const ContextMenuMain = ({pageX, pageY, isFolder}) => {
  const dispatch = useAppDispatch();

  return (
    <nav className='contextmenu' style={{top: `${pageY}px`, left: `${pageX}px`}}>
      <ul>
        {!isFolder ? 
          <li onClick={() => openModalWindow()}>Create</li> :
          <>
            <li onClick={() => {
              dispatch(addToCart(JSON.parse(isFolder)));
              dispatch(deleteFolder(JSON.parse(isFolder)));
            }}>Delete</li>
            <li>Rename</li>
          </>
        }
      </ul>
    </nav>
  )
}