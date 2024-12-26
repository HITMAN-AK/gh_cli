import React, { useState } from "react";
import axios from "axios";
import "../src/css/wit.css";
import "../src/css/witc.css";
import Load from "./Load";
function Wit() {
  const [sf, setsf] = useState(false);
  const [messagec, setmessagec] = useState();
  const [messagec2, setmessagec2] = useState();
  const [message, setmessage] = useState();
  const [loading, setLoading] = useState(false);
  const [wc, setwc] = useState(false);
  const [wam, setwam] = useState(null);
  const [wupi, setwupi] = useState(null);
  const wac = async () => {
    setLoading(true);
    setsf(true);
    await axios
      .post("https://gaminghubsever.onrender.com/wd", {
        username: sessionStorage.getItem("un"),
        upiid: wupi,
        amount: wam,
      })
      .then((res) => {
        if (res.data.status === "sc") {
          setmessagec("WITHDRAW SUCCESSFULL");
          setmessagec2(
            ",YOUR AMOUNT WILL BE CREDITED WITHIN 24 hrs."
          );
          setLoading(false);
        } else {
          setmessagec("INSUFFICIENT BALANCE");
          setmessagec2("");
          setLoading(false);
        }
      });
  };
  const wa = async () => {
    if (wupi === null) {
      if (wam === null) {
        setmessage("SOME FIELD IS EMPTY");
      } else {
        setmessage("SOME FIELD IS EMPTY");
      }
    } else {
      if (wam === null) {
        setmessage("SOME FIELD IS EMPTY");
      } else {
        if (wam < 20) {
          setmessage("MINIMUM MITHDRAW IS 20");
        } else {
          setwc(true);
        }
      }
    }
  };
  const wacn = () => {
    setwc(false);
  };
  const upi = (event) => {
    setwupi(event.target.value);
  };
  const amnt = (event) => {
    setwam(event.target.value);
  };
  const wclose = () => {
    window.location.reload();
  };
  return wc ? (
    <div className="wcmain">
      {loading ? (
        <Load />
      ) : (
        <div className="wcbody">
          {sf ? (
            <div>
              <div id="wsf">
                {messagec} <span>{messagec2}</span>
              </div>
              <button id="wcc" onClick={wclose}>
                CLOSE
              </button>
            </div>
          ) : (
            <div>
              <div className="cynm" id="cnf">
                ARE YOU SURE TO WITHDRAW <span>{wam}</span> ?
              </div>
              <button onClick={wac} id="wy" className="cynm">
                YES
              </button>
              <button className="cynm" id="wno" onClick={wacn}>
                NO
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  ) : (
    <div className="wmain">
      <div className="wbody">
        <div className="wh">WITHDRAW</div>
        <input
          id="wupi"
          type="text"
          placeholder="ENTER UPI ID "
          className="lass"
          onChange={upi}
        />
        <div id="we" className="lass">
          <span>Eg : </span>123456789@paytm
        </div>
        <input
          className="lass"
          type="number"
          placeholder="ENTER THE AMOUNT"
          onChange={amnt}
        />
        <button className="lass" id="wsubmit" onClick={wa}>
          SUBMIT
        </button>
        <div className="lass" id="wstatus">
          {message}
        </div>
      </div>
    </div>
  );
}
export default Wit;
