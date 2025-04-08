import React, {useState} from "react"
function LoginForm({onlogin}){
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        // dom selection for the input 
        const {name, value} = e.target
        // updating an object state/array , prev: current value of state 
        // made a copy that we manipulate and the set as the new state reference 
        setCredentials(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // child to parent communication happening via the callback
        onlogin(credentials)
    }
    return (
        <div>
            {/* create my html structure */}
            <h1>This is the login Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                       type="text"
                       name="username"
                       value={credentials.username}
                       onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                       type="password"
                       name="password"
                       value={credentials.password}
                       onChange={handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm