import './style.scss';

import { useNavigate } from 'react-router-dom';

export function Folder({ folder }) {
  const navigate = useNavigate();

  return(
    <div className='folder' onDoubleClick={() => navigate(`/${folder.id}`)}>
      <p className='folder-item' data-folder={JSON.stringify(folder)}>{folder.name}</p>
    </div>
  )
}