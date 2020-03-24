import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({});
   
     const login = e => {
       e.preventDefault();
       axiosWithAuth().post('/api/login', credentials)
         .then(res => {
           localStorage.setItem('token', JSON.stringify(res.data.token));
           this.props.history.push('/protected');
         })
     }
   
     const handleChange = e => {
        setCredentials = {
           ...credentials,
           [e.target.name] : e.target.value,
         }
     };
   
       return (
         <div>
           <form onSubmit={login}>
             <input
               type="text"
               name="username"
               value={credentials.username}
               onChange={handleChange}
             />
             <input
               type="password"
               name="password"
               value={credentials.password}
               onChange={handleChange}
             />
             <button>Log in</button>
           </form>
         </div>
       )
   }
   
   export default Login;