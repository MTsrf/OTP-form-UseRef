import React, { useRef, useState } from 'react'
import './style.css'


const OtpFormWithUseRef = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRef = useRef([]);
  const handleChange = (e, inputIndex) => {
    const { key: value } = e;
    if (isNaN(value) && value !== "Backspace") {
      return false;
    }
    let focusChange = value === "Backspace" && inputIndex >= 0 ? -1 : +1;
    inputRef.current[inputIndex + focusChange]?.focus();
    setOtp((prev) => {
      return prev.map((otpValue, index) =>
        inputIndex === index ? value : otpValue
      );
    });
  };


  return (
    <>
      <div className="Appka">
        <h1 className="title">Enter OTP</h1>
        <div className="otp-inputs">
          {otp.map((otpValue, index) => {
            return (
              <input
                type="number"
                key={index}
                value={otpValue}
                ref={(input) => (inputRef.current[index] = input)}
                onKeyUp={(e) => handleChange(e, index)}
              />
            );
          })}
        </div>
        <button
          type="submit"
          disabled={!(otp.join("").length === otp.length)}
          className="submit-button"
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default OtpFormWithUseRef
