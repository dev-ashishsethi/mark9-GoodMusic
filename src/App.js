import React, { useState } from "react";
import "./styles.css";

var musicStore = {
  Rock: [
    {
      name: "Purple Haze",
      rating: "4/5"
    },
    {
      name: "Comfortably numb",
      rating: "3/5"
    }
  ],
  Jazz: [
    {
      name: "So What",
      rating: "4/5"
    },
    {
      name: "Take Five",
      rating: "4/5"
    }
  ],
  "Hip Hop": [
    {
      name: "My Name is",
      rating: "4/5"
    },
    {
      name: "In da club",
      rating: "3/5"
    }
  ]
};

export default function App() {
  var [type, setType] = useState("Rock"); // default state set to Rock
  var musicArr = Object.keys(musicStore);

  function clickHandler(item) {
    setType(item);
  }
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "#9F2B68",
          margin: "0rem",
          padding: "1rem"
        }}
      >
        <span style={{ color: "#5D3FD3" }}>🎵</span> Musify
      </h1>
      <small style={{ display: "block", marginTop: "1rem" }}>
        Click on any genre to know my ratings.
      </small>

      {musicArr.map((item) => {
        //taking type of music from music array
        return (
          <button
            onClick={() => clickHandler(item)}
            style={{
              margin: "1rem 0rem 0rem 1rem",
              padding: "0.3rem 0.8rem 0.3rem 0.8rem",
              cursor: "pointer",
              borderRadius: "0.5rem",
              borderColor: "#9F2B68",
              borderStyle: "solid"
            }}
          >
            {/* displaying type of music in button */}
            {item}
          </button>
        );
      })}
      <ul
        style={{
          paddingInlineStart: "0",
          textAlign: "left"
        }}
      >
        {musicStore[type].map((songs) => {
          return (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "50%",
                margin: "auto",
                marginTop: "1rem",
                borderRadius: "0.5rem"
              }}
            >
              <h3>{songs.name}</h3>
              <small>{songs.rating}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
