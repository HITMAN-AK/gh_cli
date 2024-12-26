import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Bsquadr({ bsd }) {
  const navigate = useNavigate();
  let [pd, spd] = useState([]);
  useEffect(() => {
    const pr = async () => {
      await axios
        .get("https://gaminghubsever.onrender.com/bsdr")
        .then((d) => {
          spd(d.data.bsquad);
        });
    };
    pr();
  }, []);
  const cr = () => {
    navigate("/result");
  };
  return (
    <div className="sr">
      <div className="rc">
        <button id="rc" onClick={cr}>
          X
        </button>
      </div>
      <div className="pd">
        <div className="w">WINNER : {bsd.w}(EACH PLAYER)</div>
        <div className="r">RUNNER : {bsd.r}(EACH PLAYER)</div>
        <div className="k">KILL : {bsd.k}</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>POSITION</th>
            <th>PLAYER NAME</th>
            <th>KILLS</th>
            <th>CASH</th>
          </tr>
        </thead>
        <tbody>
          {pd.map((i, k) => {
            if (i.position === 1) {
              return (
                <tr key={k}>
                  <td>{i.position}</td>
                  <td>{i.gamename}</td>
                  <td>{i.kills}</td>
                  <td>{i.kills * bsd.k + bsd.w}</td>
                </tr>
              );
            } else if (i.position === 2) {
              return (
                <tr key={k}>
                  <td>{i.position}</td>
                  <td>{i.gamename}</td>
                  <td>{i.kills}</td>
                  <td>{i.kills * bsd.k + bsd.r}</td>
                </tr>
              );
            } else {
              return (
                <tr key={k}>
                  <td>{i.position}</td>
                  <td>{i.gamename}</td>
                  <td>{i.kills}</td>
                  <td>{i.kills * bsd.k}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Bsquadr;
