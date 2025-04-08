// useState is a hook used to maintain state(data holders) data in a component 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import LoginHeader from './components/LoginHeader'
function App() {
  // define the state variables 
  const [loginStatus, setLoginStatus] = useState('')
  // handle login 
  // credentials {}
  const handleLogin =  (credentials) => {
      // simple validation
      if(credentials.username == "admin" && credentials.password == "password"){
         // update the loginstatus state
         // firebase check logic 

         setLoginStatus('Login Successful!')
         console.log(loginStatus)
      } else {
        setLoginStatus('Invalid Credentials')
      }
  }
  const tagValue = () => {
    if(loginStatus === "Login Successful!"){
       return <p className="success">{loginStatus}</p>
    } else {
       return <p className="failure">{loginStatus}</p>
    }
  }
  return (
    <>
      {/* children components hosted here */}
       <div>
           {/* parent to child communication -> props */}
           <LoginHeader title="Welcome Back" apptitle="MyApp"/>
           {/* parent to child communication -> props */}
           {/* child to parent communication -> callback function */}
           <LoginForm onlogin={handleLogin}/>
           {/* conditional rendering */}
           <div>
              {tagValue()}
           </div>
           {/* {loginStatus && <p>{loginStatus}</p>} */}
       </div>
    </>
  )
}

export default App
