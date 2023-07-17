import React from 'react'

import Calender from "../assets/img/calender.png";
import Avatar from "../assets/img/avatar.png";
import DoctorImg from "../assets/img/doctor-image.png";
import Location from "../assets/img/location.png";
import SendIcon from "../assets/img/send-icon.png";
import MessengerIcon from "../assets/img/messenger-icon.png";
import GraphIcon from "../assets/img/graph-icon.png";
import Guard from "../assets/img/guard.png";
export default function Hero() {
  return (
    <main className="">
          <section className="">
            <div className="row">
              <div className="column-one">
                <div className="main-title">
                  <h1>
                    Protect Your Health <br />
                    And Take Care of <br />
                    Your Health
                  </h1>
                </div>
                <div className="grid">
                  <div className="grid-item-wrapper">
                    <div className="icon">
                      <img src={Calender} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <div className="title"><p>Make An Appointment</p></div>
                      <div className="subtitle">
                        Schedule With Your Favourite Doctor Anytime
                      </div>
                    </div>
                  </div>
                  <div className="grid-item-wrapper">
                    <div className="icon">
                      <img src={Guard} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <div className="title"><p>Health Guarantee Forever</p></div>
                      <div className="subtitle">
                        We Always Provide The Best Warranty For You
                      </div>
                    </div>
                  </div>
                  <div className="grid-item-wrapper">
                    <div className="icon">
                      <img src={Avatar} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <div className="title"><p>Find You Best Doctor</p></div>
                      <div className="subtitle">
                        We Always Provide The Best Warranty For You
                      </div>
                    </div>
                  </div>
                  <div className="grid-item-wrapper">
                    <div className="icon">
                      <img src={Location} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <div className="title"><p>Spread In Various Places</p></div>
                      <div className="subtitle">
                        Now Clinics Are Available In Various Places
                      </div>
                    </div>
                  </div>
                </div>
                <button>Book Now</button>
              </div>
              <div className="column-two position-relative">
                <div className="main-image">
                  <img src={DoctorImg} alt="" />
                </div>
                <div className="position-absolute send-icon">
                  <img src={SendIcon} alt="" />
                </div>
                <div className="position-absolute messenger-icon">
                  <img src={MessengerIcon} alt="" />
                </div>
                <div className="position-absolute graph-icon">
                  <img src={GraphIcon} alt="" />
                </div>
                <div className="position-absolute dot-grid"></div>
              </div>
            </div>
          </section>
        </main>
  )
}
