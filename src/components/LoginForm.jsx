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
export  const FormLoginBtn = styled.button`
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

export default function LoginForm() {
    return (
        <Form>
            <FormLabel htmlFor='emailInput' >이메일</FormLabel>
            <FormInput id='emailInput' type='text' />
            <FormLabel htmlFor='passwordInput' >패스워드</FormLabel>
            <FormInput id='passwordInput' type='password' />
            <FormLoginBtn id='loginBtn' type='button' >로그인</FormLoginBtn>
        </Form>
    )
}
