import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Otp = ({ otpLength = 6 }) => {
  const [inputField, setInputField] = useState(new Array(otpLength).fill(""));
  const refArr = useRef([]);

  const handleKeyDown = (e, idx) => {
    const key = e.key;
    const copyArr = [...inputField];

    if (key === "ArrowRight") {
      if (idx + 1 < otpLength) refArr.current[idx + 1].focus();
      return;
    }

    if (key === "ArrowLeft") {
      if (idx > 0) refArr.current[idx - 1].focus();
      return;
    }

    if (key === "Backspace" || key === "Delete") {
      copyArr[idx] = "";
      setInputField(copyArr);

      if (idx > 0) refArr.current[idx - 1].focus();
      return;
    }

    if (isNaN(key)) {
      return;
    }

    copyArr[idx] = key;
    setInputField(copyArr);
    if (idx + 1 < otpLength) refArr.current[idx + 1].focus();
  };

  useEffect(() => {
    refArr.current[0].focus();
  }, []);

  return (
    <div>
      {inputField.map((inputField, idx) => {
        return (
          <input
            className="inputBox"
            key={idx}
            type="text"
            // ----------- imp -----------------
            ref={(eachInput) => (refArr.current[idx] = eachInput)}
            value={inputField}
            onChange={() => {}}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        );
      })}
    </div>
  );
};

export default Otp;
