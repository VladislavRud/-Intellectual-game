import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/User';
import './navbar.css';

function Navbar() {
  const { user, handleLogout } = useContext(UserContext);

  const renderLogout = () => (
    <span className="logout" onClick={handleLogout}>
      Logout
    </span>
  );

  console.log(user);

  return (
    <div className="sticky__t-0">
      <div className="navbar">
        <div>
          <Link to="/">Меню</Link>
        </div>
        <div>
          {user ? (
            <>
              <Link to="/posts">Тут коты</Link>
            </>
          ) : (
            <Link to="/auth">Тут коты</Link>
          )}
          {user ? (
            <>
              <Link to="/shock">Проверь свой ум</Link>
              {renderLogout()}
            </>
          ) : (
            <Link to="/auth">Регистрация</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
