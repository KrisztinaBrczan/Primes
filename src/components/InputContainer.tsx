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
}

const InputContainer: React.FC<reiceviedProps> = ({
  singleNumber,
  setSingleNumber,
  range,
  setRange,
  checkIfPrime,
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
          onClick={() => (singleNumber ? checkIfPrime(singleNumber) : null)}
        >
          Check
        </Button>
      </div>
      <div>
        <label>
          Find primes between:
          <input
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
        <Button>Check</Button>
      </div>
    </>
  );
};

export default InputContainer;
