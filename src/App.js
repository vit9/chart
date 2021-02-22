import React, { useState } from 'react';
import mockData from './mockData';

import Generator from './helpers';

import Chart from './Chart';
import SelectChart from './selectChart';

const numberGenerator = new Generator('1234567890');
const colorGenerator = new Generator('1234567890abcdef');


function App() {

  const [chartData, setChartData] = useState([{
    type: 'Bar',
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,1)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,1)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
  },
  {
    type: 'Pie',
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100, ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  }
]);
 
  const addNewChart = (type, id) => {
    let dataArray, dataSets, bgColor, bgColorArray, labels, d;
    switch(type) {
        case 'Line': 

              if(chartData.find((el) => el.id === id).datasets.length > 2) return; 
                dataArray = new Array(10).fill().map(() => +numberGenerator.specificGenerator(2));
                bgColor = colorGenerator.specificGenerator(6)
                dataSets = {...mockData[type].datasets[0], data: dataArray, borderColor: `#${bgColor}`,  backgroundColor: `#${bgColor}`};
                d = chartData.map((ch) => ch.id === id ? ({...ch, datasets: [...ch.datasets.map((el) => ({...el, data: [...el.data]})), dataSets]}) : ch)
                setChartData(d);
            return;
            
        case 'Bar': 
        if(chartData.find((el) => el.id === id).datasets.length > 2) return; 
            dataArray = new Array(7).fill().map(() => +numberGenerator.specificGenerator(2));
            bgColor = colorGenerator.specificGenerator(6);
            dataSets = {...mockData[type].datasets[0], data: dataArray, borderColor: `#${bgColor}`,  backgroundColor: `#${bgColor}`};
            d = chartData.map((ch) => ch.id === id ? ({...ch, datasets: [...ch.datasets.map((el) => ({...el, data: [...el.data]})), dataSets]}) : ch)
            setChartData(d);
            return;
        case 'Pie':
            dataArray = new Array(3).fill().map(() => +numberGenerator.specificGenerator(3));
            bgColorArray = dataArray.map(() => `#${colorGenerator.specificGenerator(6)}`);
            labels = dataArray.map((_, i) => `Test data ${i+1}`)
            dataSets = {...mockData[type].datasets[0], data: dataArray, hoverBackgroundColor: bgColorArray,  backgroundColor: bgColorArray};
            d = chartData.map((ch) => ch.id === id ? ({...ch, datasets: [dataSets], labels}) : {...ch, labels});
            setChartData(d);

        return;
        case 'Doughnut': 
            dataArray = new Array(3).fill().map(() => +numberGenerator.specificGenerator(3));
            bgColorArray = dataArray.map(() => `#${colorGenerator.specificGenerator(6)}`);
            labels = dataArray.map((_, i) => `Test data ${i+1}`)
            dataSets = {...mockData[type].datasets[0], data: dataArray, hoverBackgroundColor: bgColorArray,  backgroundColor: bgColorArray, labels};
            d = chartData.map((ch) => ch.id === id ? ({...ch, datasets: [dataSets], labels}) : {...ch, labels});
            setChartData(d);
        return;
        case 'Radar':
          if(chartData.find((el) => el.id === id).datasets.length > 2) return; 
            dataArray = new Array(3).fill().map(() => +numberGenerator.specificGenerator(2));
            bgColor = colorGenerator.specificGenerator(6);
            dataSets = {...mockData[type].datasets[0], data: dataArray, borderColor: `#${bgColor}`,  backgroundColor: `#${bgColor}`};
            d = chartData.map((ch) => ch.id === id ? ({...ch, datasets: [...ch.datasets.map((el) => ({...el, data: [...el.data]})), dataSets]}) : ch)
            setChartData(d);
        return;
        case 'Polar': 
            dataArray = new Array(3).fill().map(() => +numberGenerator.specificGenerator(3));
            bgColorArray = dataArray.map(() => `#${colorGenerator.specificGenerator(6)}`);
            labels = dataArray.map((_, i) => `Test data ${i+1}`)
            dataSets = {...mockData[type].datasets[0], data: dataArray, backgroundColor: bgColorArray, labels};
            d = chartData.map((ch) => ch.id === id ? ({...ch, datasets: [dataSets]}) : ch);
            setChartData(d);
        return;
        default:
    }
  
  }

  const removeChart = (id) => {
    setChartData((prc) => {
        return (
            prc.filter((ch) => ch.id !== id)
        )
    })
}

  const deleteChart = (type, id) => {
    if(type === 'Pie' || type === 'Doughnut') return;
    const d = chartData.map((ch) => ch.id === id ? ({...ch, datasets: ch.datasets.filter((el, i) => ch.datasets.length - 1 !== i)}) : ch)
    setChartData(d)
  }


  return (
    <div className="App">
      <SelectChart chartData={chartData} setChartData={setChartData}/>
      <div className='main-container'>
        {chartData.map(({ type, id, ...data }, key) => <Chart key={key} id={id} chartType={type} addNewChart={addNewChart} data={data} removeChart={removeChart} deleteChart={deleteChart}/>)}
      </div>
    </div>
  );
}

export default App;
