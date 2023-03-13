import { Link } from 'react-router-dom';
import { DriveIcon } from '../../assets/DriveIcon';
import './style.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Link className='link-logo' to="/">
          <DriveIcon />
          <h2 className='link-logo__text'>My Drive</h2>
        </Link>
      </div>
    </header>
  );
};