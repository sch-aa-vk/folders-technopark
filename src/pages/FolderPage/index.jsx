import './style.scss';

import { useParams } from 'react-router-dom';
import { MainMenu } from '../../layouts/MainMenu';
import { Sidebar } from '../../layouts/SideMenu';

export const FolderPage = () => {

  const { folderId } = useParams() || 0;
  const parent = +folderId;

  return (
    <>
      <div className='body'>
        <Sidebar parent={parent}/>
        <MainMenu parent={parent}/>
      </div>
    </>
  )
}