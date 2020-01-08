import React from 'react';
import pic1 from '../assets/phone_img_1.png'
import pic2 from '../assets/phone_img_2.png'
import pic3 from '../assets/phone_img_3.png'
import pic4 from '../assets/phone_img_4.png'
import pic5 from '../assets/phone_img_5.png'

export default function HomePage(props) {
    const imgStyle ={
        padding: '0.2em',
        width: '12em',
        
    }
    return (
        <div style={{textAlign: 'left', marginLeft: '8em', marginRight: '8em'}}>
            <h1 style={{textAlign: 'center'}}>Home</h1>
            <h2 style={{marginBottom: '2em', marginLeft: '2em'}}>Welcome, {localStorage.username}</h2>
            <div className="first" style={{display: 'flex', marginRight: '10em', marginBottom: '2em', marginLeft: '2em'}}>
                <div style={{display: 'inline', paddingLeft: '5em'}}>
                    <img height='350em' src={pic1} alt='dope' />
                </div>
                <div style={{display: 'inline', marginLeft: '8em'}}>
                    <h1 style={{fontSize: '3em'}}>Your mental health companion</h1>
                    <p style={{fontSize: '1.2em'}}>If you're struggling with depression or anxiety, Moodpath is the leading mental health app to guide you toward emotional well-being.</p>
                    <a href='https://track.tenjin.io/v0/click/hmb8vv7ZYKtvYFpvPUsH8P'><img style={imgStyle} src='https://mymoodpath.com/wp-content/themes/moodpath/img/logos/appstore_en.png' alt='super dope' /></a>
                    <img style={imgStyle} src='https://mymoodpath.com/wp-content/themes/moodpath/img/logos/googleplay_en.png' alt='super duper dope' />
                </div>
            </div>
            <div style={{marginTop: '5em', marginRight: '50em', marginLeft: '2em'}}>
                <img height="500em" src={pic2} alt='doop' />
                <h2>Your Mood Journal</h2>
                <p style={{fontSize: '1.2em'}}>Track your emotional state in relation to other areas in your life to detect patterns and identify areas that can improve.</p>
            </div>
            <div style={{marginLeft: '40em', marginRight: '10em'}}>
                <img height='500em' src={pic3} alt='duper' />
                <h2>The Right Questions</h2>
                <p style={{fontSize: '1.2em'}}>As a personalized mental health companion, Moodpath checks on you three times a day with questions that "learn" from your responses. These questions generate Insights and other resources most relevant to your emotional health.</p>
            </div>
            <div style={{marginRight: '50em'}}>
                <img height='500em' src={pic4} alt='sus' />
                <h2>Regular Mental Health Reports</h2>
                <p style={{fontSize: '1.2em'}}>By answering questions and recording your mood, you'll receive regular mental health reports detailing your symptoms and providing a synopsis of your emotional state.</p>
            </div>
            <div style={{marginLeft: '40em', marginRight: '10em'}}>
                <img height='500em' src={pic5} alt='soup' />
                <h2>In-Depth Statistics</h2>
                <p style={{fontSize: '1.2em'}}>Moodpath's statistical views provide snapshots of your mood over time. You can quickly see which emotions you tend to feel when and which situations helped cause them.</p>
            </div>
            
        </div>
    )
}