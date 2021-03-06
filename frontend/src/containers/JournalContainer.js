import React from 'react';
import JournalPage from '../components/JournalPage';
import Calender from '../components/Calender';
import AddQuestionModal from '../components/addQuestionModal'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default class JournalContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            journals: [],
            q: [],
            dates: [],
            display: [],
            today: {},
            bool: true
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/dates/today')
        .then(res => res.json())
        .then(today => this.setState({today}))
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
                    journals: user.journals,
                    dates: user.dates,
                    display: user.journals
                })
            });
        }
    }

    postQuestion = (question, bool, mood) => {
        let affirmative = '';
        if (bool === 'ya') {
            affirmative = true;
        } else {
            affirmative = false;
        }
        let t;
        switch(mood) {
            case 'very bad':
                t = 1;
                break;
            case 'bad':
                t = 2;
                break;
            case 'moderate':
                t = 3;
                break;
            case 'good':
                t = 4;
                break;
            case 'very good':
                t = 5;
                break;
            default:
                t = 3;
        }

        fetch('http://localhost:3000/journals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: localStorage.id,
                date_id: this.state.today.date.id,
                question_id: question.id,
                score: t,
                affirmative
            })
        })
        .then(res => res.json())
        .then(thing => {
            this.setState({
                q: [...this.state.q, question],
                journals: [...this.state.journals, thing],
                display: [...this.state.display, thing]
            })
        });
    }

    findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return array[i];
            }
        }
        return 'none'
    }

    filterByDate = (date) => {
        let today = this.findWithAttr(this.state.dates, 'date', date)
        if (today !== 'none' && this.state.today.date.date !== date) {
            const display = this.state.journals.filter(j => j.date_id === today.id);
            this.setState({
                display,
                bool: false
            });
            return 'ayy lmao';
        }
        if (today !== 'none') {
            const display = this.state.journals.filter(j => j.date_id === today.id);
            this.setState({
                display,
                bool: true
            });
            return 'ayy lmao';
        }
        this.setState({display: [], bool: false});
    }

    resetQuestions = () => {
        this.setState({
            display: this.state.journals
        });
    }

    render() {
        console.log(this.state.bool);
        let arr = [];
        for (let i = 0; i < this.state.display.length; i++) {
            let question = this.findWithAttr(this.state.q, 'id', this.state.display[i].question_id);
            arr.push(<JournalPage q={question} journal={this.state.display[i]} key={this.state.display[i].id}/>);
        }
        return (
            localStorage.token ? 
                <div>
                    <h1 style={{textAlign: 'center', marginTop: '2em'}}>Journal</h1>
                    <div style={{display: 'flex', marginTop: '4em'}}>
                        <div style={{margin: '7.5em 2em 2em 2em'}}>
                            <Calender {...this.state.journals} filterByDate={this.filterByDate}/>
                            <Button onClick={this.resetQuestions}>Reset</Button>
                        </div>
                        <div>
                            <div style={{overflow: 'scroll', height: '35em', width: '45em', margin: '4em 4em 1em 4em'}}>
                                {arr}
                            </div>
                            {this.state.bool ? <AddQuestionModal thang={this.postQuestion}/> : ''}
                        </div>
                        

                        {/* <AddQuestionModal thang={this.postQuestion}/> */}
                    </div>
                    
                </div>
            :
                <div style={{marginTop: '2em'}}>
                    <h1>Journal</h1>
                    <h2>Please <Link to='/login'>Log In</Link></h2>
                </div>
        )
    }
   
}