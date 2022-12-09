// import {Form, FormLabel, FormInput, FormLoginBtn} from "../LoginForm";

// export default function SignupForm(){
//     return (
//         <Form>
//             <FormLabel htmlFor='signUpEmailInput'>이메일</FormLabel>
//             <FormInput id='signUpEmailInput' type='text' />
//             <FormLabel htmlFor='signUpPasswordInput' >패스워드</FormLabel>
//             <FormInput id='signUpPasswordInput' type='password' />
//             <FormLoginBtn id='loginBtn' type='button' >다음</FormLoginBtn>
//         </Form>
//     )
// }

import React from 'react'
import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
    padding: 0 35px;
`

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    color: #767676;
    font-size: 12px;
`

export const FormInput = styled.input`
    width: 100%;
    height: 28px;
    margin-bottom: 16px;
    font-size: 16px;
    color: #767676;
    border: none;
    border-bottom: 1px solid #DBDBDB;

    &:focus {
        outline: none;
        border-bottom: 2px solid #4897EA;
    }
`
export  const FormNextBtn = styled.button`
    width: 100%;
    height: 44px;
    margin-top: 14px;
    border: none;
    background-color: #4897EA;
    font-size: 14px;
    color: white;
    border-radius: 44px;
    cursor: pointer;
`

export default function SignupForm() {
    return (
        <Form>
            <FormLabel htmlFor="signupEmailInput" >이메일</FormLabel>
            <FormInput id='signupEmailInput' type='text' />
            <FormLabel htmlFor='signupPasswordInput' >패스워드</FormLabel>
            <FormInput id='signupPasswordInput' type='password' />
            <FormNextBtn id='loginBtn' type='button' >다음</FormNextBtn>
        </Form>
    )
}
