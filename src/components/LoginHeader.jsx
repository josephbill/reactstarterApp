import React  from "react"
const LoginHeader = ({title,apptitle}) => {
  
    return (
        <header>
            <h1>{title}</h1>
            <p>Please enter your credentials - {apptitle}</p>
        </header>
    )
}

export default LoginHeader