import React, { useRef } from "react";

const Start = ({ setUsername }) => {
  const inputRef = useRef();

  const handleCLick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        type="text"
        placeholder="Enter your name"
        className="start_input"
        ref={inputRef}
      />
      <button className="start_button" onClick={handleCLick}>
        Start
      </button>
    </div>
  );
};

export default Start;
