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
    return (
        <div className="App">
            <Header MenuItems = {MenuItems} titile = {x} version = '0.0.3'/>
            <Content/>
            <Footer MenuItems = {MenuItems}/>
        </div>
    );
}

export default App;
