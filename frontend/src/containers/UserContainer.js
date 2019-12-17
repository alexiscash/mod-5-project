import React from 'react'
import UserCard from '../components/UserCard'

export default class UserContainer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <UserCard {...this.props}/>
            </div>
        )
    }
}