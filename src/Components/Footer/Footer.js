import React from 'react';
import FooterMenu from "./FooterMenu";
import Contacts from "./Contacts";

function Footer(props) {
    return (
        <>
        <FooterMenu MenuItems = {props.MenuItems}/>
        <Contacts/>
        </>
);
}

export default Footer;
