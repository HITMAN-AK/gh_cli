import React, { useEffect, useRef, useState } from "react";
import "../src/css/bgmi.css";
import axios from "axios";
import "../src/css/pay.css";
import { Link, useNavigate } from "react-router-dom";
import Load from "./Load";
function Bgmi({ bs1, bs2, bsd }) {
  const [jstate, setjstate] = useState(false);
  const [pamount, setpamount] = useState();
  const [gtype, setgtype] = useState();
  const [jsbn1, setjsbn1] = useState(false);
  const [jsbn2, setjsbn2] = useState(false);
  const [jsdbn, setjsdbn] = useState(false);
  const [pstatus, setpstatus] = useState();
  const gname = useRef(null);
  const gid = useRef(null);
  const [bsc1, setbsc1] = useState();
  const [bsc2, setbsc2] = useState();
  const [bsdc, setbsdc] = useState();
  const [joined, setjoined] = useState();
  const [ps1, setps1] = useState(false);
  const [ps2, setps2] = useState(false);
  const [psd, setpsd] = useState(false);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const bjstatus = async () => {
      const un = sessionStorage.getItem("un");
      await axios
        .post("https://gaminghubsever.onrender.com/bjstatus", {
          username: un,
        })
        .then((res) => {
          if (res.data.count[0] < 100) {
            setbsc1(res.data.count[0]);
          } else {
            setjsbn1(true);
            setbsc1(res.data.count[0]);
            setjoined("MATCH FULL");
          }
          if (res.data.count[1] < 100) {
            setbsc2(res.data.count[1]);
          } else {
            setjsbn2(true);
            setbsc2(res.data.count[1]);
            setjoined("MATCH FULL");
          }
          if (res.data.count[2] < 100) {
            setbsdc(res.data.count[2]);
          } else {
            setjsdbn(true);
            setbsdc(res.data.count[2]);
            setjoined("MATCH FULL");
          }
          if (res.data.bsolo1 === "av") {
            setjsbn1(true);
            setjoined("JOINED");
          }
          if (res.data.bsolo2 === "av") {
            setjsbn2(true);
            setjoined("JOINED");
          }
          if (res.data.bsquad === "av") {
            setjsdbn(true);
            setjoined("JOINED");
          }
        })
        .then(() => {
          setloading(false);
        });
    };
    bjstatus();
  }, []);
  const pc = () => {
    setjstate(false);
  };
  const pay = async () => {
    setloading(true);
    if (gtype === "bsolo1") {
      if (gname.current.value !== "") {
        if (gid.current.value !== "") {
          const un = sessionStorage.getItem("un");
          await axios
            .post("https://gaminghubsever.onrender.com/bsolo1", {
              username: un,
              gamename: gname.current.value,
              gameid: gid.current.value,
            })
            .then((res) => {
              if (res.data.ws === "success") {
                window.location.reload(false);
                navigate("/bgmi");
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
    if (gtype === "bsolo2") {
      if (gname.current.value !== "") {
        if (gid.current.value !== "") {
          const un = sessionStorage.getItem("un");
          await axios
            .post("https://gaminghubsever.onrender.com/bsolo2", {
              username: un,
              gamename: gname.current.value,
              gameid: gid.current.value,
            })
            .then((res) => {
              if (res.data.ws === "success") {
                window.location.reload(false);
                navigate("/bgmi");
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
    if (gtype === "bsquad") {
      if (gname.current.value !== "") {
        if (gid.current.value !== "") {
          const un = sessionStorage.getItem("un");
          await axios
            .post("https://gaminghubsever.onrender.com/bsquad", {
              username: un,
              gamename: gname.current.value,
              gameid: gid.current.value,
            })
            .then((res) => {
              if (res.data.ws === "success") {
                window.location.reload(false);
                navigate("/bgmi");
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
  const bsolo1 = async () => {
    setpamount("10");
    setjstate(true);
    setgtype("bsolo1");
  };
  const bsolo2 = async () => {
    setpamount("10");
    setjstate(true);
    setgtype("bsolo2");
  };
  const bsquad = async () => {
    setpamount("10");
    setjstate(true);
    setgtype("bsquad");
  };
  const bs1price = async () => {
    setps1(true);
  };
  const ps1c = async () => {
    setps1(false);
  };
  const bs2price = async () => {
    setps2(true);
  };
  const ps2c = async () => {
    setps2(false);
  };
  const bsdprice = async () => {
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
              </button>{" "}
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
              PAY=<span id="pamnt">{pamount}</span>
            </button>
            <div id="pstatus">{pstatus}</div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="bmain">
      {loading ? (
        <Load />
      ) : (
        <>
          {ps1 ? (
            <div className="ps">
              <h4>WINNER : {bs1.w}</h4>
              <h4>RUNNER : {bs1.r}</h4>
              <h4>PER KILL : {bs1.k}</h4>
              <button onClick={ps1c}>CLOSE</button>
            </div>
          ) : (
            <div className="bdiv" id="bsolo">
              <div className="bimage"></div>
              <div className="bdown1">
                <h4>
                  TYPE : <span>{bs1.type}</span>
                </h4>
                <h4>
                  MAP : <span>{bs1.map}</span>
                </h4>
                <h4>
                  DATE : <span>{bs1.date}</span>
                </h4>
                <h4>
                  TIME : <span>{bs1.time}</span>
                </h4>
              </div>
              <div className="bdown2">
                <div id="bp">
                  <div id="ibp" style={{ width: `${bsc1}%` }}></div>
                </div>
                <h4 id="bpn">{bsc1}/100</h4>
                <Link className="bl" onClick={bs1price}>
                  PRICE
                </Link>
                {jsbn1 === false ? (
                  <button className="bjoin" onClick={bsolo1}>
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
              <h4>WINNER : {bs2.w}</h4>
              <h4>RUNNER : {bs2.r}</h4>
              <h4>PER KILL : {bs2.k}</h4>
              <button onClick={ps2c}>CLOSE</button>
            </div>
          ) : (
            <div className="bdiv" id="bduo">
              <div className="bimage"></div>
              <div className="bdown1">
                <h4>
                  TYPE : <span>{bs2.type}</span>
                </h4>
                <h4>
                  MAP : <span>{bs2.map}</span>
                </h4>
                <h4>
                  DATE : <span>{bs2.date}</span>
                </h4>
                <h4>
                  TIME : <span>{bs2.time}</span>
                </h4>
              </div>
              <div className="bdown2">
                <div id="bp">
                  <div id="ibp" style={{ width: `${bsc2}%` }}></div>
                </div>
                <h4 id="bpn">{bsc2}/100</h4>
                <Link className="bl" onClick={bs2price}>
                  PRICE
                </Link>
                {jsbn2 === false ? (
                  <button className="bjoin" onClick={bsolo2}>
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
              <h4>WINNER : {bsd.w}(EACH PLAYER)</h4>
              <h4>RUNNER : {bsd.r}(EACH PLAYER)</h4>
              <h4>PER KILL : {bsd.k}</h4>
              <button onClick={psdc}>CLOSE</button>
            </div>
          ) : (
            <div className="bdiv" id="bsquad">
              <div className="bimage"></div>
              <div className="bdown1">
                <h4>
                  TYPE : <span>{bsd.type}</span>
                </h4>
                <h4>
                  MAP : <span>{bsd.map}</span>
                </h4>
                <h4>
                  DATE : <span>{bsd.date}</span>
                </h4>
                <h4>
                  TIME : <span>{bsd.time}</span>
                </h4>
              </div>
              <div className="bdown2">
                <div id="bp">
                  <div id="ibp" style={{ width: `${bsdc}%` }}></div>
                </div>
                <h4 id="bpn">{bsdc}/100</h4>
                <Link className="bl" onClick={bsdprice}>
                  PRICE
                </Link>
                {jsdbn === false ? (
                  <button className="bjoin" onClick={bsquad}>
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
export default Bgmi;
