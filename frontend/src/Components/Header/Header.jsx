import React from 'react'
import classes from '../Header/header.module.css'
import { Link } from 'react-router-dom';
function Header() {
  const user ={
    name:'jhon'
  };

  const cart = {
    totalCount:10,
  }
  const logout = () =>{}
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Link to='/' className={classes.logo}>
          Your logo
        </Link>
        <nav>
          <ul>
            {
              user?(
            
            <li className={classes.menu_container}>
              <Link to='/profile'>
                {user.name}
              </Link>
              <div className={classes.menu}>
                <Link to='/profile'>Profile</Link>
                <Link to='/orders'>Orders</Link>
                <a onClick={logout}>Logout</a>
              </div>
            </li>
            ):(            <Link to='/login'>Login</Link>
          )}
          <li>
            <Link to='/cart'>Cart
            {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
            </Link>
          </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header