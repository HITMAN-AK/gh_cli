import React, { useEffect, useState } from "react";
import "./css/nav.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dd, setdd] = useState(false);
  const [amount, setamount] = useState(0);
  useEffect(() => {
    const coin = async () => {
      const un = sessionStorage.getItem("un");
      await axios
        .post("https://gaminghubsever.onrender.com/coin", {
          username: un,
        })
        .then((res) => {
          setamount(res.data.amount);
        });
    };
    coin();
  }, []);
  const hl = () => {
    setdd(!dd);
    navigate("/helpline");
  };
  const hel = () => {
    setIsOpen(!isOpen);
    navigate("/helpline");
  };
  const dep = () => {
    setdd(!dd);
    navigate("/deposit");
  };
  const dp = () => {
    setIsOpen(!isOpen);
    navigate("/deposit");
  };
  const wit = () => {
    setdd(!dd);
    navigate("/withdraw");
  };
  const wt = () => {
    setIsOpen(!isOpen);
    navigate("/withdraw");
  };
  const p = () => {
    setIsOpen(!isOpen);
  };
  const h = () => {
    setdd(!dd);
    navigate("/home");
  };
  const u = () => {
    setdd(!dd);
    navigate("/um");
  };
  const r = () => {
    setdd(!dd);
    navigate("/result");
  };
  const ho = () => {
    navigate("/home");
  };
  const uma = () => {
    navigate("/um");
  };
  const res = () => {
    navigate("/result");
  };
  const ndd = () => {
    setdd(!dd);
  };
  return (
    <div className="nmain">
      <div className="nav">
        <div id="nh1">GAMING HUB</div>
        <div className="ndd">
          <button id="ndd" onClick={ndd}></button>
        </div>
        {dd && (
          <div className="drop">
            <div className="idrop">
              <span id="cspan">
                <button id="coin"></button>
                {amount}
              </span>
            </div>
            <div className="idrop">
              <span onClick={h}>HOME</span>
            </div>
            <div className="idrop">
              <span onClick={u}>UPCOMMING MATCHES</span>
            </div>
            <div className="idrop">
              <span onClick={r}>RESULT</span>
            </div>
            <div className="idrop">
              <span onClick={dep}>DEPOSIT</span>
            </div>
            <div className="idrop">
              <span onClick={wit}>WITHDRAW</span>
            </div>
            <div className="idrop">
              <span onClick={hl}>HELP-LINE</span>
            </div>
          </div>
        )}
        <div className="hur">
          <button onClick={ho}>HOME</button>
          <button className="ur" onClick={uma}>
            UPCOMMING MATCHES
          </button>
          <button className="ur" onClick={res}>
            RESULT
          </button>
          <div className="p">
            <button onClick={p}>PROFILE</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="dw">
          <span id="spcoin">
            <button id="dcoin"></button>
            {amount}
          </span>
          <button onClick={dp}>DEPOSIT</button>
          <button onClick={wt}>WITHDRAW</button>
          <button onClick={hel}>HELP-LINE</button>
        </div>
      )}
    </div>
  );
}
export default Nav;
