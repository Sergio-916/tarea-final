import {Link } from 'react-router-dom'

function Login() {
    return ( 
        <>
        
        <h1>Login</h1>

        <p>if you are not registeres please:</p>  <Link to="/register"> Regisrer here</Link>
     </>
     );
}

export default Login;