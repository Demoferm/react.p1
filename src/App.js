import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
     const x = 'REACT!';
     const MenuItems = ['Courses','Cards','Group','Diary'];
    return (
        <div className="App">
            <Header MenuItems = {MenuItems} titile = {x} version = '0.0.2'/>
            <Content/>
            <Footer MenuItems = {MenuItems}/>
        </div>
    );
}

export default App;
