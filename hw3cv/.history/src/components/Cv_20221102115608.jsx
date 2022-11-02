import React from "react";
import "./Cv.css";
import logo from "../assets/123.JPG";

const Cv = () => {
  return (
    <div>
      <div id="toggle"></div>
      <div id="sidebar">
        <ul>
          <li>
            <a href="#">Infor</a>
          </li>
          <li>
            <a href="#">Education</a>
          </li>
          <li>
            <a href="#">Language</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
        </ul>
      </div>

      <div class="bdy">
        <div class="container">
          <div class="top">
            <div class="imgbx">
              <div class="box">
                <img src={logo} class="duy" alt="" />
              </div>
            </div>
            <div class="profile">
              <h3>
                Nguyễn Hoàng Duy<span>FE Developer</span>
              </h3>
            </div>
          </div>
          <div class="contentBox">
            <div class="leftSide">
              <h3>Infomation</h3>
              <ul>
                <li>
                  <span class="icon">
                    <ion-icon name="calendar-outline"></ion-icon>
                  </span>
                  <span class="text">31-05-2001</span>
                </li>
                <li>
                  <span class="icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </span>
                  <span class="text">0733304029</span>
                </li>
                <li>
                  <span class="icon">
                    <ion-icon name="location-outline"></ion-icon>
                  </span>
                  <span class="text">
                    607 XVNT, 26 Wards, Binh Thanh district
                  </span>
                </li>
                <li>
                  <span class="icon">
                    <ion-icon name="mail-outline"></ion-icon>
                  </span>
                  <span class="text">19521425@gm.uit.edu.vn</span>
                </li>
                <li>
                  <span class="icon">
                    <ion-icon name="logo-github"></ion-icon>
                  </span>
                  <span class="text">https://github.com/HoangDuy315</span>
                </li>
              </ul>

              <h3>Education</h3>
              <ul class="education">
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
              <ul class="language">
                <li>
                  <span class="text">Vietnamese</span>
                  <span class="percent">
                    <div style="width: 100%"></div>
                  </span>
                </li>
                <li>
                  <span class="text">English</span>
                  <span class="percent">
                    <div style="width: 90%"></div>
                  </span>
                </li>
              </ul>

              <h3>Language</h3>
              <ul class="interest">
                <li>
                  <span class="icon">
                    <ion-icon name="game-controller-outline"></ion-icon>
                  </span>
                  Gaming
                </li>
                <li>
                  <span class="icon">
                    <ion-icon name="football-outline"></ion-icon>
                  </span>
                  FootBall
                </li>
                <li>
                  <span class="icon">
                    <ion-icon name="musical-notes-outline"></ion-icon>
                  </span>
                  Guitar
                </li>
                <li>
                  <span class="icon">
                    <ion-icon name="musical-notes-outline"></ion-icon>
                  </span>
                  Traveling
                </li>
              </ul>
            </div>

            <div class="rightSide">
              <div class="about">
                <h3>Profile</h3>
                <p>
                  With the knowledge of what's in the school and courses. I've
                  always wanted to become Front-end Developer. I have a little
                  knowledge of HTML,CSS,JS and a little bit about ReactJs and
                  plus skills I hone everyday. I always want to give my best to
                  help the company grow and archieve for myself
                </p>
              </div>

              <div class="about">
                <h3>Experiance</h3>
                <div class="box">
                  <div class="year_company">
                    <h5>2021</h5>
                    <h5>Classin</h5>
                  </div>
                  <div class="text">
                    <h4>Sales, Develop Game Staff</h4>
                    <p>
                      Main responsibility: Developing games in English on
                      Powerpoint platform. Introduce, consult and answer
                      customer inquiries via phone, email.
                    </p>
                  </div>
                </div>

                <div class="box">
                  <div class="year_company">
                    <h5>2021</h5>
                    <h5>Classin</h5>
                  </div>
                  <div class="text">
                    <h4>Sales, Develop Game Staff</h4>
                    <p>
                      Main responsibility: Developing games in English on
                      Powerpoint platform. Introduce, consult and answer
                      customer inquiries via phone, email.
                    </p>
                  </div>
                </div>

                <div class="box">
                  <div class="year_company">
                    <h5>2021</h5>
                    <h5>Classin</h5>
                  </div>
                  <div class="text">
                    <h4>Sales, Develop Game Staff</h4>
                    <p>
                      Main responsibility: Developing games in English on
                      Powerpoint platform. Introduce, consult and answer
                      customer inquiries via phone, email.
                    </p>
                  </div>
                </div>
              </div>

              <div class="about_skill">
                <h3>Skills</h3>
                <div class="box">
                  <h4>Html</h4>
                  <span class="percent">
                    <div style="width: 90%;"></div>
                  </span>
                </div>
                <div class="box">
                  <h4>Css</h4>
                  <span class="percent">
                    <div style="width: 70%;"></div>
                  </span>
                </div>
                <div class="box">
                  <h4>Js</h4>
                  <span class="percent">
                    <div style="width: 60%;"></div>
                  </span>
                </div>
                <div class="box">
                  <h4>ReactJs</h4>
                  <span class="percent">
                    <div style="width: 75%;"></div>
                  </span>
                </div>
                <div class="box">
                  <h4>Bootstrap 5</h4>
                  <span class="percent">
                    <div style="width: 80%;"></div>
                  </span>
                </div>
                <div class="box">
                  <h4>Tailwindcss</h4>
                  <span class="percent">
                    <div style="width: 50%;"></div>
                  </span>
                </div>
                <div class="box">
                  <h4>Firebase</h4>
                  <span class="percent">
                    <div style="width: 60%;"></div>
                  </span>
                </div>
                <div class="box">
                  <h4>Git Basic</h4>
                  <span class="percent">
                    <div style="width: 90%;"></div>
                  </span>
                </div>
                <div class="box">
                  <h4>Word, Excel, PowerPoint</h4>
                  <span class="percent">
                    <div style="width: 90%;"></div>
                  </span>
                </div>
                <div class="box">
                  <h4>Adobe Photoshops</h4>
                  <span class="percent">
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
