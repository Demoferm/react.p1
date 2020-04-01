import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
    const x = 'REACT!';
    const MenuItems = [
        {
            name: 'One',
            url: '1'
        },
        {
            name: 'Two',
            url: '2'
        },
        {
            name: 'Three',
            url: '3'
        },
        {
            name: 'Four',
            url: '4'
        }];
    const MenuButtons =
        [
            '1 Button',
            '2 Button',
            '3 Button',
            '4 Button',
        ];

    const onButtonClick = (n) => {
        alert(n);
    }


    return (
        <div class="container">
            <Header MenuItems={MenuItems} titile={x} version='0.0.3'/>
            <Content MenuButtons={MenuButtons} onButtonClick={onButtonClick}/>
            <Footer MenuItems={MenuItems}/>
        </div>

    );
}

export default App;
