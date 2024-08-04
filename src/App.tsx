import Header from "./components/Header";
import DisplayResult from "./components/DisplayResult";
import InputContainer from "./components/InputContainer";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2em;
  padding: 1em;
  margin: auto;
  box-shadow: 5px 5px 10px grey;
`;

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <InputContainer />
        <DisplayResult />
      </Container>
    </>
  );
}
