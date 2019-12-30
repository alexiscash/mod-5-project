import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import MoodDropdown from './MoodDropdown';

class AddQuestionModal extends React.Component {

    constructor() {
        super();

        this.state = {
            content: 'ayy lmao', 
            img_url: 'ayyyy' 
        }
        this.score = 'ayy lmao'
    }

    componentDidMount() {
        this.getQuestion()
        .then(thing => this.setState({...thing}))
    }

    async getQuestion() {
        const res = await fetch('http://localhost:3000/questions/random');
        const json = await res.json();
        return json;
    }

    getNewQuestion(t) {
        this.props.thang(this.state, t);
        this.getQuestion().then(thing => this.setState({...thing}))
    }

    thang(e, data) {
        // this.score = data.value
        console.log(data.value);
    }

    render() {
        return (
        <Modal trigger={<Button>Add Question</Button>}>
            <Modal.Header>Please answer yes or no</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='small' src={this.state.img_url} />
            <Modal.Description>
                <p>{this.state.content}</p>
                <MoodDropdown thang={this.thang} />
                <button onClick={() => this.getNewQuestion('ya')}>Yes</button>
                <button onClick={() => this.getNewQuestion('nah')}>No</button>
            </Modal.Description>
            </Modal.Content>   
        </Modal>
                )
    }
  
}

export default AddQuestionModal;