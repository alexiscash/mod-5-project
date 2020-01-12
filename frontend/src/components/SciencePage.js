import React from 'react'

export default function SciencePage() {
    return (
        <div style={{textAlign: 'left', marginRight:'8em', marginLeft:'8em', marginTop: '2em'}}>
            <div style={{marginLeft: '5em', marginRight: '30em', marginBottom: '5em'}}>
                <h1 style={{fontSize: '3.5em', fontWeight: 'bold'}}>The science behind Moodpath</h1>
                <p style={{fontSize: '1.6em'}}>Numerous studies have shown: Mobile apps can help detecting mental health disorders and increase well-being. Together with several well-known universities and high-level partners, we started our own research projects in order to validate and constantly improve our digital product Moodpath.</p>
            </div>
            <div style={{display: 'flex'}}>
                <img src='https://mymoodpath.com/wp-content/themes/moodpath/img/science/science_box_1_en.gif' alt='sooop' />
                <div style={{display: 'inline', marginTop: '5em', marginLeft: '2em', marginRight: '7.5em'}}>
                    <h2>Moodpath is being developed and validated in collaboration with scientists</h2>
                    <p style={{fontSize: '1.2em'}}>Moodpath is based on the concept of cognitive behavioral therapy and was developed with experienced therapists and doctors. Additionally, researchers from the fields of psychology and psychotherapy conduct clinical studies to continuously validate the app.</p>

                </div>
            </div>
            <div style={{display: 'flex', marginTop: '5em'}}>
                <div style={{display: 'inline', marginTop: '8.5em'}}>
                    <h2>We believe in the importance of innovative and interactive product design</h2>
                    <p style={{fontSize: '1.2em'}}>Not only do we validate Moodpath from its professional and technical point of view, we also make sure that it is easily integrated into the everyday life of the users. To achieve that, we work closely with design and product experts and listen carefully to the feedback of users, patients and therapists.</p>
                </div>
                <img src='https://mymoodpath.com/wp-content/themes/moodpath/img/science/science_box_2_en.gif' alt='cunt' />
            </div>
            
        </div>
    )
}