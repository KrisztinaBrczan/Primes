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
  start: number | null;
  end: number | null;
}

const initialRangeValues: RangeValues = { start: null, end: null };

const App: React.FC = () => {
  const [singleNumber, setSingleNumber] = useState<number | null>(null);
  const [range, setRange] = useState<RangeValues>(initialRangeValues);
  const [primesFound, setPrimesFound] = useState<number | null>(null);
  const [primes, setPrimes] = useState<number[]>([]);

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
        <DisplayResult
          primesFound={primesFound}
          setPrimesFound={setPrimesFound}
          primes={primes}
          setPrimes={setPrimes}
        />
      </Container>
    </>
  );
};

export default App;
