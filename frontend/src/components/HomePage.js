import React from 'react';

export default function HomePage(props) {
    return (
        <div>
            {/* {console.log('this is my history', props.history)} */}
            <h1>Welcome, {localStorage.username}</h1>
        </div>
    )
}