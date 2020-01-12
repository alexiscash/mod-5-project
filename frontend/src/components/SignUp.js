import React from 'react'
import { Modal, Button } from 'semantic-ui-react'


export default class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            bool: false,
            message: 'ayy lmao'
        }
    }

    thing = (e) => {
        const res = this.props.signup(e);

        if (res === 'empty') {
            this.setState({bool: true, message: 'please fill out all fields'});
            return 'ayy lmao'
        }

        if (res === 'username') {
            this.setState({bool: true, message: 'username has been taken'});
            return 'ayy lmao'
        }

        if (res === 'age') {
            this.setState({bool: true, message: 'age must be a number'});
            return 'ayy lmao'
        }

        if (res === 'young') {
            this.setState({bool: true, message: 'must be at least 18 years old'})
        }

        if (res === 'email') {
            this.setState({bool: true, message: 'email is invalid'});
            return 'ayy lmao'
        }

        if (res === 'password') {
            this.setState({bool: true, message: 'password must be at least 6 characters'});
            return 'ayy lmao'
        }


        setTimeout(() => {
            this.props.history.push('/');
        }, 500)
        // props.history.push('/home');
    }
    render() {
        return (
            <Modal trigger={<Button primary size='mini'>Sign up</Button>} >
                <div>
                    <form onSubmit={(e) => this.thing(e)} className="ui form" style={{padding: '2em'}}>
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
                        {/* <div className="field">
                            <div className="ui checkbox">
                            <input type="checkbox" className="hidden" readOnly="" tabIndex="0" />
                            <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div> */}
                        <button type="submit" className="ui button">Submit</button>
                        {this.state.bool ?
                        <div style={{padding: '1em', borderRadius: '0.5em', marginBottom: '1em', marginTop: '1em'}}>
                            <h3>{this.state.message}</h3>
                        </div>
                    :    ''
                    }
                    </form>
                </div>  
            </Modal>
        )
    }
    
}