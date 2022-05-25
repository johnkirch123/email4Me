import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../features/auth/authSlice';
import Payments from './Payments';

const Header = () => {
  const user = useSelector(selectUser);

  const renderContent = () => {
    switch (user) {
      case undefined:
        return;
      case '':
        return (
          <li>
            <a href='/auth/google'>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key='1'>
            <Payments />
          </li>,
          <li key='3' style={{ margin: '0 10px' }}>
            Credits: {user.credits}
          </li>,
          <li key='2'>
            <a href='/api/logout'>Logout</a>
          </li>
        ];
    }
  };

  return (
    <div className='navbar-fixed header'>
      <nav>
        <div className='nav-wrapper light-blue darken-4 z-depth-3'>
          <Link to={user ? '/surveys' : '/'} className='left brand-logo'>
            Email4Me
          </Link>
          <ul className='right'>{renderContent()}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
