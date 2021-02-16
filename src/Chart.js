import React from 'react';
import { Line, Bar, Pie, Doughnut, Radar, Polar } from 'react-chartjs-2';
import cancelSvg from './assets/svg/cancel.svg';
import plusSvg from './assets/svg/plus.svg';
import minusSvg from './assets/svg/remove.svg'


const defaultData  =  {
    Line: {
        label: 'Test data',
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        bg: '#949ca8'
      },
    Bar: {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        bg: '#949ca8'
    },
	Pie: {
        labels: ['Red', 'Green', 'Yellow'],
	    datasets: [
            {
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
	    ],
        bg: '#ababab'
    },
    Doughnut: {
        labels: ['Red', 'Green', 'Yellow'],
	    datasets: [
            {
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
	    ],
        bg: '#ababab'
    },
    Radar: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        bg: '#949ca8',
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      Polar: {
        datasets: [
          {
            data: [11, 16, 7, 3, 14],
            backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
            label: 'My dataset' // for legend
          }
        ],
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
      },
};
  
  

export default function Chart({ data, setCharts, chartType, id, addNewChart, deleteChart, removeChart }) {
    
    
  const getChart = (type, data) => {
      console.log(data)
    switch(type) {
        case 'Line': 
            return <Line height={75} width={150} data={{...data, datasets: data.datasets.map((el, i) => ({...el, label: 'Test data ' + i}))}}/>
        case 'Bar': 
            return <Bar data={{...data, datasets: data.datasets.map((el, i) => ({...el, label: 'Test data ' + i}))}}/>
        case 'Pie': 
            return <Pie data={{...data, datasets: data.datasets.map((el, i) => ({...el, label: 'Test data ' + i}))}} />
        case 'Doughnut':
            return <Doughnut data={{...data, datasets: data.datasets.map((el, i) => ({...el, label: 'Test data ' + i}))}}/>
        case 'Radar':
            return <Radar data={{...data, datasets: data.datasets.map((el, i) => ({...el, label: 'Test data ' + i}))}}/>
        case 'Polar':
            return <Polar data={{...data, datasets: data.datasets.map((el, i) => ({...el, label: 'Test data ' + i}))}}/>
        default:
    }
}
    
    return (
        <div className='widget-container'>
            <div className='widget-container__close' onClick={() => removeChart(id)}>
                <img src={cancelSvg} alt='close'/>
            </div>
            <div className='widget-container__buttons'>
                <div onClick={() => addNewChart(chartType, id)}>
                    <img style={{width: 10, height: 10}} src={plusSvg} alt='add'/>
                </div>
                <div onClick={() => deleteChart(chartType, id)} style={{backgroundColor: defaultData[chartType].bg}}>
                    <img style={{width: 10, height: 10}} src={minusSvg} alt='remove'/>
                </div>
            </div>
            <div>
                {getChart(chartType, data)}
            </div>
        </div>
    )
}