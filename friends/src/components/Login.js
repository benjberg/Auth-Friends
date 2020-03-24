import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {login} from '../utils/utils'

const Login = (props) => {
    const [user, setUser] = useState({
            username: '',
            password: ''
        })

    const history = useHistory();

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        login(user)
        history.push('/friendslist')
        setUser({
            username: '',
            password: ''
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>User Name</label><br/>
            <input 
                type='text' 
                name='username'
                onChange={handleChange}/>
            <br/>
            <label htmlFor='password'>Password</label><br/>
            <input 
                type='password' 
                name='password'
                onChange={handleChange}/>
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default Login;