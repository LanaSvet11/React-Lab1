import React, { useState } from "react";

function ColorChanger() {
  // Step 2: Add a state property called backgroundColor
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF"); // Initial color (white)

  // Step 3: Create a function to generate a random color
  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  // Step 3: Add an event handler for the button click
  const handleButtonClick = () => {
    // Generate a random color and set it as the new background color
    const randomColor = generateRandomColor();
    setBackgroundColor(randomColor);
  };

  // Step 4: Use the backgroundColor state property to set the background color
  const style = {
    backgroundColor: backgroundColor,
    width: "200px",
    height: "200px",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "24px",
  };

  return (
    <div style={style}>
      <p>Click the button to change the background color!</p>
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  );
}

export default ColorChanger;
