import React from 'react';
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header(props) {
    return (
        <dev>
            {props.titile} {props.version}
     <Logo/>
     <HeaderMenu/>
        </dev>
    )
}

export default Header;
