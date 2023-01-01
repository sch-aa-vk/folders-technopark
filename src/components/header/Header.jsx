import './header.css';

export function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h2 className='header__title'>My Drive</h2>
        <div className='header__avatar'></div>
      </div>
    </header>
  )
}