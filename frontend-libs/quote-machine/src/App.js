import "./App.css";
import { useState } from "react";
import Quote from "./components/quote";
import styled from "styled-components";
function App() {
  const [bgColor, setBgColor] = useState("#55f5f1");
  return (
    <Container bgColor={bgColor}>
      <Quote setBgColor={setBgColor} bgColor={bgColor} />


    </Container>
  );
}



const Container = styled.div`
  background-color: ${props => props.bgColor};
  transition: background-color 2s;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default App;
