import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Header } from './components/header/Header';
import { MainMenu } from './components/mainMenu/MainMenu';
import { Sidebar } from './components/sideMenu/Sidebar';

export function App() {

  const parent = 0;

  return (
    <Provider store={store}>
      <Header/>
      <div className='body'>
        <Sidebar parent={parent}/>
        <MainMenu parent={parent}/>
      </div>
    </Provider>
  );
}