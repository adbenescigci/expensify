import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <header>
         <h1> Duzenleme</h1>
         <NavLink to='/' activeClassName='is-active' exact={true}> Ana Sayfa </NavLink>
         <NavLink to='/create' activeClassName='is-active'> Odeme Ekle </NavLink>
         <NavLink to='/help' activeClassName='is-active'> Help </NavLink>
        </header>
    )
}



/*const Header = () => (
    <header>
     <h1> Duzenleme</h1>
     <NavLink to='/' activeClassName='is-active' exact={true}> Ana Sayfa </NavLink>
     <NavLink to='/create' activeClassName='is-active'> Ekle </NavLink>
     <NavLink to='/help' activeClassName='is-active'> Help Page </NavLink>
     
    </header>
)

export default Header;*/