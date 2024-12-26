import React from "react";
import "../src/css/result.css";
import "../src/css/sr.css";
import { useNavigate } from "react-router-dom";
function Result({ bs1, bs2, bsd, fs1, fs2, fsd }) {
  const navigate = useNavigate();
  const bsolo1 = async () => {
    navigate("/bsolo1r");
  };
  const bsolo2 = () => {
    navigate("/bsolo2r");
  };
  const bsquad = () => {
    navigate("/bsquadr");
  };
  const fsolo1 = () => {
    navigate("/fsolo1r");
  };
  const fsolo2 = () => {
    navigate("/fsolo2r");
  };
  const fsquad = () => {
    navigate("/fsquadr");
  };
  return (
    <div className="rmain">
      <div id="rn">RESULT OF THE MATCHES WILL BE CLEARED WITHIN 24HRS</div>
      <div className="rbody" style={{ display: `${bs1.display}` }}>
        <div className="gtmdt">
          GAME : <span>{bs1.name}</span>
        </div>
        <div className="gtmdt">
          TYPE : <span>{bs1.type}</span>
        </div>
        <div className="gtmdt">
          MAP : <span>{bs1.map}</span>
        </div>
        <div className="gtmdt">
          DATE : <span>{bs1.date}</span>
        </div>
        <div className="gtmdt">
          TIME : <span>{bs1.time}</span>
        </div>
        <button id="sr" onClick={bsolo1}>
          SHOW 
        </button>
      </div>
      <div className="rbody" style={{ display: `${bs2.display}` }}>
        <div className="gtmdt">
          GAME : <span>{bs2.name}</span>
        </div>
        <div className="gtmdt">
          TYPE : <span>{bs2.type}</span>
        </div>
        <div className="gtmdt">
          MAP : <span>{bs2.map}</span>
        </div>
        <div className="gtmdt">
          DATE : <span>{bs2.date}</span>
        </div>
        <div className="gtmdt">
          TIME : <span>{bs2.time}</span>
        </div>
        <button id="sr" onClick={bsolo2}>
          SHOW 
        </button>
      </div>
      <div className="rbody" style={{ display: `${bsd.display}` }}>
        <div className="gtmdt">
          GAME : <span>{bsd.name}</span>
        </div>
        <div className="gtmdt">
          TYPE : <span>{bsd.type}</span>
        </div>
        <div className="gtmdt">
          MAP : <span>{bsd.map}</span>
        </div>
        <div className="gtmdt">
          DATE : <span>{bsd.date}</span>
        </div>
        <div className="gtmdt">
          TIME : <span>{bsd.time}</span>
        </div>
        <button id="sr" onClick={bsquad}>
          SHOW 
        </button>
      </div>
      <div className="rbody" style={{ display: `${fs1.display}` }}>
        <div className="gtmdt">
          GAME : <span>{fs1.name}</span>
        </div>
        <div className="gtmdt">
          TYPE : <span>{fs1.type}</span>
        </div>
        <div className="gtmdt">
          MAP : <span>{fs1.map}</span>
        </div>
        <div className="gtmdt">
          DATE : <span>{fs1.date}</span>
        </div>
        <div className="gtmdt">
          TIME : <span>{fs1.time}</span>
        </div>
        <button id="sr" onClick={fsolo1}>
          SHOW 
        </button>
      </div>
      <div className="rbody" style={{ display: `${fs2.display}` }}>
        <div className="gtmdt">
          GAME : <span>{fs2.name}</span>
        </div>
        <div className="gtmdt">
          TYPE : <span>{fs2.type}</span>
        </div>
        <div className="gtmdt">
          MAP : <span>{fs2.map}</span>
        </div>
        <div className="gtmdt">
          DATE : <span>{fs2.date}</span>
        </div>
        <div className="gtmdt">
          TIME : <span>{fs2.time}</span>
        </div>
        <button id="sr" onClick={fsolo2}>
          SHOW 
        </button>
      </div>
      <div className="rbody" style={{ display: `${fsd.display}` }}>
        <div className="gtmdt">
          GAME : <span>{fsd.name}</span>
        </div>
        <div className="gtmdt">
          TYPE : <span>{fsd.type}</span>
        </div>
        <div className="gtmdt">
          MAP : <span>{fsd.map}</span>
        </div>
        <div className="gtmdt">
          DATE : <span>{fsd.date}</span>
        </div>
        <div className="gtmdt">
          TIME : <span>{fsd.time}</span>
        </div>
        <button id="sr" onClick={fsquad}>
          SHOW 
        </button>
      </div>
    </div>
  );
}
export default Result;
