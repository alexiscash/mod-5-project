import React from 'react';
import JournalPage from '../components/JournalPage';
import Calender from '../components/Calender';

export default function JournalContainer(props) {
    return (
        <div>
            <Calender />
            <JournalPage journals={props.journals}/>
        </div>
    )
}