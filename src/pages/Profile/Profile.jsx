import React from 'react';
import styled from "styled-components";
import { Container } from '../Login/Login';
import ProfileForm from '../../components/ProfileForm';

export const ContainerHeader = styled.h2`
    text-align : center;
    padding-top : 30px;
    padding-bottom : 12px; 
    color : #4897EA;
`
const ContainerDesc= styled.p`
    text-align : center;
    font-size : 14px;
    color: #767676;
`

export default function Profile(){
    return(
        <>
            <Container>
                <ContainerHeader>프로필 설정</ContainerHeader>
                <ContainerDesc>나중에 언제든지 변경할 수 있습니다</ContainerDesc>
                <ProfileForm />
            </Container>
        </>
    )   
}