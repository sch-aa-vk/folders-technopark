import './folder.css';

import { useNavigate } from 'react-router-dom';

export function Folder(props) {

  const item = props.folder;
  const navigate = useNavigate();

  return(
    <div className='folder' onDoubleClick={() => navigate(`/${item.id}`)}>
      <p>{item.name}</p>
    </div>
  )
}