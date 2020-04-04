import React, {useState} from 'react';
import Logo from "../Header/Logo";

function Content(props) {
    const [calcResult, setCalcResult] = useState('0')
    const [[minRange,maxRange], setRange] = useState([0,0])
    const ButtonClickCalc = (e) => {
        setCalcResult(+calcResult + +e);
    }
    let CalcArr=[];
    if (minRange<=maxRange && minRange>0 && maxRange>0 && maxRange <=100 && minRange <= 100)  {
        CalcArr = [];
        for (let i = minRange; i <= maxRange; i++)
        CalcArr.push(i);
    }

    const onChangeRangeMax = (e) => {
        setRange([minRange,e.target.value]);
    }
        const onChangeRangeMin = (e) => {
         // if (e.target.name=='upper')
            setRange([e.target.value,maxRange]);
         // if (e.target.name==='lower')
         //     setRange([minRange,e.target.value]);
    }

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
                <p>Enter your name:</p><p><input type='text' id='name' color='red' placeholder='write here...'/>
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
            <div align='center' className='col-8'>
                <p>{props.MenuButtons.map(el => <button key={el} onClick={() => {
                    props.onButtonClick(el)
                }}>{el}</button>)}</p>
                <div className='row'>
                    <div className='col-12'>
            <h2 align='center'>Calculator</h2>
                    </div>
                    <div className='col-12'>
                        <p align='center'>(Values have to be between 1 and 100)</p>
                    </div>
                    <div className='col-6'>
                <p align='right'> <input type='text' name='lower' placeholder='From' onChange={onChangeRangeMin}/></p>
                    </div>
                    <div className='col-6'>
                        <p align='left'> <input type='text' name='upper' placeholder='To' onChange={onChangeRangeMax}/></p>
                    </div>
                    <div align='right' className='col-4'>
                    <p>{CalcArr.reverse().map(el => <button key={-el} onClick={() => {
                    ButtonClickCalc(-el)
                    }}>-{el}</button>)}</p>
                    </div>
<div align='center' className='col-4'>
                <h1 >{calcResult}</h1>
</div>
                        <div align='left' className='col-4'>
                            <p>{CalcArr.reverse().map(el => <button key={el} onClick={() => {
                                ButtonClickCalc(el)
                            }}>+{el}</button>)}</p>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default Content;
