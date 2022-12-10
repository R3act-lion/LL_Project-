import React from 'react'
import styled from "styled-components";
import {Form, FormLabel, FormInput, FormBtn} from './LoginForm';

const FormImg = styled.input`
    display : block;
    margin : 30px auto;   
    width : 110px;
    height : 110px;
    border-radius : 50%;
    background-color: #4897EA;
`

export default function ProfileForm() {
  return (
    <Form>
        <FormImg type='image'></FormImg>
        <FormLabel htmlFor='userName'>사용자 이름</FormLabel>
        <FormInput id='userName'></FormInput>
        <FormLabel htmlFor='userId'>계정 ID</FormLabel>
        <FormInput id='userId'></FormInput>
        <FormLabel htmlFor='userIntro'>소개</FormLabel>
        <FormInput id='userIntro'></FormInput>
        <FormBtn id='startBtn' type='button'>YourTrip 시작하기</FormBtn>
    </Form>
  )
}
