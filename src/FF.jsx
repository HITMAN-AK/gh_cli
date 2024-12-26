import React, { useEffect, useRef, useState } from "react";
import "../src/css/ff.css";
import axios from "axios";
import "../src/css/pay.css";
import { Link, useNavigate } from "react-router-dom";
import Load from "./Load";
function FF({ fs1, fs2, fsd }) {
  const [jstate, setjstate] = useState();
  const [pamount, setpamount] = useState();
  const [gtype, setgtype] = useState();
  const [jsbn1, setjsbn1] = useState(false);
  const [jsbn2, setjsbn2] = useState(false);
  const [jsdbn, setjsdbn] = useState(false);
  const [pstatus, setpstatus] = useState();
  const gname = useRef(null);
  const gid = useRef(null);
  const [fsc1, setfsc1] = useState();
  const [fsc2, setfsc2] = useState();
  const [fsdc, setfsdc] = useState();
  const [joined, setjoined] = useState();
  const [ps1, setps1] = useState(false);
  const [ps2, setps2] = useState(false);
  const [psd, setpsd] = useState(false);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fjstatus = async () => {
      const un = sessionStorage.getItem("un");
      await axios
        .post("https://gaminghubsever.onrender.com/fjstatus", {
          username: un,
        })
        .then((res) => {
          if (res.data.count[0] < 50) {
            setfsc1(res.data.count[0]);
          } else {
            setjsbn1(true);
            setfsc1(res.data.count[0]);
            setjoined("MATCH FULL");
          }
          if (res.data.count[1] < 50) {
            setfsc2(res.data.count[1]);
          } else {
            setjsbn2(true);
            setfsc2(res.data.count[1]);
            setjoined("MATCH FULL");
          }
          if (res.data.count[2] < 50) {
            setfsdc(res.data.count[2]);
          } else {
            setjsdbn(true);
            setfsdc(res.data.count[2]);
            setjoined("MATCH FULL");
          }
          if (res.data.fsolo1 === "av") {
            setjsbn1(true);
            setjoined("JOINED");
          }
          if (res.data.fsolo2 === "av") {
            setjsbn2(true);
            setjoined("JOINED");
          }
          if (res.data.fsquad === "av") {
            setjsdbn(true);
            setjoined("JOINED");
          }
        })
        .then(() => {
          setloading(false);
        });
    };
    fjstatus();
  }, []);
  const pc = () => {
    setjstate(false);
  };
  const pay = async () => {
    setloading(true);
    if (gtype === "fsolo1") {
      if (gname.current.value !== "") {
        if (gid.current.value !== "") {
          const un = sessionStorage.getItem("un");
          await axios
            .post("https://gaminghubsever.onrender.com/fsolo1", {
              username: un,
              gamename: gname.current.value,
              gameid: gid.current.value,
            })
            .then((res) => {
              if (res.data.ws === "success") {
                window.location.reload(false);
                navigate("/ff");
              } else {
                setloading(false);
                setpstatus("LOW FUND,MAKE DEPOSIT");
              }
            });
        } else {
          setloading(false);
          setpstatus("FIELD IS EMPTY");
        }
      } else {
        setloading(false);
        setpstatus("FIELD IS EMPTY");
      }
    }
    if (gtype === "fsolo2") {
      if (gname.current.value !== "") {
        if (gid.current.value !== "") {
          const un = sessionStorage.getItem("un");
          await axios
            .post("https://gaminghubsever.onrender.com/fsolo2", {
              username: un,
              gamename: gname.current.value,
              gameid: gid.current.value,
            })
            .then((res) => {
              if (res.data.ws === "success") {
                window.location.reload(false);
                navigate("/ff");
              } else {
                setloading(false);
                setpstatus("LOW FUND,MAKE DEPOSIT");
              }
            });
        } else {
          setloading(false);
          setpstatus("FIELD IS EMPTY");
        }
      } else {
        setloading(false);
        setpstatus("FIELD IS EMPTY");
      }
    }
    if (gtype === "fsquad") {
      if (gname.current.value !== "") {
        if (gid.current.value !== "") {
          const un = sessionStorage.getItem("un");
          await axios
            .post("https://gaminghubsever.onrender.com/fsquad", {
              username: un,
              gamename: gname.current.value,
              gameid: gid.current.value,
            })
            .then((res) => {
              if (res.data.ws === "success") {
                window.location.reload(false);
                navigate("/ff");
              } else {
                setloading(false);
                setpstatus("LOW FUND,MAKE DEPOSIT");
              }
            });
        } else {
          setloading(false);
          setpstatus("FIELD IS EMPTY");
        }
      } else {
        setloading(false);
        setpstatus("FIELD IS EMPTY");
      }
    }
  };
  const fsolo1 = async () => {
    setpamount("20");
    setjstate(true);
    setgtype("fsolo1");
  };
  const fsolo2 = async () => {
    setpamount("20");
    setjstate(true);
    setgtype("fsolo2");
  };
  const fsquad = async () => {
    setpamount("20");
    setjstate(true);
    setgtype("fsquad");
  };
  const fs1price = async () => {
    setps1(true);
  };
  const ps1c = async () => {
    setps1(false);
  };
  const fs2price = async () => {
    setps2(true);
  };
  const ps2c = async () => {
    setps2(false);
  };
  const fsdprice = async () => {
    setpsd(true);
  };
  const psdc = async () => {
    setpsd(false);
  };
  return jstate ? (
    <div id="pmain">
      {loading ? (
        <Load />
      ) : (
        <div id="jp">
          <div id="tc">
            <div id="phc">
              <h2 id="phead">TERMS AND CONDITIONS</h2>
              <button id="pc" onClick={pc}>
                X
              </button>
            </div>
            <ol>
              <li>
                <span className="rli">
                  The room id and password will be sent to your registered
                  mobile number,Before 10min of the match.
                </span>
              </li>
              <li>
                <span className="rli">
                  The player game level must be 25 or above.If you join the
                  match with below level no cash price will be provided.
                </span>
              </li>
              <li>
                <span className="rli">Do not team up with any players.</span>
              </li>
              <li>
                <span className="rli">
                  The resgistered game name should be same as your real game
                  name,if its being different no cash prize will be provided.
                </span>
              </li>
              <li>
                <span className="rli">Do not use any hacks.</span>
              </li>
              <li>
                <span className="rli">
                  Do not share the room id and password.
                </span>
              </li>
              <li>
                <span className="rli">
                  If you have any payment issue after the result of the
                  match,you should contact helpline within 24hrs because the
                  result of the matches will be cleared within 24hrs.
                </span>
              </li>
              <li>
                <span className="rli">
                  If you violate any of these terms and conditions,your account
                  will be banned.
                </span>
              </li>
              <li>
                <span className="rli">No refund policy</span>
              </li>
            </ol>
          </div>
          <div id="jb">
            <input
              className="ptext"
              type="text"
              placeholder="ENTER THE NAME IN GAME"
              ref={gname}
            />
            <input
              className="ptext"
              type="text"
              placeholder="ENTER GAME ID"
              ref={gid}
            />
            <button id="pay" onClick={pay}>
              PAY={pamount}
            </button>
            <div id="pstatus">{pstatus}</div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="fmain">
      {loading ? (
        <Load />
      ) : (
        <>
          {ps1 ? (
            <div className="ps">
              <h4>WINNER : {fs1.w}</h4>
              <h4>RUNNER : {fs1.r}</h4>
              <h4>PER KILL : {fs1.k}</h4>
              <button onClick={ps1c}>CLOSE</button>
            </div>
          ) : (
            <div className="fdiv" id="fsolo">
              <div className="fimage"></div>
              <div className="fdown1">
                <h4>
                  TYPE : <span>{fs1.type}</span>
                </h4>
                <h4>
                  MAP : <span>{fs1.map}</span>
                </h4>
                <h4>
                  DATE : <span>{fs1.date}</span>
                </h4>
                <h4>
                  TIME : <span>{fs1.time}</span>
                </h4>
              </div>
              <div className="fdown2">
                <div id="fp">
                  <div id="ifp" style={{ width: `${fsc1 * 2}%` }}></div>
                </div>
                <h4 id="fpn">{fsc1}/50</h4>
                <Link className="bl" onClick={fs1price}>
                  PRICE
                </Link>
                {jsbn1 === false ? (
                  <button className="bjoin" onClick={fsolo1}>
                    JOIN
                  </button>
                ) : (
                  <div className="bjoined">{joined}</div>
                )}
              </div>
            </div>
          )}
          {ps2 ? (
            <div className="ps">
              <h4>WINNER : {fs2.w}</h4>
              <h4>RUNNER : {fs2.r}</h4>
              <h4>PER KILL : {fs2.k}</h4>
              <button onClick={ps2c}>CLOSE</button>
            </div>
          ) : (
            <div className="fdiv" id="fduo">
              <div className="fimage"></div>
              <div className="fdown1">
                <h4>
                  TYPE : <span>{fs2.type}</span>
                </h4>
                <h4>
                  MAP : <span>{fs2.map}</span>
                </h4>
                <h4>
                  DATE : <span>{fs2.date}</span>
                </h4>
                <h4>
                  TIME : <span>{fs2.time}</span>
                </h4>
              </div>
              <div className="fdown2">
                <div id="fp">
                  <div id="ifp" style={{ width: `${fsc2 * 2}%` }}></div>
                </div>
                <h4 id="fpn">{fsc2}/50</h4>
                <Link className="bl" onClick={fs2price}>
                  PRICE
                </Link>
                {jsbn2 === false ? (
                  <button className="bjoin" onClick={fsolo2}>
                    JOIN
                  </button>
                ) : (
                  <div className="bjoined">{joined}</div>
                )}
              </div>
            </div>
          )}
          {psd ? (
            <div className="ps">
              <h4>WINNER : {fsd.w}(EACH PLAYER)</h4>
              <h4>RUNNER : {fsd.r}(EACH PLAYER)</h4>
              <h4>PER KILL : {fsd.k}</h4>
              <button onClick={psdc}>CLOSE</button>
            </div>
          ) : (
            <div className="fdiv" id="fsquad">
              <div className="fimage"></div>
              <div className="fdown1">
                <h4>
                  TYPE : <span>{fsd.type}</span>
                </h4>
                <h4>
                  MAP : <span>{fsd.map}</span>
                </h4>
                <h4>
                  DATE : <span>{fsd.date}</span>
                </h4>
                <h4>
                  TIME : <span>{fsd.time}</span>
                </h4>
              </div>
              <div className="fdown2">
                <div id="fp">
                  <div id="ifp" style={{ width: `${fsdc * 2}%` }}></div>
                </div>
                <h4 id="fpn">{fsdc}/50</h4>
                <Link className="bl" onClick={fsdprice}>
                  PRICE
                </Link>
                {jsdbn === false ? (
                  <button className="bjoin" onClick={fsquad}>
                    JOIN
                  </button>
                ) : (
                  <div className="bjoined">{joined}</div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default FF;
