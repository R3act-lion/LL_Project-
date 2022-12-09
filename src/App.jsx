import { createGlobalStyle } from "styled-components"
import Login from "./pages/Login/Login";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap');

body, h1, h2 {
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
}

export default App;