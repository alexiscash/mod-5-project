import React from 'react'
import SignUp from './SignUp'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function LoginPage(props) {

    // console.log(props);

    function superLogin(e) {
        props.login(e);
        setTimeout(() => {
            props.history.history.push('/')
        }, 500)
    }

    function test() {
        fetch('http://localhost:3000/users/1', {
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(console.log);
    }

    function testt() {
        console.log('submit');
    }

    return (
        // <div>
        //     <form onSubmit={(e) => superLogin(e)}>
        //         <label>username: </label>
        //         <input placeholder='username' type='text'></input>
        //         <label>password: </label>
        //         <input type='password'></input>
        //         <button type='submit' >submit</button>
        //     </form>
        //     <button onClick={test}>test authorization</button>
        //     <button onClick={props.logout}>test logout</button>
        //     <SignUp signup={props.signup} history={props.history.history}/>
        // </div>
        <div>
            <Form onSubmit={(e) => superLogin(e)}>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='username'></input>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='password' type='password'></input>
                </Form.Field>
                <Button type='submit'>Log In</Button>
            </Form>
            <button onClick={props.logout}>test logout</button>
            <SignUp signup={props.signup} history={props.history.history}/>
        </div>
    )
}