import React from 'react'
import { Modal, Button } from 'semantic-ui-react'


export default function Signup(props) {

    function range(start, end) {
        if(start === end) return [start];
        return [start, ...range(start + 1, end)];
    }

    function signup(e) {
        e.preventDefault();
        // debugger;
        const [ firstName, lastName, username, age, email, password ] = range(0,5).map(i => e.target[i].value)
        fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                age,
                email,
                password
            })
        })
        .then(res => res.json())
        .then(user => {
            localStorage.firstName = user.firstName;
            localStorage.lastName = user.lastName;
            localStorage.username = user.username;
            localStorage.id = user.id;
            localStorage.age = user.age;
            localStorage.token = user.token;
            localStorage.email = user.email
            if (user.status === 'success') {
                console.log(localStorage);
                props.history.push('/home');
            }
        });
        
    }

    return (
    <Modal trigger={<Button color='red' size='mini'>Sign up</Button>} >
                <div>
                    <form  onSubmit={(e) => signup(e)} className="ui form" style={{padding: '2em'}}>
                        <div className="field">
                            <label>First Name</label>
                            <input placeholder="First Name" />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input placeholder="Last Name" />
                        </div>
                        <div className="field">
                            <label>Username</label>
                            <input placeholder="Username" />
                        </div>
                        <div className="field">
                            <label>Age</label>
                            <input placeholder="Age" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input placeholder="Email" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input placeholder="Password" type='password' />
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input placeholder="Password" type='password' />
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                            <input type="checkbox" className="hidden" readOnly="" tabIndex="0" />
                            <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <button type="submit" className="ui button">Submit</button>
                    </form>
                </div>  
            </Modal>
    )
}