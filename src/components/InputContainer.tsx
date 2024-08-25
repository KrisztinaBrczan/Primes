import { Button } from "../style/Button";

interface RangeValues {
  start: number | null;
  end: number | null;
}

interface InputValues {
  singleNumberInput: string;
  startingNumberInput: string;
  endingNumberInput: string;
}

interface ReiceviedProps {
  singleNumber: number | null;
  setSingleNumber: (singleNumber: number | null) => void;

  range: RangeValues;
  setRange: (range: RangeValues) => void;

  checkIfPrime: (number: number) => void;
  sortPrimes: (startingNumber: number, endingNumber: number) => void;

  isDisabled: boolean;
  setIsDisabled: (isDisabled: boolean) => void;

  inputValue: InputValues;
  setInputValue: (inputValue: InputValues) => void;
}

const InputContainer: React.FC<ReiceviedProps> = ({
  singleNumber,
  setSingleNumber,
  range,
  setRange,
  checkIfPrime,
  sortPrimes,
  isDisabled,
  setIsDisabled,
  inputValue,
  setInputValue,
}) => {
  return (
    <>
      <div>
        <label>
          Is my number prime?
          <input
            disabled={isDisabled || range.start !== null || range.end !== null}
            type="number"
            value={inputValue.singleNumberInput}
            onChange={(e) => {
              setSingleNumber(e.target.value ? Number(e.target.value) : null);
              setInputValue({
                ...inputValue,
                singleNumberInput: e.target.value,
              });
            }}
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
            value={inputValue.startingNumberInput}
            onChange={(e) => {
              setRange({
                ...range,
                start: e.target.value ? Number(e.target.value) : null,
              });
              setInputValue({
                ...inputValue,
                startingNumberInput: e.target.value,
              });
            }}
          />
          and
          <input
            disabled={isDisabled || singleNumber ? true : false}
            type="number"
            value={inputValue.endingNumberInput}
            onChange={(e) => {
              setRange({
                ...range,
                end: e.target.value ? Number(e.target.value) : null,
              });

              setInputValue({
                ...inputValue,
                endingNumberInput: e.target.value,
              });
            }}
          />
        </label>
        <Button
          disabled={
            singleNumber !== null || range.start === null || range.end === null
          }
          onClick={() => {
            sortPrimes(
              Math.ceil(Number(range.start)),
              Math.ceil(Number(range.end))
            );
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
