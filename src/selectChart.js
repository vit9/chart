import React, { useState, useRef, useEffect } from 'react';
import downArrow from './assets/svg/down-arrow.svg';
import upArrow from './assets/svg/up-arrow.svg';
import mockData from './mockData';
import Generator from './helpers';

const idGenerator = new Generator('1234567890');

const charts = [
    'Line',
    'Bar',
    'Pie',
    'Doughnut',
    'Radar',
    'Polar'
]

export default function SelectChart({ chartData, setChartData }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const selectTrigger = () => {
        setOpen(!open)
    }

    const selectHandler = (type, id) => {
        setChartData((prc) => {
            console.log(mockData[type])
            return ([...prc, {type, id: idGenerator.specificGenerator(10), ...mockData[type]}])
        })
      }

    const blurHandler = (event)  => {
        if (event.currentTarget.contains(event.relatedTarget)) return;
        setOpen(false);
    }

    useEffect(() => {
        ref.current && ref.current.focus();
      }, [open]);

    return (
        <div className='p-10'>
            <div className='relative w-250'>
                <div className='select-wrapper f-width'>
                    <div onClick={selectTrigger} className='select-wrapper__input'>
                        <span>
                            {chartData[chartData.length-1]?.type || 'Select Chart'}
                        </span>
                        <div>
                            <img src={open ? upArrow : downArrow} alt='arrow bottom'/>
                        </div>
                    </div>
                    {open 
                        && 
                        <div className='select-wrapper__list' ref={ref} onBlur={blurHandler} tabIndex={1}>
                            {charts.map((el, key) => <p key={key} onClick={() => selectHandler(el, key)} className='select-wrapper__option'>{el}</p>)}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}