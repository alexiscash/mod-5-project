import React from 'react';

export default function JournalPage(props) {
    return (
        <div>
            <ul>
                <li>{localStorage.journals[0].name}</li>
            </ul>
        </div>
    )
}