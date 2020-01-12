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

    const emotes ={
      veryBad: {
        num: props.journals.filter(j => j.score === 1).length,
        img: 'https://f1.pngfuel.com/png/1013/287/686/happy-face-emoji-emoji-domain-emoticon-smiley-sticker-iphone-smirk-yellow-png-clip-art.png'
      },
      bad: {
        num: props.journals.filter(j => j.score === 2).length,
        img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/33/slightly-frowning-face_1f641.png'
      },
      moderate: {
        num: props.journals.filter(j => j.score === 3).length,
        img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Neutral_Face_Emoji_large.png?v=1571606037'
      },
      good: {
        num: props.journals.filter(j => j.score === 4).length,
        img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1571606090'
      },
      veryGood: {
        num: props.journals.filter(j => j.score === 5).length,
        img: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face-with-sunglasses.png'
      }
    }

    const state = {
      labels: dates,
      datasets: [
          {
          label: 'Mood',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#03AEB5',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: props.journals.map(j => j.score)
          }
      ]
    }
    return (
      <div>
      <div style={{margin: '5em', display: 'flex'}}>
        <div style={{width: '45em', margin: '2em'}}>
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
        <div style={{width: '45em', margin: '2em'}}>
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
        </div>
        <div style={{display: 'flex'}}>
          <div style={{postition: 'static', textAlign: 'left', marginLeft: '15em', width: '25em'}}>
            <h2 style={{fontSize: '4em', color: '#03AEB5'}}>{props.journals.length}</h2>
            <p style={{fontSize: '1.2em', marginLeft: '0.2em'}}>Answers</p>
          </div>
          <div style={{position: 'relative', left: '5em', width: '30em'}}>
            <h2>Emotions</h2>
            <div className='veryBad' style={{width: '6em', height: '7.5em', display: 'inline-block', position: 'relative', left: '0'}}>
              <p style={{textAlign: 'center', fontSize: '1.2em', color: '#03AEB5'}}>{emotes.veryBad.num}</p>
              <img width='40px' align='left' style={{borderRadius: '50%', marginLeft: '1em'}} src={emotes.veryBad.img} alt='very bad' />
            </div>
            <div className='bad' style={{width: '6em', height: '7.5em', display: 'inline-block'}}>
              <p style={{textAlign: 'center',fontSize: '1.2em', color: '#03AEB5'}}>{emotes.bad.num}</p>
              <img width='40px' align='left' style={{borderRadius: '50%', marginLeft: '1em'}} src={emotes.bad.img} alt='bad' /> 
            </div>
            <div className='moderate' style={{width: '6em', height: '7.5em', display: 'inline-block'}}>
              <p style={{textAlign: 'center',fontSize: '1.2em', color: '#03AEB5'}}>{emotes.moderate.num}</p>
              <img width='40px' align='left' style={{borderRadius: '50%', marginLeft: '1em'}} src={emotes.moderate.img} alt='bad' /> 
            </div>
            <div className='good' style={{width: '6em', height: '7.5em', display: 'inline-block'}}>
              <p style={{textAlign: 'center',fontSize: '1.2em', color: '#03AEB5'}}>{emotes.good.num}</p>
              <img width='40px' align='left' style={{borderRadius: '50%', marginLeft: '1em'}} src={emotes.good.img} alt='bad' /> 
            </div>
            <div className='veryGood' style={{width: '6em', height: '7.5em', display: 'inline-block'}}>
              <p style={{textAlign: 'center',fontSize: '1.2em', color: '#03AEB5'}}>{emotes.veryGood.num}</p>
              <img width='40px' align='left' style={{borderRadius: '50%', marginLeft: '1em'}} src={emotes.veryGood.img} alt='bad' /> 
            </div>
            
          </div>
        </div>
      </div>
    );
}