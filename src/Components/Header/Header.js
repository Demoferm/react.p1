import React from 'react';
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header(props) {
    return (
        <div>
            <p className='header-title'>Course: <strong>{props.titile}</strong> | <em>version: {props.version} </em></p>
     <Logo/>
     <HeaderMenu MenuItems = {props.MenuItems}/>
        </div>
    )
}

export default Header;
