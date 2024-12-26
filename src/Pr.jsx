import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Log from "./Log";
import axios from "axios";
function Pr() {
  const [per, setper] = useState();
  const v = async () => {
    const ud = sessionStorage.getItem("ud");
    const un = sessionStorage.getItem("un");
    if (ud !== null) {
      console.log(ud);
      await axios
        .post("https://gaminghubsever.onrender.com/pr", { ud: ud, un: un })
        .then((res) => {
          console.log(res.data.per);
          if (res.data.per === "ac") {
            setper(true);
          } else {
            setper(false);
          }
        });
    }
  };
  v();
  return per ? <Outlet /> : <Log />;
}
export default Pr;
