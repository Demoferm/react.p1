import React from 'react';


function Content(props) {
    return (<div>
        <h1 className='h1'>Programming Academy in Silicon Valley</h1>
        <h2>What is Lorem Ipsum?</h2>
        <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Enter your name:<input type='text' id='name' color='red'/>
            <button onClick={() => {
                props.onButtonClick(document.getElementById('name').value)
            }}>OK
            </button>
            <button onClick={() => {
                document.getElementById('name').value='';
            }}>CANCEL
            </button>
        </p>
        <p>{props.MenuButtons.map(el => <button key={el} onClick={() => {
            props.onButtonClick(el)
        }}>{el}</button>)}</p>
    </div>)
}

export default Content;
