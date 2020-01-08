import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {


    constructor() {
        super();

        this.state = {
            ...this.aStyle
        }
        this.navStyle = {
            paddingRight: '5em',
            paddingLeft: '5em',
            paddingTop: '2em',
            // paddingBottom: '5em',
            color: '#03AEB5',
            background: 'white',
            width: '100%',
            display: 'block',
            overflow: 'hidden',
            // position: 'fixed'
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
            color: '#FFFFFF',
            backgroundColor: '#000000'
        }
    }

    mouseHover = () =>  {
        this.setState({...this.hoverStyle})
    }


    // const aStyle = 

    // const hoverStyle = {
    //     color: '#FFFFFF',
    //     backgroundColor: '#000000'
    // }

    render() {
        return (
            // #03AEB5
            <div style={this.navStyle}>
            <div className="ui secondary menu">
            <a className="item">
                <Link to='/'><img src={'https://mymoodpath.com/wp-content/themes/moodpath/img/logo/cyan.svg'} width={'200px'} alt={'dope'}/></Link>
            </a>
            <a className="item">
                <Link onMouseEnter={this.mouseHover} to='/journal'>Journal</Link>
            </a>
            <a className="item">
                <Link to='/results'>Results</Link>
            </a>
            <a className="item">
                <Link to='/science'>Science</Link>
            </a>
            <div className="right menu">
                {localStorage.token ?
                    <a className='item'><Link onClick={this.props.logout}>Logout</Link></a> :
                    <a className="ui item">
                    <Link to='/login'>Login</Link>
                    </a>
                }
            </div>
            </div>
            </div>
        );
    }
     
}