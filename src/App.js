import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { FolderPage } from './pages/FolderPage';
import { Header } from './components/Header';


export const App = () => {

  return (
    <Provider store={store}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={"/:folderId"} element={<FolderPage/>}/>
      </Routes>
    </Provider>
  );
}