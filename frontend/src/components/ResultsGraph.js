import React from 'react';
import { Line, Bar } from 'react-chartjs-2';



export default function ResultsGraph(props) {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dates = props.dates.map(d => {
        if (d.month === 12) {
            return `${months[11]} ${d.date}`
        }
        return `${months[d.month]} ${d.date}`
    })

    const state = {
    labels: dates,
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
      localStorage.token ?

      <div style={{padding: '5em'}}>
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
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Mood',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      :
      <div style={{paddingTop:'2em'}}>
        <h2>Please Log In</h2>
      </div>
    );
}