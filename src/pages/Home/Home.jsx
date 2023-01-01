import './home.css';

import { Header } from '../../components/header/Header';
import { MainMenu } from '../../components/mainMenu/MainMenu';
import { Sidebar } from '../../components/sideMenu/Sidebar';

export function Home() {

  const parent = 0;

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