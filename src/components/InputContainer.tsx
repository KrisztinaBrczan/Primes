export default function InputContainer() {
  return (
    <>
      <div>
        <label>
          Is my number prime?
          <input type="number" />
        </label>
        <button>Check</button>
      </div>
      <div>
        <label>
          Find primes between:
          <input type="number" />
          and
          <input type="number" />
        </label>
        <button>Check</button>
      </div>
    </>
  );
}
