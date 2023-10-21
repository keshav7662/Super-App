import React from 'react'
import Banner from '../components/Register/Banner'
import SignUpForm from '../components/Register/SignUpForm'
const RegisterPage = () => {
    return (
        <div style={{ display:'flex'}}>
            <div style={{ flex: 1 }}>
                <Banner />
            </div>
            <div style={{ flex: 1 }}>
                <SignUpForm />
            </div>
        </div>
    )
}

export default RegisterPage
