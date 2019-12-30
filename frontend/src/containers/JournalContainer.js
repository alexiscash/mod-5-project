import React from 'react';
import JournalPage from '../components/JournalPage';
import Calender from '../components/Calender';
import AddQuestionModal from '../components/addQuestionModal'

export default class JournalContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            journals: [],
            q: []
        };
    }

    componentDidMount() {
        if (localStorage.token) {
            fetch(`http://localhost:3000/users/${localStorage.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            .then(res => res.json())
            .then(user => {
                this.setState({
                    q: user.q,
                    journals: user.journals
                })
            });
        }
    }

    postQuestion = (question, bool, score='') => {
        let affirmative = ''
        if (bool === 'ya') {
            affirmative = true;
        } else {
            affirmative = false;
        }

        fetch('http://localhost:3000/journals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: localStorage.id,
                date_id: 2,
                question_id: question.id,
                score: 4,
                affirmative
            })
        })
        .then(res => res.json())
        .then(thing => {
            this.setState({
                q: [...this.state.q, question],
                journals: [...this.state.journals, thing]
            })
        });
    }

    render() {
        // console.log(this.state);
        let arr = [];
        for (let i = 0; i < this.state.q.length; i++) {
            arr.push(<JournalPage q={this.state.q[i]} journal={this.state.journals[i]} key={this.state.q[i].id}/>)
        }
        return (
            localStorage.token ? 
                <div>
                <Calender {...this.state.journals}/>
                {/* <div class='four wide column'>{arr}</div> */}
                {arr}
                <AddQuestionModal thang={this.postQuestion}/>
             </div>
            :
                <div><h2>Please log in</h2></div>
            
            
        )
    }
   
}