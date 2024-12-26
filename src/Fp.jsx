import React, { useRef, useState } from "react";
import "../src/css/for.css";
import axios from "axios";
import firebase from "./firebaseconfig";
import { RecaptchaVerifier } from "firebase/auth";
import "firebase/auth";
import { useNavigate } from "react-router-dom";
function Fp() {
  const [cps, setcps] = useState(false);
  const [mess2, setmess2] = useState();
  const [oload, setoload] = useState(false);
  const [vload, setvload] = useState(false);
  const [votp, setvotp] = useState(false);
  const [ptype, setptype] = useState(false);
  const [uname, setuname] = useState();
  const pass = useRef(null);
  const [sp, setsp] = useState(false);
  const [go, setgo] = useState(false);
  const [vs, setvs] = useState("none");
  const auth = firebase.auth();
  const us = useRef(null);
  const code = useRef(null);
  const [mess1, setmess1] = useState();
  const [mess, setmess] = useState();
  const [fp, setfp] = useState(false);
  const [phone, setphone] = useState();
  const [sphone, setsphone] = useState();
  const navigate = useNavigate();
  const configurecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        gotp();
      },
      defaultCountry: "IN",
    });
  };
  const gotp = (event) => {
    event.preventDefault();
    setoload(true);
    configurecaptcha();
    const phoneNumber = "+91" + phone;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setvs("inline-block");
        setgo(true);
        setoload(false);
      })
      .catch((error) => {
        setmess1("OTP SENT FAILED");
        setoload(false);
        console.log(error.message);
      });
  };
  const uc = async (event) => {
    event.preventDefault();
    if (us.current.value === "") {
      setmess("FIELD IS EMPTY");
    } else {
      await axios
        .post("https://gaminghubsever.onrender.com/foruc", {
          username: us.current.value,
        })
        .then((res) => {
          if (res.data.status === "sc") {
            setuname(us.current.value);
            let ld = res.data.phone;
            let sd = ld.toString();
            setsphone(sd.slice(-4));
            setphone(res.data.phone);
            setfp(true);
          } else {
            setmess("INVALID USERNAME");
          }
        });
    }
  };
  const vo = (event) => {
    event.preventDefault();
    setvload(true);
    if (code.current.value === "") {
      setvload(false);
      setmess1("FIELD IS EMPTY");
    } else {
      const c = code.current.value;
      window.confirmationResult
        .confirm(c)
        .then((v) => {
          if (typeof v === "object") {
            setvload(false);
            setvotp(true);
          }
        })
        .catch((error) => {
          setvload(false);
          setmess1("INCORRECT OTP");
          console.log(error.message);
        });
    }
  };
  const shp = () => {
    setptype(true);
    setsp(true);
  };
  const hp = () => {
    setptype(false);
    setsp(false);
  };
  const nps = async () => {
    if (pass.current.value.length > 5) {
      await axios
        .post("https://gaminghubsever.onrender.com/cnp", {
          username: uname,
          pass: pass.current.value,
        })
        .then((res) => {
          if (res.data.status === "sc") {
            setcps(true);
          } else {
            setmess2("PASSWORD UPDATE FAILED");
          }
        });
    } else {
      setmess2("MINIMUM 6 CHARACTER REQUIRED");
    }
  };
  const gl = () => {
    navigate("/");
  };
  return (
    <div className="formain">
      {votp ? (
        <div className="fpav">
          {cps ? (
            <div>
              <div id="psc">PASSWORD SUCCESSFULLY CHANGED</div>
              <div className="fpvb">
                <button onClick={gl}>GO TO LOGIN</button>
              </div>
            </div>
          ) : (
            <div>
              <input
                type={ptype ? "text" : "password"}
                placeholder="ENTER YOUR NEW PASSWORD"
                ref={pass}
              />
              {sp ? (
                <button id="cnh" onClick={hp}></button>
              ) : (
                <button id="cns" onClick={shp}></button>
              )}
              <div className="fpvb">
                <button onClick={nps}>SUBMIT</button>
              </div>
              <div id="cnpm">{mess2}</div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {fp ? (
            <div className="fpv">
              <div id="fpt">
                THE OTP WILL BE SENT TO THIS MOBILE NUMBER XXXX XX
                {sphone}
              </div>
              {oload ? (
                <div id="foload"></div>
              ) : (
                <div className="fpvb">
                  {go ? (
                    <div id="osend">otp has been sent</div>
                  ) : (
                    <button onClick={gotp}>GET OTP</button>
                  )}
                </div>
              )}
              <div>
                {vload ? (
                  <div id="fvload"></div>
                ) : (
                  <div>
                    <input
                      className="fpvb"
                      type="text"
                      placeholder="ENTER OTP"
                      ref={code}
                    />
                    <div className="fpvb">
                      <button onClick={vo} style={{ display: `${vs}` }}>
                        VERIFY
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div id="fpvm">{mess1}</div>
              <div id="sign-in-button" style={{ display: "none" }}></div>
            </div>
          ) : (
            <form onSubmit={uc}>
              <div className="forbody">
                <input
                  className="sm"
                  type="text"
                  placeholder="ENTER YOUR USERNAME"
                  ref={us}
                />
                <div id="forbut" className="sm">
                  <button type="submit" onClick={uc}>
                    SUBMIT
                  </button>
                </div>
                <div className="sm" id="formess">
                  {mess}
                </div>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
export default Fp;
