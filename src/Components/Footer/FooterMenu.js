import React from 'react';
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu(props) {
    return (
    <FooterMenuItem MenuItems = {props.MenuItems}/>
    )
}

export default FooterMenu;
