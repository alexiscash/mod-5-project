import React from 'react';
import ResultsGraph from '../components/ResultsGraph'

export default function ResultsContainer(props) {
    // console.log(props);

    return (
        <div>
            <h1>Results</h1>
            <ResultsGraph journals={props.journals} dates={props.dates} />
            </div>
    )
}