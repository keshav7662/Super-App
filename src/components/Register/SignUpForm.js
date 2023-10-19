import React, { useState } from 'react';
import './SignUpForm.css'
function SignUpForm() {
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        mobile: ''
    });
    const [error, setError] = useState({
        name: '',
        userName: '',
        email: '',
        mobile: '',
        checkbox: ''
    });

    const [commonError, setCommonError] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    function validation() {
        const { name, email, userName, mobile } = formData;

        let errorMessage = {};
        let errorFound = false;
        // <-------------Common Validation --------->
        if (!name && !email && !userName && !mobile) {
            setCommonError('* All Fields are mandatory!')
            return false;
        }

        // <--------------name vaidation------------>
        if (!name) {
            errorMessage.name = '*Name is required!';
            errorFound = true;
        }
        else if (name.length < 3) {
            errorMessage.name = '*name length should be greater than 3!';
            errorFound = true;
        }
        else if (name[0] != name[0].toUpperCase()) {
            errorMessage.name = '*first letter of name should be in Uppercase!';
            errorFound = true;
        }
        // <--------------username validtion-------------->
        if (!userName) {
            errorMessage.userName = '*userName is required!';
            errorFound = true;
        }
        // <---------------Email Validation---------------->
        if (!email) {
            errorMessage.email = '*Email is required!';
            errorFound = true;
        }
        else if (!email.includes('@') || !email.includes('.')) {
            errorMessage.email = '*Email must have a @ and a period(.)!';
            errorFound = true;
        }
        //<----------------Mobile validation--------------->
        if (!mobile) {
            errorMessage.mobile = '*Mobile is required!';
            errorFound = true;
        } else if (isNaN(mobile) || mobile < 0) {
            errorMessage.mobile = '*Mobile should be numeric between 0-9'
            errorFound = true;
        } else if (mobile.toString().length !== 10) {
            errorMessage.mobile = '*Mobile must be a 10 digit number'
            errorFound = true;
        }
        // <-------------checkbox validation------->
        if (!checkboxChecked) {
            errorMessage.checkbox = "*Check this box if you want to proceed"
            errorFound = true;
        }
        if (errorFound) {
            setError(errorMessage);
            return false;
        }

        setError({});
        setCommonError('');
        return true;
    }
    function resetForm() {
        setFormData({
            name: '',
            userName: '',
            email: '',
            mobile: ''
        });
        setCheckboxChecked(false);
        setCommonError('');
    }

    function handleChange(e) {
        let { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        setCommonError('')
    }
    function submitHandler(e) {
        e.preventDefault();
        const { name, email, userName, mobile } = formData;
        if (validation()) {
            const data = {
                name,
                email,
                userName,
                mobile,
            };

            localStorage.setItem('formData', JSON.stringify(data));
            resetForm();
        }
    }

    return (
        <>
            {/*f-----------Form-Container--------  */}
            <div className="form-container">
                <h2>Super app</h2>
                <a href='#' id='title-caption'>Create your new account</a>
                <form className='form-data' onSubmit={submitHandler}>
                    {/* <----------name-------> */}
                    <div>
                        <input type="text"
                            placeholder='Name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {commonError ? <p className='error-text'>{commonError}</p>
                            : error.name && <p className='error-text'>{error.name}</p>}
                    </div>
                    {/* <----------userName---------> */}
                    <div>
                        <input type="text"
                            placeholder='UserName'
                            name='userName'
                            value={formData.userName}
                            onChange={handleChange}
                        />
                        {commonError ? <p className='error-text'>{commonError}</p>
                            : error.userName && <p className='error-text'>{error.userName}</p>}
                    </div>
                    {/* <--------------Email-------------> */}
                    <div>
                        <input type="email"
                            placeholder='Email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {commonError ? <p className='error-text'>{commonError}</p>
                            : error.email && <p className='error-text'>{error.email}</p>}
                    </div>
                    {/* <--------------mobile-----------> */}
                    <div>
                        <input type="tel"
                            placeholder='Mobile'
                            name='mobile'
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        {commonError ? <p className='error-text'>{commonError}</p>
                            : error.mobile && <p className='error-text'>{error.mobile}</p>}
                    </div>
                    {/* <--------------CheckBox-----------> */}
                    <div className="checkbox-container">
                        <input type="checkbox"
                            checked={checkboxChecked}
                            onChange={() => setCheckboxChecked(!checkboxChecked)}
                        />
                        <span>Share my registration data with Superapp</span>
                    </div>
                    {commonError ? <p className='error-text'>{commonError}</p>
                        : error.checkbox && <p className='error-text'>{error.checkbox}</p>}
                    {/* <-------------Submit------------> */}
                    <button type='submit' style={{ cursor: 'pointer' }}><p>SIGN UP</p></button>
                </form>
                <div className="terms-conditions">
                    <p>By clicking on Sign up. you agree to Superapp <a href='#' className='green-text'>Terms and Conditions of Use</a></p>
                    <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href='#' className='green-text'>Privacy Policy</a></p>
                </div>
            </div>
            {/* -------------End----------- */}
        </>
    )
}
export default SignUpForm;