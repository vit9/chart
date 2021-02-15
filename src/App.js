import React, { useState } from 'react';
import mockData from './mockData';

import Chart from './Chart';
import SelectChart from './selectChart';


function App() {
  
  const [charts, setCharts] = useState([]);
 

  return (
    <div className="App">
      <SelectChart chart={charts} setCharts={setCharts}/>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {console.log(charts)}
        {charts.map(({ type, id }, key) => <Chart key={key} data={mockData[type]} chartType={type} setCharts={setCharts} id={id}/> )}
      </div>
    </div>
  );
}

export default App;
