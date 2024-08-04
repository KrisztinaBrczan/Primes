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
}

const DisplayResult: React.FC<receivedProps> = ({
  isPrime,
  setIsPrime,
  primes,
  setPrimes,
}) => {
  const [count, setCount] = useState<number | null>(null);

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
          <Textarea></Textarea>
        </div>
        <button>Clear</button>
      </div>
    </>
  );
};

export default DisplayResult;
