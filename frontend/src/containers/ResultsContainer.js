import React from 'react';
import ResultsGraph from '../components/ResultsGraph'

export default function ResultsContainer(props) {
    console.log(props);

    return (
        <div>
            <p>this is the results container</p>
            <ResultsGraph journals={props.journals} />
            </div>
    )
}