import React from 'react'
import SignUp from './SignUp'
import { Button, Form } from 'semantic-ui-react'

export default function LoginPage(props) {

    // console.log(props);

    function superLogin(e) {
        props.login(e);
        setTimeout(() => {
            props.history.history.push('/')
        }, 500)
    }

    return (
        localStorage.token ?
        <div>
            <h2>you're logged in bruh</h2>
            <button onClick={props.logout}>Log out</button>
        </div>
        :
        <div style={{paddingLeft: '25em', paddingRight: '25em'}}>
            <h1>Log In</h1>
            <Form onSubmit={(e) => superLogin(e)}>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='username'></input>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='password' type='password'></input>
                </Form.Field>
                <Button primary type='submit'>Log In</Button>
            </Form>
            <br />
            <SignUp signup={props.signup} history={props.history.history}/>
        </div>
    )
}