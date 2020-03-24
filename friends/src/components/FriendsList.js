import React from 'react'; 
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = props => {
    axiosWithAuth().get('/api/friends').then(res=>{
        console.log(res)
        res.data.map(friend=>{
            return(
                <div className='friends' key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>

                </div>
            )
        })
    })

}

export default FriendsList;