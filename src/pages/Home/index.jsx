import './style.scss';

import { MainMenu } from '../../layouts/MainMenu';
import { Sidebar } from '../../layouts/SideMenu';

export const Home = () => {

  const parent = 0;

  return (
    <>
      <div className='body'>
        <Sidebar parent={parent}/>
        <MainMenu parent={parent}/>
      </div>
    </>
  )
}