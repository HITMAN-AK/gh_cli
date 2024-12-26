import React, { useEffect, useState } from "react";
import axios from "axios";
import "../src/css/bgmi.css";
import "../src/css/ff.css";
import "../src/css/um.css";
import { Link } from "react-router-dom";
import Load from "./Load";
function Um({ bs1, bs2, bsd, fs1, fs2, fsd }) {
  const [bs1s, setbs1s] = useState("none");
  const [bs2s, setbs2s] = useState("none");
  const [bsds, setbsds] = useState("none");
  const [fs1s, setfs1s] = useState("none");
  const [fs2s, setfs2s] = useState("none");
  const [fsds, setfsds] = useState("none");
  const [bs1c, setbs1c] = useState();
  const [bs2c, setbs2c] = useState();
  const [bsdc, setbsdc] = useState();
  const [fs1c, setfs1c] = useState();
  const [fs2c, setfs2c] = useState();
  const [fsdc, setfsdc] = useState();
  const [umain, setumain] = useState(false);
  const [ps1, setps1] = useState(false);
  const [ps2, setps2] = useState(false);
  const [psd, setpsd] = useState(false);
  const [pfs1, setpfs1] = useState(false);
  const [pfs2, setpfs2] = useState(false);
  const [pfsd, setpfsd] = useState(false);
  const [rules, setrules] = useState(true);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const um = async () => {
      const un = sessionStorage.getItem("un");
      await axios
        .post("https://gaminghubsever.onrender.com/um", {
          username: un,
        })
        .then((res) => {
          if (res.data.bsolo1 === "na") {
            if (res.data.bsolo2 === "na") {
              if (res.data.bsquad === "na") {
                if (res.data.fsolo1 === "na") {
                  if (res.data.fsolo2 === "na") {
                    if (res.data.fsquad === "na") {
                      setumain(true);
                      setrules(false);
                    }
                  }
                }
              }
            }
          }
          if (res.data.bsolo1 === "av") {
            setbs1s("flex");
          } else {
            setbs1s("none");
          }
          if (res.data.bsolo2 === "av") {
            setbs2s("flex");
          } else {
            setbs2s("none");
          }
          if (res.data.bsquad === "av") {
            setbsds("flex");
          } else {
            setbsds("none");
          }
          if (res.data.fsolo1 === "av") {
            setfs1s("flex");
          } else {
            setfs1s("none");
          }
          if (res.data.fsolo2 === "av") {
            setfs2s("flex");
          } else {
            setfs2s("none");
          }
          if (res.data.fsquad === "av") {
            setfsds("flex");
          } else {
            setfsds("none");
          }
          if (true) {
            setbs1c(res.data.count[0]);
            setbs2c(res.data.count[1]);
            setbsdc(res.data.count[2]);
            setfs1c(res.data.count[3]);
            setfs2c(res.data.count[4]);
            setfsdc(res.data.count[5]);
          }
        })
        .then(() => {
          setloading(false);
        });
    };
    um();
  }, []);
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
  const fs1price = async () => {
    setpfs1(true);
  };
  const fs1cn = async () => {
    setpfs1(false);
  };
  const fs2price = async () => {
    setpfs2(true);
  };
  const fs2cn = async () => {
    setpfs2(false);
  };
  const fsdprice = async () => {
    setpfsd(true);
  };
  const fsdcn = async () => {
    setpfsd(false);
  };
  const rc = () => {
    setumain(false);
  };
  const sr = () => {
    setumain(true);
    setrules(true);
  };
  return umain ? (
    <div className="umain">
      {rules ? (
        <div className="rules">
          <div id="rules">
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
          <div className="src">
            <button onClick={rc} id="src">
              CLOSE
            </button>
          </div>
        </div>
      ) : (
        <div className="utext">
          {loading ? (
            <Load />
          ) : (
            <h1 id="utext">NO MATCH HAS BEEN REGISTERED</h1>
          )}
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
            <div className="bdiv" id="bsolo" style={{ display: `${bs1s}` }}>
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
                  <div id="ibp" style={{ width: `${bs1c}%` }}></div>
                </div>
                <h4 id="bpn">{bs1c}/100</h4>
                <Link className="bl" onClick={sr}>
                  RULES
                </Link>
                <Link className="sbl" onClick={bs1price}>
                  PRICE
                </Link>
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
            <div className="bdiv" id="bsolo" style={{ display: `${bs2s}` }}>
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
                  <div id="ibp" style={{ width: `${bs2c}%` }}></div>
                </div>
                <h4 id="bpn">{bs2c}/100</h4>
                <Link className="bl" onClick={sr}>
                  RULES
                </Link>
                <Link className="sbl" onClick={bs2price}>
                  PRICE
                </Link>
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
            <div className="bdiv" id="bsquad" style={{ display: `${bsds}` }}>
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
                <Link className="bl" onClick={sr}>
                  RULES
                </Link>
                <Link className="sbl" onClick={bsdprice}>
                  PRICE
                </Link>
              </div>
            </div>
          )}
          {pfs1 ? (
            <div className="ps">
              <h4>WINNER : {fs1.w}</h4>
              <h4>RUNNER : {fs1.r}</h4>
              <h4>PER KILL : {fs1.k}</h4>
              <button onClick={fs1cn}>CLOSE</button>
            </div>
          ) : (
            <div className="fdiv" id="fsolo" style={{ display: `${fs1s}` }}>
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
                  <div id="ifp" style={{ width: `${fs1c * 2}%` }}></div>
                </div>
                <h4 id="fpn">{fs1c}/50</h4>
                <Link className="bl" onClick={sr}>
                  RULES
                </Link>
                <Link className="sbl" onClick={fs1price}>
                  PRICE
                </Link>
              </div>
            </div>
          )}
          {pfs2 ? (
            <div className="ps">
              <h4>WINNER : {fs2.w}</h4>
              <h4>RUNNER : {fs2.r}</h4>
              <h4>PER KILL : {fs2.k}</h4>
              <button onClick={fs2cn}>CLOSE</button>
            </div>
          ) : (
            <div className="fdiv" id="fsolo" style={{ display: `${fs2s}` }}>
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
                  <div id="ifp" style={{ width: `${fs2c * 2}%` }}></div>
                </div>
                <h4 id="fpn">{fs2c}/50</h4>
                <Link className="bl" onClick={sr}>
                  RULES
                </Link>
                <Link className="sbl" onClick={fs2price}>
                  PRICE
                </Link>
              </div>
            </div>
          )}
          {pfsd ? (
            <div className="ps">
              <h4>WINNER : {fsd.w}(EACH PLAYER)</h4>
              <h4>RUNNER : {fsd.r}(EACH PLAYER)</h4>
              <h4>PER KILL : {fsd.k}</h4>
              <button onClick={fsdcn}>CLOSE</button>
            </div>
          ) : (
            <div className="fdiv" id="fsquad" style={{ display: `${fsds}` }}>
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
                <Link className="bl" onClick={sr}>
                  RULES
                </Link>
                <Link className="sbl" onClick={fsdprice}>
                  PRICE
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default Um;
