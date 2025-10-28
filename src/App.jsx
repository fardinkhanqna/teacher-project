import React, { useState } from "react";
import { teachers } from "./data/data";


export default function TeacherSearch() {
  const [pin, setPin] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = teachers.find(
      (t) => t["Tpin "] === Number(pin) // match number
    );
    setResult(found ? found : "Not found");
  };

  const handleReset = () => {
    setPin("");
    setResult(null);
  };

  return (
    <div 
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",

      }}
    >
      <h2 style={{ textAlign: "center" }}>Teacher Problem Tracker</h2>
      <form onSubmit={handleSearch}>
        <input
          type="number"
          placeholder="Enter Teacher Pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
          required
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Search
        </button>
      </form>

      {result !== null && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {result === "Not found" ? (
            "Teacher not found 😔"
          ) : (
            <>
              <p>✅ Solved Problems: {result["Grand Total"]}</p>
              <p>🏆 Rank (SL): {result["SL "]}</p>
            </>
          )}
        </div>
      )}

      <button
        onClick={handleReset}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Reset
      </button>
    </div>
  );
}
