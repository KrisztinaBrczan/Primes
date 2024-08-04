interface RangeValues {
  start: number;
  end: number;
}

interface reiceviedProps {
  singleNumber: number;
  setSingleNumber: React.Dispatch<React.SetStateAction<number>>;
  range: RangeValues;
  setRange: React.Dispatch<React.SetStateAction<RangeValues>>;
}

const InputContainer: React.FC<reiceviedProps> = ({
  singleNumber,
  setSingleNumber,
  range,
  setRange,
}) => {
  return (
    <>
      <div>
        <label>
          Is my number prime?
          <input
            type="number"
            value={singleNumber}
            onChange={(e) => setSingleNumber(Number(e.target.value))}
          />
        </label>
        <button>Check</button>
      </div>
      <div>
        <label>
          Find primes between:
          <input
            type="number"
            value={range.start}
            onChange={(e) =>
              setRange({ ...range, start: Number(e.target.value) })
            }
          />
          and
          <input
            type="number"
            value={range.end}
            onChange={(e) =>
              setRange({ ...range, end: Number(e.target.value) })
            }
          />
        </label>
        <button>Check</button>
      </div>
    </>
  );
};

export default InputContainer;
