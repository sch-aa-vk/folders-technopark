import './folder.css';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { MainMenu } from '../../components/mainMenu/MainMenu';
import { Sidebar } from '../../components/sideMenu/Sidebar';

export function Folder() {

  const { folderId } = useParams();
  const parent = +folderId;

  return (
    <>
      <Header/>
      <div className='body'>
        <Sidebar parent={parent}/>
        <MainMenu parent={parent}/>
      </div>
    </>
  )
}