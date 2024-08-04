import Header from "./components/Header";
import DisplayResult from "./components/DisplayResult";
import InputContainer from "./components/InputContainer";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2em;
  padding: 1em;
  margin: auto;
  box-shadow: 5px 5px 10px grey;
`;

interface RangeValues {
  start: number;
  end: number;
}

const initialRangeValues: RangeValues = { start: 0, end: 0 };

const App: React.FC = () => {
  const [singleNumber, setSingleNumber] = useState<number>(0);
  const [range, setRange] = useState<RangeValues>(initialRangeValues);

  console.log(singleNumber);

  return (
    <>
      <Header />
      <Container>
        <InputContainer
          singleNumber={singleNumber}
          setSingleNumber={setSingleNumber}
          range={range}
          setRange={setRange}
        />
        <DisplayResult />
      </Container>
    </>
  );
};

export default App;
