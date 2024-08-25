import { useEffect, useState } from "react";
import styled from "styled-components";
import { initialInputValues } from "../App";
import { Button } from "../style/Button";
import "../index.css";

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border-radius: 0.5em;
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ddd;
  margin-top: 1em;
  height: 150px;
  font-family: Roboto-LightItalic;
`;

const Container = styled.div`
  text-align: center;
  margin-top: 2em;
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
      <Container>
        <div>
          <span>
            Number of primes found:{" "}
            <span style={{ display: count === null ? "none" : "inline" }}>
              {count}
            </span>
          </span>
          <div>
            <Textarea
              readOnly
              value={showResult !== null ? showResult : output}
              rows={10}
            ></Textarea>
          </div>
          <Button
            onClick={handleClear}
            disabled={count !== null && count < primes.length ? true : false}
          >
            {count !== null && count < primes.length
              ? "Calculating..."
              : "Clear"}
          </Button>
        </div>
      </Container>
    </>
  );
};

export default DisplayResult;
