import React from "react";
import "./Cv.css";
import logo from "../assets/123.JPG";

const Cv = () => {
  return (
    <div>
      {/* <div id="toggle"></div>
      <div id="sidebar"> */}
        <ul>
          <li>
            <a>Infor</a>
          </li>
          <li>
            <a>Education</a>
          </li>
          <li>
            <a>Language</a>
          </li>
          <li>
            <a>Experience</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
        </ul>
      </div>

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
                iv Nguyễn Hoàng Duy<span>FE Developer</span>
              </h3>
            </div>
          </div>
          <div className="contentBox">
            <div className="leftSide">
              <h3>Infomation</h3>
              <ul>
                <li>
                  <span className="icon">
                    <ion-icon name="calendar-outline"></ion-icon>
                  </span>
                  <span className="text">31-05-2001</span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </span>
                  <span className="text">0733304029</span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="location-outline"></ion-icon>
                  </span>
                  <span className="text">
                    607 XVNT, 26 Wards, Binh Thanh district
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="mail-outline"></ion-icon>
                  </span>
                  <span className="text">19521425@gm.uit.edu.vn</span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="logo-github"></ion-icon>
                  </span>
                  <span className="text">https://github.com/HoangDuy315</span>
                </li>
              </ul>

              <h3>Education</h3>
              <ul className="education">
                <li>
                  <h5>2007-2012</h5>
                  <h4>Student</h4>
                  <h6>Quang Trung Primary School</h6>
                </li>
                <li>
                  <h5>2012-2016</h5>
                  <h4>Student</h4>
                  <h6>Hung Binh Secondary School</h6>
                </li>
                <li>
                  <h5>2016-2019</h5>
                  <h4>Student</h4>
                  <h6>Ha Huy Tap High School</h6>
                </li>
                <li>
                  <h5>2019-2022</h5>
                  <h4>Student</h4>
                  <h6>University Of Information Technology</h6>
                </li>
              </ul>

              <h3>Language</h3>
              <ul className="language">
                <li>
                  <span className="text">Vietnamese</span>
                  <span className="percent">
                    <div style="width: 100%"></div>
                  </span>
                </li>
                <li>
                  <span className="text">English</span>
                  <span className="percent">
                    <div style="width: 90%"></div>
                  </span>
                </li>
              </ul>

              <h3>Language</h3>
              <ul className="interest">
                <li>
                  <span className="icon">
                    <ion-icon name="game-controller-outline"></ion-icon>
                  </span>
                  Gaming
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="football-outline"></ion-icon>
                  </span>
                  FootBall
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="musical-notes-outline"></ion-icon>
                  </span>
                  Guitar
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="musical-notes-outline"></ion-icon>
                  </span>
                  Traveling
                </li>
              </ul>
            </div>

            <div className="rightSide">
              <div className="about">
                <h3>Profile</h3>
                <p>
                  With the knowledge of what's in the school and courses. I've
                  always wanted to become Front-end Developer. I have a little
                  knowledge of HTML,CSS,JS and a little bit about ReactJs and
                  plus skills I hone everyday. I always want to give my best to
                  help the company grow and archieve for myself
                </p>
              </div>

              <div className="about">
                <h3>Experiance</h3>
                <div className="box">
                  <div className="year_company">
                    <h5>2021</h5>
                    <h5>classNamein</h5>
                  </div>
                  <div className="text">
                    <h4>Sales, Develop Game Staff</h4>
                    <p>
                      Main responsibility: Developing games in English on
                      Powerpoint platform. Introduce, consult and answer
                      customer inquiries via phone, email.
                    </p>
                  </div>
                </div>

                <div className="box">
                  <div className="year_company">
                    <h5>2021</h5>
                    <h5>classNamein</h5>
                  </div>
                  <div className="text">
                    <h4>Sales, Develop Game Staff</h4>
                    <p>
                      Main responsibility: Developing games in English on
                      Powerpoint platform. Introduce, consult and answer
                      customer inquiries via phone, email.
                    </p>
                  </div>
                </div>

                <div className="box">
                  <div className="year_company">
                    <h5>2021</h5>
                    <h5>classNamein</h5>
                  </div>
                  <div className="text">
                    <h4>Sales, Develop Game Staff</h4>
                    <p>
                      Main responsibility: Developing games in English on
                      Powerpoint platform. Introduce, consult and answer
                      customer inquiries via phone, email.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about_skill">
                <h3>Skills</h3>
                <div className="box">
                  <h4>Html</h4>
                  <span className="percent">
                    <div style="width: 90%;"></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Css</h4>
                  <span className="percent">
                    <div style="width: 70%;"></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Js</h4>
                  <span className="percent">
                    <div style="width: 60%;"></div>
                  </span>
                </div>
                <div className="box">
                  <h4>ReactJs</h4>
                  <span className="percent">
                    <div style="width: 75%;"></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Bootstrap 5</h4>
                  <span className="percent">
                    <div style="width: 80%;"></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Tailwindcss</h4>
                  <span className="percent">
                    <div style="width: 50%;"></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Firebase</h4>
                  <span className="percent">
                    <div style="width: 60%;"></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Git Basic</h4>
                  <span className="percent">
                    <div style="width: 90%;"></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Word, Excel, PowerPoint</h4>
                  <span className="percent">
                    <div style="width: 90%;"></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Adobe Photoshops</h4>
                  <span className="percent">
                    <div style="width: 90%;"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
