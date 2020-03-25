import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
     const x = 'Test!';
     const MenuItems = [1,2,3,4];
    return (
        <div className="App">
            <Header titile = {x} version = '0.0.1'/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
