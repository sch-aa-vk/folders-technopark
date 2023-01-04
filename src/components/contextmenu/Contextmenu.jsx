import './contextmenu.css';

export const Contextmenu = ({pageX, pageY, isFolder}) => {
  return (
    <nav className='contextmenu' style={{top: `${pageY}px`, left: `${pageX}px`}}>
      <ul>
        <li>Create</li>
        {!isFolder ? <></> :
          <>
          <li>Delete</li>
          <li>Rename</li>
          </>
        }
      </ul>
    </nav>
  )
}