import React from 'react';
import ResultsGraph from '../components/ResultsGraph'
import { Link } from 'react-router-dom'

export default function ResultsContainer(props) {
    // console.log(props);

    return (
        localStorage.token ?
        <div style={{marginTop: '2em'}}>
            <h1>Results</h1>
            <ResultsGraph journals={props.journals} dates={props.dates} />
        </div>
        :
        <div style={{marginTop:'2em'}}>
            <h1>Results</h1>
            <h2>Please <Link to='/login'>Log In</Link></h2>
        </div>
    )
}