import React from 'react';
import {Line} from 'react-chartjs-2';



export default function ResultsGraph(props) {

    console.log(props);
    const state = {
    labels: ['January', 'February', 'March',
            'April', 'May'],
    datasets: [
        {
        label: 'Mood',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: props.journals.map(j => j.score)
        }
    ]
    }
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'How Your Mood Trends',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
}