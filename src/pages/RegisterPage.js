import React from 'react'
import Banner from '../components/Register/Banner'
import SignUpForm from '../components/Register/SignUpForm'
import '../Global.css'
const RegisterPage = () => {
    return (
        <div className='container'>
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
