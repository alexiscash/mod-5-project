import React from 'react'
import { Modal, Button } from 'semantic-ui-react'


export default function SignUp(props) {

    const thing = (e) => {
        props.signup(e);
        setTimeout(() => {
            props.history.push('/');
        }, 500)
        // props.history.push('/home');
    }

    return (
        <Modal trigger={<Button color='red' size='mini'>Sign up</Button>} >
            <div>
                <form  onSubmit={(e) => thing(e)} className="ui form" style={{padding: '2em'}}>
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