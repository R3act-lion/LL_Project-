import React from 'react'
import styled from "styled-components";
import LoginForm from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const Container = styled.section`
    width: 390px;
    margin: 0 auto;
    background-color: white;
`

const ContainerHeader = styled.h2`
    text-align: center;
    padding-top: 30px;
    padding-bottom: 40px;
    color: #4897EA;
`

const ContainerAnchor = styled.span`
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    color: #767676;
    margin-top: 15px;
    cursor: pointer;
`

export default function Login() {

    const navigate=useNavigate();
    return ( 
            <Container>
                <ContainerHeader>로그인</ContainerHeader>
                <LoginForm />
                <ContainerAnchor onClick={()=>{
                    navigate("/signup");
                    }}>이메일로 회원가입
                </ContainerAnchor>
            </Container>
            
    )
}