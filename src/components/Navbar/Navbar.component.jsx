import React from "react";
import "./Navbar.styles.css";
import { Button } from "../Button/Button.component";
export const Navbar = () => (
  <div className="container">
    <div className="leftside-container">
      <div className="profileimg">
        <img src="/images/profileimg.jpg" alt="" />
      </div>
      <span className="username">Aditya Prasad</span>
    </div>

    <div className="rightside-container">
      <Button text="Add Device" icon={<i className="fas fa-mobile-alt"></i>} />
      <i className="fas fa-ellipsis-h"></i>
    </div>
  </div>
);
