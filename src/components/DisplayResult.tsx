import { useEffect, useState } from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  width: 50%;
`;

interface receivedProps {
  isPrime: boolean | null;
  setIsPrime: React.Dispatch<React.SetStateAction<boolean | null>>;
  primes: number[];
  setPrimes: React.Dispatch<React.SetStateAction<number[]>>;
  showResult: any | null;
  setShowResult: React.Dispatch<React.SetStateAction<any>>;
}

const DisplayResult: React.FC<receivedProps> = ({
  isPrime,
  setIsPrime,
  primes,
  setPrimes,
  showResult,
  setShowResult,
}) => {
  const [count, setCount] = useState<number | null>(null);
  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    let interval: number;
    let count: number = 0;
    if (count <= primes.length) {
      interval = setInterval(() => {
        if (count === primes.length) {
          clearInterval(interval);
        }
        setCount(count++);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [primes]);

  useEffect(() => {
    let interval: number;
    let index: number = 0;
    let output: string = "";
    setShowResult(null);

    interval = setInterval(() => {
      if (index >= primes.length) {
        clearInterval(interval);
        return;
      }

      output += primes[index] + ", ";
      setOutput(output.slice(0, output.length - 2));
      index++;
    }, 50);

    return () => clearInterval(interval);
  }, [primes]);

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
        <button>Clear</button>
      </div>
    </>
  );
};

export default DisplayResult;
