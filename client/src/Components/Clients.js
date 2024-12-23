import React, { useEffect, useState } from "react";
import "./Styles/Clients.css";

function Clients() {
  return (
    <main>
      {/* First Container */}
      <div className="container2">
        <div className="container2-1">
          <img
            src="https://www.code-x.in/images/client/Tasalli.jpeg"
            alt="Client 1"
          />
        </div>
        <div className="container2-2">
          <img
            width="250px"
            src="https://www.code-x.in/images/client/MABFM.jpg"
            alt="Client 2"
          />
        </div>
        <div className="container2-3">
          <img
            width="270px"
            src="https://www.code-x.in/images/client/ITRC.jpg"
            alt="Client 3"
          />
        </div>
        <div className="container2-4">
          <img
            src="https://www.code-x.in/images/client/Janta%20cable.jpg"
            alt="Client 4"
          />
        </div>
      </div>

      {/* Second Container */}
      <div className="container3">
        <div className="container3-1">
          <img
            width="250px"
            src="https://www.code-x.in/images/client/Anmol.jpg"
            alt="Client 5"
          />
        </div>
        <div className="container3-2">
          <img
            width="250px"
            src="https://www.code-x.in/images/client/Apollo%20MotorsSMALL.jpg"
            alt="Client 6"
          />
        </div>
        <div className="container3-3">
          <img
            src="https://www.code-x.in/images/client/Mantri_Motors_or%20Small.jpg"
            alt="Client 7"
          />
        </div>
        <div className="container3-4">
          <img
            width="250px"
            src="https://www.code-x.in/images/client/Carsqure.jpg"
            alt="Client 8"
          />
        </div>
      </div>

      {/* Third Container */}
      <div className="container4">
        <div className="container4-1">
          <img
            width="250px"
            src="https://www.code-x.in/images/client/Globe%20Infotech.jpg"
            alt="Client 9"
          />
        </div>
        <div className="container4-2">
          <img
            width="250px"
            src="https://www.code-x.in/images/client/Tresearch.png"
            alt="Client 10"
          />
        </div>
        <div className="container4-3">
          <img
            width="250px"
            src="https://www.code-x.in/images/client/iEARN_logo.jpg"
            alt="Client 11"
          />
        </div>
        <div className="container4-4">
          <img
            width="90px"
            src="https://www.code-x.in/images/client/Kaamdhenu.png"
            alt="Client 12"
          />
        </div>
      </div>

      {/* Fourth Container */}
      <div className="container5">
        <div className="container5-1">
          <img
            width="250px"
            src="https://www.code-x.in/images/client/Unique.png"
            alt="Client 13"
          />
        </div>
        <div className="container5-2">
          <img
            width="250px"
            src="https://www.code-x.in/images/client/MJ.png"
            alt="Client 14"
          />
        </div>
      </div>
    </main>
  );
}

export default Clients;
