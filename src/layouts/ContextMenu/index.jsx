import './style.scss';

import openModalWindow from '../../utils';

export const ContextMenu = ({pageX, pageY, isFolder}) => {
  return (
    <nav className='contextmenu' style={{top: `${pageY}px`, left: `${pageX}px`}}>
      <ul>
        {!isFolder ? 
          <li onClick={() => openModalWindow()}>Create</li> :
          <>
            <li>Delete</li>
            <li>Rename</li>
          </>
        }
      </ul>
    </nav>
  )
}