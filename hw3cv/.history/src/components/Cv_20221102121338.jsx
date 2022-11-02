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
                  <span className="icon">
                    <BsCalendarCheck />
                  </span>
                  <span className="text">31-05-2001</span>
                </li>
                <li>
                  <span className="icon">
                    <BsPhone />
                  </span>
                  <span className="text">0733304029</span>
                </li>
                <li>
                  <span className="icon">
                    <GoLocation />
                  </span>
                  <span className="text">
                    607 XVNT, 26 Wards, Binh Thanh district
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <FiMail />
                  </span>
                  <span className="text">19521425@gm.uit.edu.vn</span>
                </li>
                <li>
                  <span className="icon">
                    <BsGithub />
                  </span>
                  <span className="text">https://github.com/HoangDuy315</span>
                </li>
              </ul>

              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
