import "./App.css";
import profileImg from "./assets/profile.png";
import { initialData } from "./initialData";
import React, { useState } from "react";
import { colors } from "./utils/colors";
function App() {
  const [activeNav, setActiveNav] = useState("Programming");
  return (
    <div className="App">
      <div className="side-bar">
        <div className="profile-section">
          <img className="profile-image" src={profileImg} alt="" />
          <div className="user-name">Mobashir Farhan</div>
        </div>
        <div className="nav-container">
          {initialData.map((item) => {
            return (
              <div
                key={item.topic}
                onClick={() => setActiveNav(item.topic)}
                className="nav-items"
                style={
                  activeNav === item.topic
                    ? {
                        backgroundColor: colors[item.topic],
                        color: "white",
                        borderColor: colors[item.topic],
                        borderRadius: "30px",
                      }
                    : null
                }
              >
                <h5 className="nav-link">{item.topic}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div className="main">
        {initialData.map((item) => {
          if (item.topic === activeNav) {
            return (
              <div className="header-and-topic">
                <img src={item.header} alt="" className="header-image" />
                <h1 className="topic-name">{item.topic}</h1>
              </div>
            );
          }
          return "";
        })}
        <div className="book-container">
          {initialData
            .filter((item) => item.topic === activeNav)[0]
            .books.map((book) => {
              return (
                <div key={book.name} className="book">
                  <img src={book.bookImage} alt="" className="book-image" />
                  <h3 className="book-name">{book.name}</h3>
                  <small className="author-name">{"by " + book.author}</small>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
