import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Folder } from './pages/Folder/Folder';


export const App = () => {

  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:folderId" element={<Folder/>}/>
      </Routes>
    </Provider>
  );
}