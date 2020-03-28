import React from 'react';
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header(props) {
    return (
        <dev>
            | Course: {props.titile} | <em>version: {props.version} </em>|
     <Logo/>
     <HeaderMenu MenuItems = {props.MenuItems}/>
        </dev>
    )
}

export default Header;
