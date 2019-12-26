import React from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <p>
                    <Link to='/'>home </Link> 
                    <Link to='/journal'>journal </Link> 
                    <Link to='/results'>results </Link> 
                    <Link to='/discover'>discover </Link> 
                    <Link to='/login'>login</Link>
                </p>

                {/* <button onClick={this.props.history.push('/home')}>test</button> */}
                {/* <div class="ui secondary pointing menu">
                    <a class="active item">
                        Home
                    </a>
                    <a class="item">
                        Messages
                    </a>
                    <a class="item">
                        Friends
                    </a>
                    <div class="right menu">
                        <a class="ui item">
                        Logout
                        </a>
                    </div>
                    </div>
                    <div class="ui segment">
                    <p></p>
                    </div> */}
                </div>
        )
    }
    
}