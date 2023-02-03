import '../style.scss';

import { useAppDispatch } from '../../../store/store.hooks';
import { deleteFromCart } from '../../../store/slices/cart.slice';
import { createFolder } from '../../../store/slices/store.slice';

export const ContextMenuCart = ({pageX, pageY, isFolder}) => {
  const dispatch = useAppDispatch();

  if (!isFolder) return null;
  return (
    <nav className='contextmenu' style={{top: `${pageY}px`, left: `${pageX}px`}}>
      <ul>
        <li onClick={() => {
          dispatch(deleteFromCart(JSON.parse(isFolder)));
        }}>Delete Forever</li>
        <li onClick={() => {
          dispatch(createFolder(JSON.parse(isFolder)));
          dispatch(deleteFromCart(JSON.parse(isFolder)));
        }}>Recover</li>
      </ul>
    </nav>
  )
}