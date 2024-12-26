import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Fsolo2r({ fs2 }) {
  const navigate = useNavigate();
  let [pd, spd] = useState([]);
  useEffect(() => {
    const pr = async () => {
      await axios.get("https://gaminghubsever.onrender.com/fs2r").then((d) => {
        spd(d.data.fsolo2);
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
        <div className="w">WINNER : {fs2.w}</div>
        <div className="r">RUNNER : {fs2.r}</div>
        <div className="k">KILL : {fs2.k}</div>
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
                  <td>{i.kills * fs2.k + fs2.w}</td>
                </tr>
              );
            } else if (i.position === 2) {
              return (
                <tr key={k}>
                  <td>{i.position}</td>
                  <td>{i.gamename}</td>
                  <td>{i.kills}</td>
                  <td>{i.kills * fs2.k + fs2.r}</td>
                </tr>
              );
            } else {
              return (
                <tr key={k}>
                  <td>{i.position}</td>
                  <td>{i.gamename}</td>
                  <td>{i.kills}</td>
                  <td>{i.kills * fs2.k}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Fsolo2r;
