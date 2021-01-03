import React from "react";
import "./homepage.scss"

const HomePage = ()=>(
  <div className = "homepage">
    <div className = "menu-container">
      <div className = "menu-item">
        <div className="content">
          <h1 className="Title"> HATS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
      <div className = "menu-item">
        <div className="content">
          <h1 className="Title"> JACKETS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
      <div className = "menu-item">
        <div className="content">
          <h1 className="Title"> SNEAKERS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
      <div className = "menu-item">
        <div className="content">
          <h1 className="Title"> WOMENS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
      <div className = "menu-item">
        <div className="content">
          <h1 className="Title"> MENS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage