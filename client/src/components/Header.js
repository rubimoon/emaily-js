import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const checkLoginStatus = () => {
    switch (currentUser) {
      case undefined:
        return 'Loading...';
      case false:
        return (
          <li>
            <a href='/auth/google'>Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href='/api/logout'>Logout</a>
          </li>
        );
    }
  };
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/' className='left brand-logo'>
          Emaily
        </a>
        <ul className='right'>{checkLoginStatus()}</ul>
      </div>
    </nav>
  );
};

export default Header;
