import React from 'react';

const Friend = (props) => {
    return (
        <div className='friend'>
            <h2>{props.friend.name}</h2>
            <p className='age'>Age: {props.friend.age}</p>
            <p className='email'>{props.friend.email}</p>
           
        </div>
    )
}

export default Friend;