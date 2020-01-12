import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {


    constructor() {
        super();
        this.link = {color: '#03AEB5', padding: '0.4em', transition: 'all 0.2s', backgroundColor: '#f2f2f2', border: '0.1em solid #f2f2f2', borderRadius: '0.12em'}

        this.state = {
            one: this.link,
            two: this.link,
            three: this.link,
            four: this.link
        }

        this.aStyle = {
            display: 'inline-block',
            padding: '0.35em 1.2em',
            border: '0.1em solid #000000',
            fontFamily: 'Roboto sans-serif',
            fontWeight: '300',
            borderRadius: '0.12em',
            boxSizing: 'border-box',
            textDecoration: 'none',
            color: '#000000'
        }

        this.hoverStyle = {
            color: '#03AEB5',
            padding: '0.4em',
            border: '0.1em solid #03AEB5',
            borderRadius: '0.2em'
        }

        this.li = {
            marginLeft: '2.5em',
            listStyleType: 'none',
            color: '#03AEB5'
        }

    }

    mouseHover1 = () => this.setState({one: this.hoverStyle})

    mouseHover2 = () => this.setState({two: this.hoverStyle})

    mouseLeave1 = () => this.setState({one: this.link})

    mouseLeave2 = () => this.setState({two: this.link})

    mouseHover3 = () => this.setState({three: this.hoverStyle})

    mouseLeave3 = () => this.setState({three: this.link})

    mouseHover4 = () => this.setState({four: this.hoverStyle})

    mouseLeave4 = () => this.setState({four: this.link})

    render() {
        // console.log(this.state);
        return (
            <div style={{textAlign: 'left', paddingLeft: '3em', paddingTop: '3em', display: 'flex', width: '100%', backgroundColor: '#f2f2f2', postion: 'sticky', top: '0'}}>
                <Link to="/"><img src='https://mymoodpath.com/wp-content/themes/moodpath/img/logo/cyan.svg' width='200px' alt='dope' /></Link>
                <ul style={{display: 'flex'}}>
                    <li style={this.li}><Link onMouseLeave={this.mouseLeave1} onMouseEnter={this.mouseHover1} style={this.state.one} to="/journal">Journal</Link></li>
                    <li style={this.li}><Link onMouseLeave={this.mouseLeave2} onMouseEnter={this.mouseHover2} style={this.state.two} to="/results">Results</Link></li>
                    <li style={this.li}><Link onMouseLeave={this.mouseLeave3} onMouseEnter={this.mouseHover3} style={this.state.three} to="/science">Science</Link></li>
                </ul>
                <div style={{textAlign: 'right', marginLeft: '35em', marginRight: '10em'}}>
                    <ul style={{display: 'flex', marginRight: '10em', paddingRight: '5em'}}>
                        <li style={{...this.li}}>Welcome, {localStorage.username}</li>
                        {localStorage.token ? 
                        <li onClick={this.props.logout} style={{...this.li, paddingRight: '3em'}}><Link onMouseLeave={this.mouseLeave4} onMouseEnter={this.mouseHover4} style={this.state.four} >Logout</Link></li>
                        :
                        <li style={{...this.li, paddingRight: '3em'}}><Link onMouseLeave={this.mouseLeave4} onMouseEnter={this.mouseHover4} style={this.state.four} to='/login'>Login</Link></li>      
                    }
                        
                    </ul>
                </div>    
            </div>
        );
    }
     
}