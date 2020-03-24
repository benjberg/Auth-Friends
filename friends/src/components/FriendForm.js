import React, {useState} from 'react'
import {addFriend} from '../utils/utils'
import {useHistory} from 'react-router-dom'

const AddFriendForm = () => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: 7
    })
    const history = useHistory()
    const handleChange = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        addFriend(friend)
        setFriend({...friend, id: friend.id+1})
        history.push('./friendslist')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={handleChange} />
            <input type='number' name='age' onChange={handleChange} />
            <input type='email' name='email' onChange={handleChange} />
            <input type='submit'/>
        </form>
    )
}

export default AddFriendForm