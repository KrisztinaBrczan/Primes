import Header from "./components/Header";
import DisplayResult from "./components/DisplayResult";
import InputContainer from "./components/InputContainer";
import styled from "styled-components";
import { useState } from "react";
import { isSingleNumberPrime } from "./utils/isSingleNumberPrime";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2em;
  padding: 2em;
  margin: auto;
  box-shadow: 5px 5px 10px grey;
`;

interface RangeValues {
  start: number | null;
  end: number | null;
}

interface InputValues {
  singleNumberInput: string;
  startingNumberInput: string;
  endingNumberInput: string;
}

const initialRangeValues: RangeValues = { start: null, end: null };

export const initialInputValues: InputValues = {
  singleNumberInput: "",
  startingNumberInput: "",
  endingNumberInput: "",
};

const App: React.FC = () => {
  const [singleNumber, setSingleNumber] = useState<number | null>(null);
  const [range, setRange] = useState<RangeValues>(initialRangeValues);
  const [isPrime, setIsPrime] = useState<boolean | null>(null);
  const [primes, setPrimes] = useState<number[]>([]);
  const [showResult, setShowResult] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<InputValues>(initialInputValues);

  console.log(singleNumber);

  function checkIfPrime(number: number) {
    let isPrime: boolean = isSingleNumberPrime(number);
    setIsPrime(isPrime);
    setSingleNumber(null);
    setShowResult(isPrime ? "Yes" : "No");
  }

  function sortPrimes(startingNumber: number, endingNumber: number): void {
    let primeNumbers: number[] = [];
    if (startingNumber >= endingNumber) {
      alert(
        "Starting number cannot be greater than or equal to the ending number!"
      );
      setRange(initialRangeValues);
      return;
    }
    for (let i = startingNumber; i <= endingNumber; i++) {
      if (isSingleNumberPrime(i)) {
        primeNumbers.push(i);
      }
    }
    setPrimes(primeNumbers);
    setRange(initialRangeValues);
  }

  console.log(isPrime);
  console.log(primes);

  return (
    <>
      <Header />
      <Container>
        <InputContainer
          singleNumber={singleNumber}
          setSingleNumber={setSingleNumber}
          range={range}
          setRange={setRange}
          checkIfPrime={checkIfPrime}
          sortPrimes={sortPrimes}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <DisplayResult
          primes={primes}
          showResult={showResult}
          setShowResult={setShowResult}
          setIsDisabled={setIsDisabled}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </Container>
    </>
  );
};

export default App;
