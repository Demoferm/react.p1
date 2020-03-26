import React from 'react';
import HeaderMenuItem from "./HeaderMenuItem";

function HeaderMenu(props) {
    return(
    <HeaderMenuItem MenuItems = {props.MenuItems}/>
    )
}

export default HeaderMenu;
