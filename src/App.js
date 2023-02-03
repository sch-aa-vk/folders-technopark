import './App.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { FolderPage } from './pages/FolderPage';
import { Header } from './components/Header';
import { Sidebar } from './layouts/SideMenu';
import { Cart } from './pages/Cart';


export const App = () => {

  return (
    <Provider store={store}>
      <Header/>
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:folderId' element={<FolderPage/>}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </div>
    </Provider>
  );
}