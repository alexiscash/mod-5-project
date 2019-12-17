import React from 'react'

export default function UserCard(props) {
    return (
        <div>
            <p>name: {props.firstName + ' ' + props.lastName}</p>
            <p>age: {props.age}</p>
            <p>bio: {props.bio}</p>
        </div>
    )
}