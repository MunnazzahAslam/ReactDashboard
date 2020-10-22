import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar } from 'victory';

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  
  const Chart = () => {
      return (
          <div>
             <VictoryBar/> 
          </div>
      )
  }
  
  export default Chart;