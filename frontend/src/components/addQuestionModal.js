import React from 'react'
import { Button, Image, Modal, Dropdown } from 'semantic-ui-react'
// import MoodDropdown from './MoodDropdown';
// import { Dropdown } from 'semantic-ui-react'


class AddQuestionModal extends React.Component {

    constructor() {
        super();

        this.state = {
            content: 'ayy lmao', 
            img_url: 'ayyyy',
            score: '',
            showModal: false 
        }
        this.score = 'ayy lmao'
    }

    componentDidMount() {
        this.getQuestion()
        .then(thing => this.setState({...thing, ...this.state.score}))
    }

    async getQuestion() {
        const res = await fetch('http://localhost:3000/questions/random');
        const json = await res.json();
        return json;
    }

    getNewQuestion = (t) => {
        this.props.thang(this.state, t, this.state.score);
        this.getQuestion().then(thing => this.setState({...this.state.score, ...thing}))
        this.closeModal()
    }

    thang = (e, data) => {
        this.setState({
            score: data.value
        })
    }

    closeModal = () => this.setState({showModal: false})

    render() {
        // console.log(this.state);
        return (
        <Modal open={this.state.showModal} onClose={this.closeModal} trigger={<Button onClick={() => this.setState({showModal:true})}>Add Question</Button>}>
            <Modal.Header>Please answer yes or no</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='small' src={this.state.img_url} />
            <Modal.Description>
                <p>{this.state.content}</p>
                <Dropdown
                    placeholder='Select Mood'
                    fluid
                    selection
                    options={friendOptions}
                    onChange={this.thang}
                />
                <button onClick={() => this.getNewQuestion('ya')}>Yes</button>
                <button onClick={() => this.getNewQuestion('nah')}>No</button>
            </Modal.Description>
            </Modal.Content>   
        </Modal>
        )
    }
  
}


const friendOptions = [
    {
      key: 'very bad',
      text: 'very bad',
      value: 'very bad',
      image: { avatar: true, src: 'https://f1.pngfuel.com/png/1013/287/686/happy-face-emoji-emoji-domain-emoticon-smiley-sticker-iphone-smirk-yellow-png-clip-art.png' },
    },
    {
      key: 'bad',
      text: 'bad',
      value: 'bad',
      image: { avatar: true, src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/33/slightly-frowning-face_1f641.png' },
    },
    {
      key: 'moderate',
      text: 'moderate',
      value: 'moderate',
      image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Neutral_Face_Emoji_large.png?v=1571606037' },
    },
    {
      key: 'good',
      text: 'good',
      value: 'good',
      image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1571606090' },
    },
    {
      key: 'very good',
      text: 'very good',
      value: 'very good',
      image: { avatar: true, src: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face-with-sunglasses.png' },
    }
  ]

export default AddQuestionModal;