import React, { useState, useRef, useEffect } from 'react';
import downArrow from './assets/svg/down-arrow.svg';
import upArrow from './assets/svg/up-arrow.svg';

const charts = [
    'Line',
    'Bar',
    'Pie',
    'Doughnut',
    'Radar',
    'Polar'
]

export default function SelectChart({ setCharts, chart }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const selectTrigger = () => {
        setOpen(!open)
    }

    const selectHandler = (type, id) => {
        console.log(id, chart)
        setCharts((prc) => ([...prc, {type, id: id + prc.length}]));
      }

    const blurHandler = (event)  => {
        if (event.currentTarget.contains(event.relatedTarget)) return;
        setOpen(false);
    }

    useEffect(() => {
        ref.current && ref.current.focus();
      }, [open]);

    return (
        <div style={{width: 250, position: 'relative'}}>
            <div style={{width: '100%'}}>
                <div onClick={selectTrigger}style={{ cursor: 'pointer', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #949ca8', borderRadius: 5}}>
                    <span>
                        {chart[chart.length-1]?.type || 'Select Chart'}
                    </span>
                <div >
                    <img style={{width: 10, height: 10,}} src={open ? upArrow : downArrow} alt='arrow bottom'/>
                </div>
                </div>
                {open 
                    && 
                    <div style={{border: '1px solid #949ca8', borderRadius: 5, outline: 'none', position: 'absolute',right: '0px', width: '100%', maxHeight: '200px', overflow: 'auto'}} ref={ref} onBlur={blurHandler} tabIndex={1}>
                        {charts.map((el, key) => <p key={key} onClick={() => selectHandler(el, key)} className='selectItem' style={{margin: '0px',padding: '5px 20px',  cursor: 'pointer'}}>{el}</p>)}
                    </div>
                }
           </div>
        </div>
    )
}