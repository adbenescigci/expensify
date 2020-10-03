import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export function Header ( { startLogout } ) {
    return (
        <header>
         <h1> Duzenleme</h1>
         <NavLink to='/' activeClassName='is-active' exact={true}> Ana Sayfa </NavLink>
         <NavLink to='/create' activeClassName='is-active'> Odeme Ekle </NavLink>
         <button onClick = {startLogout}> Logout </button>
        </header>
    )
}


const mapDispatchToProps = (dispatch) =>({
    startLogout : () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)



/*const Header = () => (
    <header>
     <h1> Duzenleme</h1>
     <NavLink to='/' activeClassName='is-active' exact={true}> Ana Sayfa </NavLink>
     <NavLink to='/create' activeClassName='is-active'> Ekle </NavLink>
     <NavLink to='/help' activeClassName='is-active'> Help Page </NavLink>
     
    </header>
)

export default Header;*/