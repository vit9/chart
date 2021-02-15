import React, { useState } from 'react';
import { Line, Bar, Pie, Doughnut, Radar, Polar } from 'react-chartjs-2';
import Generator from './helpers';
import cancelSvg from './assets/svg/cancel.svg';
import plusSvg from './assets/svg/plus.svg';
import minusSvg from './assets/svg/remove.svg'

const numberGenerator = new Generator('1234567890');
const colorGenerator = new Generator('1234567890abcdef');

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
  
  

export default function Chart({ data, setCharts, chartType, id }) {

  const [chartData, setChartData] = useState(data);
  
  const addNewChart = (type) => {
    let dataArray, dataSets, bgColor, bgColorArray, labels;
    switch(type) {
        case 'Line': 
                dataArray = new Array(10).fill().map(() => +numberGenerator.specificGenerator(2));
                bgColor = colorGenerator.specificGenerator(6)
                dataSets = {...defaultData[type], data: dataArray, borderColor: `#${bgColor}`, backgroundColor: `#${bgColor}`, label: defaultData[type].label + chartData.datasets.length};
                setChartData((prev) => ({...prev, datasets: [...prev.datasets.map((el) => ({...el, data: [...el.data]})), dataSets]}));
            return;
            
        case 'Bar': 
            dataArray = new Array(10).fill().map(() => +numberGenerator.specificGenerator(2));
            bgColor = colorGenerator.specificGenerator(6);
            dataSets = {...defaultData[type], data: dataArray, borderColor: `#${bgColor}`,  backgroundColor: `#${bgColor}33`, label: defaultData[type].label + chartData.datasets.length};
            setChartData((prev) => ({...prev, datasets: [...prev.datasets.map((el) => ({...el, data: [...el.data]})), dataSets]}));
            return;
        case 'Pie': 
            dataArray = new Array(7).fill().map(() => +numberGenerator.specificGenerator(3));
            bgColorArray = dataArray.map(() => `#${colorGenerator.specificGenerator(6)}`);
            labels = dataArray.map((_, i) => `Test data ${i+1}`)
            dataSets = {...defaultData[type], data: dataArray, hoverBackgroundColor: bgColorArray,  backgroundColor: bgColorArray};
            setChartData((prev) => ({...prev, labels: labels, datasets: [dataSets]}));
        return;
        case 'Doughnut': 
            dataArray = new Array(7).fill().map(() => +numberGenerator.specificGenerator(3));
            bgColorArray = dataArray.map(() => `#${colorGenerator.specificGenerator(6)}`);
            labels = dataArray.map((_, i) => `Test data ${i+1}`)
            dataSets = {...defaultData[type], data: dataArray, hoverBackgroundColor: bgColorArray,  backgroundColor: bgColorArray};
            setChartData((prev) => ({...prev, labels: labels, datasets: [dataSets]}));
        return;
        case 'Radar': 
            dataArray = new Array(10).fill().map(() => +numberGenerator.specificGenerator(2));
            bgColor = colorGenerator.specificGenerator(6);
            dataSets = {...defaultData[type], data: dataArray, borderColor: `#${bgColor}`,  backgroundColor: `#${bgColor}`, label: 'Test Data' + chartData.datasets.length};
            console.log(defaultData[type].label, chartData.datasets)
            setChartData((prev) => ({...prev, datasets: [...prev.datasets.map((el) => ({...el, data: [...el.data]})), dataSets]}));
        return;
        case 'Polar': 
            dataArray = new Array(7).fill().map(() => +numberGenerator.specificGenerator(3));
            bgColorArray = dataArray.map(() => `#${colorGenerator.specificGenerator(6)}`);
            labels = dataArray.map((_, i) => `Test data ${i+1}`)
            dataSets = {...defaultData[type], data: dataArray, backgroundColor: bgColorArray};
            setChartData((prev) => ({...prev, labels: labels, datasets: [dataSets]}));
        return;
        default:
    }
  
  }

  const deleteChart = (type) => {
    if(type === 'Pie' || type === 'Doughnut') return;
    setChartData((prev) => ({...prev, datasets: prev.datasets.filter((el, i) => prev.datasets.length - 1 !== i)}))
  }

    const getChart = (type) => {
        switch(type) {
            case 'Line': 
                return <Line data={chartData}/>
            case 'Bar': 
                return <Bar data={chartData}/>
            case 'Pie': 
                return <Pie data={chartData}/>
            case 'Doughnut':
                return <Doughnut data={chartData}/>
            case 'Radar':
                return <Radar data={chartData}/>
            case 'Polar':
                return <Polar data={chartData}/>
            default:
        }
    }

    const removeChart = (id) => {
        setCharts((prc) => {
            console.log(prc, id)
            return (
                prc.filter((ch) => ch.id !== id)
            )
        })
    }
    
    return (
        <div style={{width: '33%', minWidth: '300px', maxWidth: '500px', padding: 30, borderRadius: 10, backgroundColor: '#354255', margin: 25, position: 'relative'}}>
            <div style={{width: 10, height: 10, position: 'absolute', top: 0, right: 10, cursor: 'pointer'}} >
                <img src={cancelSvg} alt='close'/>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div onClick={() => addNewChart(chartType)} style={{cursor: 'pointer', width: 20, height:20, borderRadius: 5, backgroundColor: '#949ca8', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: 10, height: 10}} src={plusSvg} alt='add'/>
                </div>
                <div onClick={() => deleteChart(chartType)} style={{cursor: 'pointer', marginLeft: 10, width: 20, height:20, borderRadius: 5, backgroundColor: defaultData[chartType].bg,  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: 10, height: 10}} src={minusSvg} alt='remove'/>
                </div>
            </div>
            <div>
                {getChart(chartType)}
            </div>
        </div>
    )
}