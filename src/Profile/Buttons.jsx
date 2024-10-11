import React from "react";
import style from  "./Buttons.module.css"; // You can create specific styles for this component

const Buttons = ({ onNext, onPrevious, onSurprise }) => {
  return (
    <div className="button-container">
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
      <button onClick={onSurprise}>Surprise Me</button>
    </div>
  );
};

export default Buttons;
