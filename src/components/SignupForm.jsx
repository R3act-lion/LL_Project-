import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, FormLabel, FormInput, FormBtn} from './LoginForm';

export default function SignupForm() {
    const navigate=useNavigate();
    return (
        <Form>
            <FormLabel htmlFor="signupEmailInput" >이메일</FormLabel>
            <FormInput id='signupEmailInput' type='text' />
            <FormLabel htmlFor='signupPasswordInput' >패스워드</FormLabel>
            <FormInput id='signupPasswordInput' type='password' />
            <FormBtn id='loginBtn' type='button' onClick={() => {
                navigate('/profile')}} >다음</FormBtn>
        </Form>
    )
}
