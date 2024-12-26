import React from "react";
import "../src/css/home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const bp = () => {
    navigate("/bgmi");
  };
  const fp = () => {
    navigate("/ff");
  };
  return (
    <div className="hmain">
      <div id="hh">MOBILE GAMES</div>
      <div className="hbody">
        <button id="hb" onClick={bp}></button>
        <button id="hf" onClick={fp}></button>
      </div>
    </div>
  );
}
export default Home;
