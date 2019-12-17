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
            </div>
        )
    }
    
}