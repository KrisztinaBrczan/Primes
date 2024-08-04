import { Button } from "../style/Button";

interface RangeValues {
  start: number | null;
  end: number | null;
}

interface reiceviedProps {
  singleNumber: number | null;
  setSingleNumber: React.Dispatch<React.SetStateAction<number | null>>;
  range: RangeValues;
  setRange: React.Dispatch<React.SetStateAction<RangeValues>>;
  checkIfPrime: (number: number) => void;
  sortPrimes: (startingNumber: number, endingNumber: number) => void;
}

const InputContainer: React.FC<reiceviedProps> = ({
  singleNumber,
  setSingleNumber,
  range,
  setRange,
  checkIfPrime,
  sortPrimes,
}) => {
  return (
    <>
      <div>
        <label>
          Is my number prime?
          <input
            type="number"
            value={singleNumber ?? ""}
            onChange={(e) =>
              setSingleNumber(e.target.value ? Number(e.target.value) : null)
            }
          />
        </label>
        <Button
          disabled={
            singleNumber
              ? false
              : true || range.start !== null || range.end !== null
          }
          onClick={() => (singleNumber ? checkIfPrime(singleNumber) : null)}
        >
          Check
        </Button>
      </div>
      <div>
        <label>
          Find primes between:
          <input
            disabled={singleNumber ? true : false}
            type="number"
            value={range.start ?? ""}
            onChange={(e) =>
              setRange({
                ...range,
                start: e.target.value ? Number(e.target.value) : null,
              })
            }
          />
          and
          <input
            disabled={singleNumber ? true : false}
            type="number"
            value={range.end ?? ""}
            onChange={(e) =>
              setRange({
                ...range,
                end: e.target.value ? Number(e.target.value) : null,
              })
            }
          />
        </label>
        <Button
          disabled={
            singleNumber !== null || range.start === null || range.end === null
          }
          onClick={() => sortPrimes(range.start!, range.end!)}
        >
          Check
        </Button>
      </div>
    </>
  );
};

export default InputContainer;
