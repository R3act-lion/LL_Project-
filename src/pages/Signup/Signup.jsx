import React from 'react'
import SignupForm from '../../components/SignupForm';
import { Container, ContainerHeader } from '../Login/Login';

export default function Signup() {
    return (
        <Container>
            <ContainerHeader>이메일로 회원가입</ContainerHeader>
            <SignupForm />
        </Container>
    )
}