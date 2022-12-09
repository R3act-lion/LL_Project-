// import React from 'react'
// import SignupForm from '../../components/SignupForm';
// import {Container , ContainerHeader} from '../Login/Login';

// export default function Signup(){
//     return (
//         <Container>
//             <ContainerHeader>이메일로 회원가입</ContainerHeader>
//             <SignupForm/>
//         </Container>
//     )
    
// }

import React from 'react'
import styled from "styled-components";
import SignupForm from '../../components/SignupForm';

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


export default function Signup() {
    return (
        <Container>
            <ContainerHeader>이메일로 회원가입</ContainerHeader>
            <SignupForm />
        </Container>
    )
}