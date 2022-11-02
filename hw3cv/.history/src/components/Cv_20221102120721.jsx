import React from "react";
import "./Cv.css";
import logo from "../assets/123.JPG";
import { BsCalendarCheck, BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Cv = () => {
  return (
    <div className="bdy">
      <div className="container">
        <div className="top">
          <div className="imgbx">
            <div className="box">
              <img src={logo} className="duy" alt="" />
            </div>
          </div>
          <div className="profile">
            <h3>
              Nguyen Hoang Duy <br /> <span>FE Developer</span>
            </h3>
          </div>

          <div className="contentBox">
            <div className="leftSide">
              <h3>Information</h3>
              <ul>
                <li>
                  <span></span>
                  <span></span>
                </li>
                <li>
                  <span></span>
                  <span></span>
                </li>
                <li>
                  <span></span>
                  <span></span>
                </li>
                <li>
                  <span></span>
                  <span></span>
                </li>
                <li>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
