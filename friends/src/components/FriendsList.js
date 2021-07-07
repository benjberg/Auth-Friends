import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/utils';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendList = (props) => {
    const [data, setData] = useState([]);
    const [formState, setFormState] = useState({ name: '', age:'', email: ''})
    
    
    const history = useHistory();
    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then((response) => setData(response.data))
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }, [])
    
    const submitFriend = (friend) => {
        axiosWithAuth()
            .post('/api/friends', friend)
            .then((response) => setData(response.data))
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }
    
    
    const logout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }
    return (
        <>
            <button type='button' onClick={() => logout()}>Logout</button>
            <FriendForm submit={submitFriend}  state={formState} setState={setFormState} />
            {data.map((friend) => {
                return (
                    <Friend key={friend.id} friend={friend} />
                )
            })}
        </>
    )
}

export default FriendList;
