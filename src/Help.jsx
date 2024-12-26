import React, { useRef, useState } from "react";
import "../src/css/help.css";
import axios from "axios";
function Help() {
  const ta = useRef();
  const [hstatus, sethstatus] = useState(false);
  const hs = async () => {
    const un = sessionStorage.getItem("un");
    await axios
      .post("https://gaminghubsever.onrender.com/helpline", {
        username: un,
        issues: ta.current.value,
      })
      .then((res) => {
        if (res.data.status === "sc") {
          sethstatus(true);
        }
      });
  };
  const hsclose = () => {
    sethstatus(false);
  };
  return (
    <div className="helmain">
      {hstatus ? (
        <div className="hstb">
          <div id="hstm">
            YOUR  ISSUES  HAS  BEEN  SUBMITTED  SUCCESSFULLY  AND  IT  WILL  BE  SOLVED
            SOON
          </div>
          <div className="hstc">
            <button onClick={hsclose}>CLOSE</button>
          </div>
        </div>
      ) : (
        <div className="helbody">
          <div>
            <textarea
              id="hta"
              cols="60"
              rows="20"
              placeholder="ENTER YOUR ISSUES....."
              ref={ta}
            ></textarea>
          </div>
          <div className="helb">
            <button onClick={hs}>SUBMIT</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Help;
