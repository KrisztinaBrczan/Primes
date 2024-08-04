import InputContainer from "./InputContainer";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2em;
  padding: 1em;
  margin: auto;
  box-shadow: 5px 5px 10px grey;
`;

export default function MainContainer() {
  return (
    <>
      <Container>
        <InputContainer />
      </Container>
    </>
  );
}
