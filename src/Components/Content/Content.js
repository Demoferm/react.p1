import React from 'react';
import Logo from "../Header/Logo";


function Content(props) {
    return (
        <div className='row'>
            <div className='col-4'>
                <Logo/>
            </div>
            <div className='col-8'>
                <h1 className='h1'>Programming Academy in Silicon Valley</h1>
                <h2>What is Lorem Ipsum?</h2>
                <p className='text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>
            <div className='col-4' align='right'>
                <p>Enter your name:<input type='text' id='name' color='red' placeholder='write here...'/>
                    <button onClick={() => {
                        props.onButtonClick(document.getElementById('name').value)
                    }}>OK
                    </button>
                    <button onClick={() => {
                        document.getElementById('name').value = '';
                    }}>CANCEL
                    </button>
                </p>
            </div>
            <div className='col-8'>
                <p>{props.MenuButtons.map(el => <button key={el} onClick={() => {
                    props.onButtonClick(el)
                }}>{el}</button>)}</p>
            </div>
        </div>
    )
}

export default Content;
