import React from 'react';
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header(props) {
    return (
        <dev>
            <p>| Course: <strong>{props.titile}</strong> | <em>version: {props.version} </em>|</p>
     <Logo/>
     <HeaderMenu MenuItems = {props.MenuItems}/>
        </dev>
    )
}

export default Header;
