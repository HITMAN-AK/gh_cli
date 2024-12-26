import React, { useRef, useState } from "react";
import "./css/log.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import firebase from "./firebaseconfig";
import { RecaptchaVerifier } from "firebase/auth";
import "firebase/auth";
function Log() {
  const auth = firebase.auth();
  const navigate = useNavigate();
  const sotp = useRef(null);
  const suname = useRef(null);
  const spass = useRef(null);
  const sphone = useRef(null);
  const luname = useRef(null);
  const lpass = useRef(null);
  const [ccolor, setccolor] = useState("red");
  const [sload, setsload] = useState(false);
  const [otps, setotps] = useState(true);
  const [vers, setvers] = useState(false);
  const [message1, setmessage1] = useState();
  const [message2, setmessage2] = useState();
  const [acc, setacc] = useState();
  const [cuser, setcuser] = useState();
  const [lmess, setlmess] = useState();
  const [ptype, setptype] = useState(false);
  const [lptype, setlptype] = useState(false);
  const [sps, setsps] = useState(false);
  const [lsps, setlsps] = useState(false);
  const [gotp, setgotp] = useState(false);
  const [osm, setosm] = useState(null);
  const [vs, setvs] = useState("none");
  const [oload, setoload] = useState(false);
  const [aotp, setaotp] = useState("inline-block");
  const [isver, setisver] = useState(false);
  const vo = (event) => {
    event.preventDefault();
    if (sotp.current.value === "") {
      setmessage1("FIELD IS");
      setmessage2("EMPTY");
    } else {
      setisver(true);
      const code = sotp.current.value;
      window.confirmationResult
        .confirm(code)
        .then((v) => {
          if (typeof v === "object") {
            setotps(false);
            setvers(true);
          }
        })
        .catch((error) => {
          console.log(error.message);
          setotps(true);
          setmessage1("INCORRECT");
          setmessage2("OTP");
          setvers(false);
          setisver(false);
        });
    }
  };
  const configurecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        onSignInSubmit();
      },
      defaultCountry: "IN",
    });
  };
  const onSignInSubmit = (event) => {
    event.preventDefault();
    if (sphone.current.value === "") {
      setmessage1("FIELD IS");
      setmessage2("EMPTY");
    } else {
      if (sphone.current.value.length > 9) {
        setgotp("none");
        setoload(true);
        configurecaptcha();
        const phoneNumber = "+91" + sphone.current.value;
        const appVerifier = window.recaptchaVerifier;
        firebase
          .auth()
          .signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setvs("inline-block");
            setosm("OTP SENT SUCCESSFULL");
            setaotp("none");
          })
          .catch((error) => {
            setosm(error.message);
            setgotp("inline-block");
          });
      } else {
        setmessage1("INVALID");
        setmessage2("PHONE NUMBER");
      }
    }
  };
  const pshow = (event) => {
    event.preventDefault();
    setptype(true);
    setsps(true);
  };
  const phide = (event) => {
    event.preventDefault();
    setptype(false);
    setsps(false);
  };
  const lpshow = (event) => {
    event.preventDefault();
    setlptype(true);
    setlsps(true);
  };
  const lphide = (event) => {
    event.preventDefault();
    setlptype(false);
    setlsps(false);
  };
  const lp = async (event) => {
    event.preventDefault();
    setsload(true);
    if (luname.current.value !== "") {
      if (lpass.current.value !== "") {
        await axios
          .post("https://gaminghubsever.onrender.com/login", {
            luname: luname.current.value,
            lpass: lpass.current.value,
          })
          .then((res) => {
            const j = res.data;
            console.log(j);
            if (j.name === "bc") {
              sessionStorage.setItem("un", luname.current.value);
              sessionStorage.setItem("ud", j.uuid);
              navigate("/home");
            }
            if (j.name === "ip") {
              setsload(false);
              setlmess("INCORRECT PASSWORD");
            }
            if (j.name === "iu") {
              setsload(false);
              setlmess("INCORRECT USERNAME");
            }
            if (j.name === "bic") {
              setsload(false);
              setlmess("BOTH ARE INCORRECT");
            }
          });
      } else {
        setsload(false);
        setlmess("FIELD IS EMPTY");
      }
    } else {
      setsload(false);
      setlmess("FIELD IS EMPTY");
    }
  };
  const cu = async (event) => {
    event.preventDefault();
    if (suname.current.value !== "") {
      if (suname.current.value.length > 5) {
        await axios
          .post("https://gaminghubsever.onrender.com/cu", {
            suname: suname.current.value,
          })
          .then((res) => {
            if (res.data === "a") {
              setccolor("green");
              setcuser("USERNAME IS AVAILABLE");
            } else {
              setccolor("red");
              setcuser("USERNAME IS NOT AVAILABLE");
            }
          });
      } else {
        setcuser("MUST CONTAIN 6 CHARACTERS");
      }
    } else {
      setcuser("FIELD IS EMPTY");
    }
  };
  const sp = async (event) => {
    event.preventDefault();
    if (suname.current.value !== "") {
      if (spass.current.value !== "") {
        if (sphone.current.value !== "") {
          if (suname.current.value.length > 5) {
            if (spass.current.value.length > 5) {
              if (vers === true) {
                await axios
                  .post("https://gaminghubsever.onrender.com/signup", {
                    suname: suname.current.value,
                    spass: spass.current.value,
                    sphone: sphone.current.value,
                  })
                  .then((res) => {
                    if (res.data === "permit") {
                      console.log("permit");
                      setacc("permit");
                      setmessage1("SIGN-UP SUCCESSFULL");
                      setmessage2("GO TO LOGIN");
                    }
                    if (res.data === "up") {
                      setacc("notpermit");
                      setmessage1("BOTH USERNAME AND");
                      setmessage2("PHONE NUMBER ALREADY EXIST");
                    }
                    if (res.data === "u") {
                      setacc("notpermit");
                      setmessage1("USERNAME IS");
                      setmessage2("ALREADY EXIST");
                    }
                    if (res.data === "p") {
                      setacc("notpermit");
                      setmessage1("PHONE NUMBER IS");
                      setmessage2("ALREADY EXIST");
                    }
                  });
              } else {
                setmessage1("PHONE NUMBER");
                setmessage2("IS NOT VERIFIED");
              }
            } else {
              setmessage1("PASSWORD MUST");
              setmessage2("CONTAINS ATLEAST 6 CHARACTER");
            }
          } else {
            setmessage1("USERNAME MUST");
            setmessage2("CONTAINS ATLEAST 6 CHARACTER");
          }
        } else {
          setmessage1("SOME FIELD");
          setmessage2("IS EMPTY");
        }
      } else {
        setmessage1("SOME FIELD");
        setmessage2("IS EMPTY");
      }
    } else {
      setmessage1("SOME FIELD");
      setmessage2("IS EMPTY");
    }
  };
  return (
    <div className="lbody">
      <h1 id="logh1">GAMING HUB</h1>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={lp}>
            <label htmlFor="chk" aria-hidden="true">
              LOGIN
            </label>
            <input
              className="linput"
              type="text"
              name="username"
              placeholder="USER NAME"
              required=""
              ref={luname}
            />
            <input
              className="linput"
              type={lptype ? "text" : "password"}
              name="password"
              placeholder="PASSWORD"
              required=""
              ref={lpass}
            />
            {lsps ? (
              <button id="la" onClick={lphide}>
                HIDE
              </button>
            ) : (
              <button id="la" onClick={lpshow}>
                SHOW
              </button>
            )}
            {sload ? (
              <div id="logload"></div>
            ) : (
              <button id="lbutton">LOGIN</button>
            )}
            <div className="amess">{lmess}</div>
            <Link to="/fp" id="forp">
              forgot password ?
            </Link>
          </form>
        </div>
        {acc !== "permit" ? (
          <div className="login">
            <form onSubmit={sp}>
              <label htmlFor="chk" aria-hidden="true">
                SIGN UP
              </label>
              <input
                id="suinput"
                type="text"
                name="username"
                placeholder="USER NAME"
                required=""
                ref={suname}
              />
              <button className="ca" onClick={cu}>
                CHECK
              </button>
              <h6 id="am" style={{ color: `${ccolor}` }}>
                {cuser}
              </h6>
              <input
                id="spinput"
                type={ptype ? "text" : "password"}
                name="password"
                placeholder="PASSWORD"
                required=""
                ref={spass}
              />
              {sps ? (
                <button className="ca" onClick={phide}>
                  HIDE
                </button>
              ) : (
                <button className="ca" onClick={pshow}>
                  SHOW
                </button>
              )}

              <input
                className="sninput"
                type="number"
                name="phone"
                placeholder="PHONE NUMBER"
                required=""
                ref={sphone}
              />
              {oload ? (
                <div className="mload" style={{ display: `${aotp}` }}></div>
              ) : (
                <button
                  className="ca"
                  onClick={onSignInSubmit}
                  style={{ display: `${gotp}` }}
                >
                  GET OTP
                </button>
              )}
              <div className="osm">{osm}</div>
              {otps ? (
                <div>
                  {isver ? (
                    <div className="vload"></div>
                  ) : (
                    <input
                      id="eotp"
                      className="sninput"
                      type="number"
                      name="phone"
                      placeholder="ENTER OTP"
                      required=""
                      ref={sotp}
                    />
                  )}
                </div>
              ) : (
                <div className="sver">VERIFIED</div>
              )}
              {otps ? (
                <div>
                  {isver ? (
                    <div style={{ display: "none" }}></div>
                  ) : (
                    <button
                      id="verify"
                      onClick={vo}
                      style={{ display: `${vs}` }}
                    >
                      VERIFY
                    </button>
                  )}
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
              <div id="sign-in-button" style={{ display: "none" }}></div>
              <button id="sbutton">SIGN UP</button>
              <div className="emess">
                {message1} {message2}
              </div>
            </form>
          </div>
        ) : (
          <div className="login">
            <form onSubmit={sp}>
              <label htmlFor="chk" aria-hidden="true">
                SIGN UP
              </label>
              <div className="amess">
                {message1}
                <br></br>
                {message2}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
export default Log;
