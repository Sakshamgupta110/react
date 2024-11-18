import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [lowerCaseAllowed, setLowerCaseAllowed] = useState(false);
  const [upperCaseAllowed, setUpperCaseAllowed] = useState(true);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref= useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    const lowstr = "abcdefghijklmnopqrstuvwxyz";
    const upstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numstr = "0123456789";
    const specialstr = "!@#$%^&*()";
    let characterPool = "";

    if (lowerCaseAllowed) characterPool += lowstr;
    if (upperCaseAllowed) characterPool += upstr;
    if (numbersAllowed) characterPool += numstr;
    if (specialAllowed) characterPool += specialstr;
    for (let i = 0; i < length; i++) {
      pass += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }
    setPassword(pass);
  }, [length, numbersAllowed, lowerCaseAllowed, upperCaseAllowed, specialAllowed]);

  useEffect(() => {
    PasswordGenerator();
  }, [length,lowerCaseAllowed,upperCaseAllowed,numbersAllowed,specialAllowed,PasswordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
      passwordref.current?.select()
      window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordref}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 mb-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numbersAllowed}
            id="numberInput"
            onChange={() => setNumbersAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={lowerCaseAllowed}
            id="lowercaseInput"
            onChange={() => setLowerCaseAllowed((prev) => !prev)}
          />
          <label htmlFor="lowercaseInput">Lowercase</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={upperCaseAllowed}
            id="uppercaseInput"
            onChange={() => setUpperCaseAllowed((prev) => !prev)}
          />
          <label htmlFor="uppercaseInput">Uppercase</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={specialAllowed}
            id="specialInput"
            onChange={() => setSpecialAllowed((prev) => !prev)}
          />
          <label htmlFor="specialInput">Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
