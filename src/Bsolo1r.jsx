import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Bsolo1r({ bs1 }) {
  const navigate = useNavigate();
  let [pd, spd] = useState([]);
  useEffect(() => {
    const pr = async () => {
      await axios.get("https://gaminghubsever.onrender.com/bs1r").then((d) => {
        spd(d.data.bsolo1);
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
        <div className="w">WINNER : {bs1.w}</div>
        <div className="r">RUNNER : {bs1.r}</div>
        <div className="k">KILL : {bs1.k}</div>
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
                  <td>{i.kills * bs1.k + bs1.w}</td>
                </tr>
              );
            } else if (i.position === 2) {
              return (
                <tr key={k}>
                  <td>{i.position}</td>
                  <td>{i.gamename}</td>
                  <td>{i.kills}</td>
                  <td>{i.kills * bs1.k + bs1.r}</td>
                </tr>
              );
            } else {
              return (
                <tr key={k}>
                  <td>{i.position}</td>
                  <td>{i.gamename}</td>
                  <td>{i.kills}</td>
                  <td>{i.kills * bs1.k}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Bsolo1r;
