import React from 'react';
import ReactECharts from 'echarts-for-react';

function Chart() {
    const option = {
        xAxis: {
          type: 'category',
          data: ['12:00', '06:00', '12:00', '06:00']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 230, 40, 218, 57],
            type: 'line'
          }
        ]
      };

  return (
    <div>
      <ReactECharts option={option}/>
    </div>
  )
}

export default Chart;
