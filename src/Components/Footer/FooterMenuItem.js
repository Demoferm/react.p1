import React from 'react';

function FooterMenuItem(props) {
    return (<div>
        <p align='left'>
            {props.MenuItems.map((el,i) => <a href="#"><li key={i}>{el}</li></a>)}
        </p>
    </div>)
}

export default FooterMenuItem;
