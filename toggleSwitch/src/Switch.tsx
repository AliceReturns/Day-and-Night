import { useState } from "react";

function Switch() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      style={{
        backgroundColor: isOn ? "Darkslateblue" : "Gold",
        color: isOn ? "Aliceblue" : "Lemonchiffon",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "1em" }}>{isOn ? "NIGHT" : "DAY"}</h1>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          backgroundColor: isOn ? "black" : "white",
          color: isOn ? "white" : "Black",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isOn ? "Turn to Day Mode" : "Turn to Night Mode"}
      </button>
    </div>
  );
}

export default Switch;
