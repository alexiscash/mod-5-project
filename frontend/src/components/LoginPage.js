import React from 'react'
import SignUp from './SignUp'

export default function LoginPage(props) {

    console.log(props);

    function test() {
        fetch('http://localhost:3000/users/1', {
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(console.log);
    }

    return (
        <div>
            <form onSubmit={(e) => props.login(e)}>
                <label>username: </label>
                <input placeholder='username' type='text'></input>
                <label>password: </label>
                <input type='password'></input>
                <button type='submit' >submit</button>
            </form>
            <button onClick={test}>test authorization</button>
            <button onClick={props.logout}>test logout</button>
            <SignUp history={props.history}/>
        </div>
    )
}