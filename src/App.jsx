import { createGlobalStyle } from "styled-components"
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap');

body, h1, h2, p {
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>메인페이지입니다</div>} />
      <Route path="/login" element={
        <>  
        <GlobalStyle />
        <Login />
      </>
      }/>

      <Route path="/signup" element={
        <>
        <GlobalStyle />
        <Signup />
        </>}>
      </Route>

      <Route path="/profile" element={
        <>
        <GlobalStyle />
        <Profile />
        </>}>
        </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;