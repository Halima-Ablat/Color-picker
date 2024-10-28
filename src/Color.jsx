import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColor(event) {
    setColor(event.target.value);
  }
  return (
    <div>
      <h2>Color Picker</h2>
      <div style={{ backgroundColor: color }}>
        <p>Selectd Color: {color}</p>
      </div>
      <label>Select a Color: </label>
      <input type="color" value={color} onChange={handleColor} />
    </div>
  );
}
export default Color;
