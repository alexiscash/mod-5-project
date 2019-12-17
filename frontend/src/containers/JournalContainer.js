import React from 'react';
import JournalPage from '../components/JournalPage';
import Calender from '../components/Calender';

export default class JournalContainer extends React.Component {
    render() {
        return (
            <div>
                <JournalPage />
                <Calender />
            </div>
        );
    }
}