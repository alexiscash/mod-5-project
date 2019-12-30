import React from 'react';
import { Image, Modal } from 'semantic-ui-react'


export default function JournalPage(props) {
    // console.log(props)
    const a = props.journal.affirmative ? 'Yes' : 'No'
    const arr = ['very bad', 'bad', 'moderate', 'good', 'very good'];
    const score = arr[props.journal.score - 1];
    return (
        <Modal trigger={<div>
                            <div className="ui segments">
                            <div className="ui segment">
                                <p>{props.q.content}</p>
                            </div>
                            <div className="ui secondary segment">
                                <p>{a}</p>
                                <b>{score}</b>
                            </div>
                            </div>
                        </div>}>
        <Modal.Header>You answered {a}</Modal.Header>
        <Modal.Content image>
        <Image wrapped size='medium' src={props.q.img_url} />
        <Modal.Description>
            <p>{props.q.content}</p>
            <p>You were feeling <b>{score}</b></p>
        </Modal.Description>
        </Modal.Content>
        </Modal>
    )
}