import React from 'react';

function HeaderMenuItem(props) {
    return (
        <p align='right'>
            {props.MenuItems.map((el,i) => <a href="#"><li key={i}>{el}</li></a>)}
        </p>

    )
}

export default HeaderMenuItem;
