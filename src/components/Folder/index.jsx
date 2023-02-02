import './style.scss';

import { useNavigate } from 'react-router-dom';

export function Folder(props) {

  const item = props.folder;
  const navigate = useNavigate();

  return(
    <div className='folder' onDoubleClick={() => navigate(`/${item.id}`)}>
      <p className='folder-item'>{item.name}</p>
    </div>
  )
}