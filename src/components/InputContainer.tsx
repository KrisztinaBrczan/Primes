import { Button } from "../style/Button";

interface RangeValues {
  start: number | null;
  end: number | null;
}

interface reiceviedProps {
  singleNumber: number | null;
  setSingleNumber: (singleNumber: number | null) => void;

  range: RangeValues;
  setRange: (range: RangeValues) => void;

  checkIfPrime: (number: number) => void;
  sortPrimes: (startingNumber: number, endingNumber: number) => void;

  isDisabled: boolean;
  setIsDisabled: (isDisabled: boolean) => void;
}

const InputContainer: React.FC<reiceviedProps> = ({
  singleNumber,
  setSingleNumber,
  range,
  setRange,
  checkIfPrime,
  sortPrimes,
  isDisabled,
  setIsDisabled,
}) => {
  return (
    <>
      <div>
        <label>
          Is my number prime?
          <input
            disabled={isDisabled}
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
          onClick={() => {
            singleNumber ? checkIfPrime(singleNumber) : null;
            setIsDisabled(true);
          }}
        >
          Check
        </Button>
      </div>
      <div>
        <label>
          Find primes between:
          <input
            disabled={isDisabled || singleNumber ? true : false}
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
            disabled={isDisabled || singleNumber ? true : false}
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
          onClick={() => {
            sortPrimes(Math.ceil(range.start!), Math.ceil(range.end!));
            setIsDisabled(true);
          }}
        >
          Check
        </Button>
      </div>
    </>
  );
};

export default InputContainer;
