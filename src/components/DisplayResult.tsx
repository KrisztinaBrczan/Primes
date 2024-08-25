import { useEffect, useState } from "react";
import styled from "styled-components";
import { initialInputValues } from "../App";

const Textarea = styled.textarea`
  width: 50%;
`;

interface InputValues {
  singleNumberInput: string;
  startingNumberInput: string;
  endingNumberInput: string;
}

interface ReceivedProps {
  primes: number[];
  showResult: any | null;
  setShowResult: (showResult: string | null) => void;
  setIsDisabled: (isDisabled: boolean) => void;
  inputValue: InputValues;
  setInputValue: (inputValue: InputValues) => void;
}

const DisplayResult: React.FC<ReceivedProps> = ({
  primes,
  showResult,
  setShowResult,
  setIsDisabled,
  setInputValue,
}) => {
  const [count, setCount] = useState<number | null>(null);
  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    let interval: number;
    let index: number = 0;
    let count: number = 0;
    let output: string = "";
    setShowResult(null);

    if (count <= primes.length) {
      interval = setInterval(() => {
        if (count === primes.length) {
          clearInterval(interval);
        }
        setCount(count++);

        if (index >= primes.length) {
          clearInterval(interval);
          return;
        }
        output += primes[index] + ", ";
        setOutput(output.slice(0, output.length - 2));
        index++;
      }, 50);
    }

    return () => clearInterval(interval);
  }, [primes]);

  function handleClear() {
    setCount(null);
    setShowResult(null);
    setOutput("");
    setIsDisabled(false);
    setInputValue(initialInputValues);
  }

  return (
    <>
      <div>
        <span>
          Number of primes found:{" "}
          <span style={{ display: count === 0 ? "none" : "inline" }}>
            {count}
          </span>
        </span>
        <div>
          <Textarea
            readOnly
            value={showResult !== null ? showResult : output}
          ></Textarea>
        </div>
        <button onClick={handleClear}>Clear</button>
      </div>
    </>
  );
};

export default DisplayResult;
