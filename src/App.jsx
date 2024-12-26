import React, { useEffect, useState } from "react";
import axios from "axios";
import Log from "./Log";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Bgmi from "./Bgmi";
import FF from "./FF";
import Pr from "./Pr";
import Um from "./Um";
import Wit from "./Wit";
import Dep from "./Dep";
import Result from "./Result";
import Bsolo1r from "./Bsolo1r";
import Bsolo2r from "./Bsolo2r";
import Bsquadr from "./Bsquadr";
import Fsolo1r from "./Fsolo1r";
import Fsolo2r from "./Fsolo2r";
import Fsquadr from "./Fsquadr";
import Load from "./Load";
import Help from "./Help";
import Pnf from "./Pnf";
import Fp from "./Fp";
function App() {
  const [BS1, SETBS1] = useState([null]);
  const [BS2, SETBS2] = useState([null]);
  const [BSD, SETBSD] = useState([null]);
  const [FS1, SETFS1] = useState([null]);
  const [FS2, SETFS2] = useState([null]);
  const [FSD, SETFSD] = useState([null]);
  const [BS1R, SETBS1R] = useState([null]);
  const [BS2R, SETBS2R] = useState([null]);
  const [BSDR, SETBSDR] = useState([null]);
  const [FS1R, SETFS1R] = useState([null]);
  const [FS2R, SETFS2R] = useState([null]);
  const [FSDR, SETFSDR] = useState([null]);
  const location = useLocation();
  const rn = location.pathname !== "/";
  useEffect(() => {
    const md = async () => {
      await axios
        .post("https://gaminghubsever.onrender.com/md")
        .then((res) => {
          SETBS1(res.data.bs1);
          SETBS2(res.data.bs2);
          SETBSD(res.data.bsd);
          SETFS1(res.data.fs1);
          SETFS2(res.data.fs2);
          SETFSD(res.data.fsd);
          SETBS1R(res.data.bs1r);
          SETBS2R(res.data.bs2r);
          SETBSDR(res.data.bsdr);
          SETFS1R(res.data.fs1r);
          SETFS2R(res.data.fs2r);
          SETFSDR(res.data.fsdr);
        });
    };
    md();
  }, []);
  const bs1 = {
    type: BS1[0],
    map: BS1[1],
    date: BS1[2],
    time: BS1[3],
    w: BS1[4],
    r: BS1[5],
    k: BS1[6],
  };
  const bs2 = {
    type: BS2[0],
    map: BS2[1],
    date: BS2[2],
    time: BS2[3],
    w: BS2[4],
    r: BS2[5],
    k: BS2[6],
  };
  const bsd = {
    type: BSD[0],
    map: BSD[1],
    date: BSD[2],
    time: BSD[3],
    w: BSD[4],
    r: BSD[5],
    k: BSD[6],
  };
  const fs1 = {
    type: FS1[0],
    map: FS1[1],
    date: FS1[2],
    time: FS1[3],
    w: FS1[4],
    r: FS1[5],
    k: FS1[6],
  };
  const fs2 = {
    type: FS2[0],
    map: FS2[1],
    date: FS2[2],
    time: FS2[3],
    w: FS2[4],
    r: FS2[5],
    k: FS2[6],
  };
  const fsd = {
    type: FSD[0],
    map: FSD[1],
    date: FSD[2],
    time: FSD[3],
    w: FSD[4],
    r: FSD[5],
    k: FSD[6],
  };
  const bs1r = {
    name: BS1R[0],
    type: BS1R[1],
    map: BS1R[2],
    date: BS1R[3],
    time: BS1R[4],
    display: BS1R[5],
  };
  const bs2r = {
    name: BS2R[0],
    type: BS2R[1],
    map: BS2R[2],
    date: BS2R[3],
    time: BS2R[4],
    display: BS2R[5],
  };
  const bsdr = {
    name: BSDR[0],
    type: BSDR[1],
    map: BSDR[2],
    date: BSDR[3],
    time: BSDR[4],
    display: BSDR[5],
  };
  const fs1r = {
    name: FS1R[0],
    type: FS1R[1],
    map: FS1R[2],
    date: FS1R[3],
    time: FS1R[4],
    display: FS1R[5],
  };
  const fs2r = {
    name: FS2R[0],
    type: FS2R[1],
    map: FS2R[2],
    date: FS2R[3],
    time: FS2R[4],
    display: FS2R[5],
  };
  const fsdr = {
    name: FSDR[0],
    type: FSDR[1],
    map: FSDR[2],
    date: FSDR[3],
    time: FSDR[4],
    display: FSDR[5],
  };
  return (
    <>
      {rn && <Nav />}
      <Routes>
        <Route path="/" element={<Log />}></Route>
        <Route path="/loading" element={<Load />}></Route>
        <Route element={<Pr />}>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/bgmi"
            element={<Bgmi bs1={bs1} bs2={bs2} bsd={bsd} />}
          ></Route>
          <Route
            path="/ff"
            element={<FF fs1={fs1} fs2={fs2} fsd={fsd} />}
          ></Route>
          <Route
            path="/um"
            element={
              <Um bs1={bs1} bs2={bs2} bsd={bsd} fs1={fs1} fs2={fs2} fsd={fsd} />
            }
          ></Route>
          <Route
            path="/result"
            element={
              <Result
                bs1={bs1r}
                bs2={bs2r}
                bsd={bsdr}
                fs1={fs1r}
                fs2={fs2r}
                fsd={fsdr}
              />
            }
          ></Route>
          <Route path="/bsolo1r" element={<Bsolo1r bs1={bs1} />}></Route>
          <Route path="/bsolo2r" element={<Bsolo2r bs2={bs2} />}></Route>
          <Route path="/bsquadr" element={<Bsquadr bsd={bsd} />}></Route>
          <Route path="/fsolo1r" element={<Fsolo1r fs1={fs1} />}></Route>
          <Route path="/fsolo2r" element={<Fsolo2r fs2={fs2} />}></Route>
          <Route path="/fsquadr" element={<Fsquadr fsd={fsd} />}></Route>
          <Route path="/deposit" element={<Dep />}></Route>
          <Route path="/withdraw" element={<Wit />}></Route>
          <Route path="/helpline" element={<Help />}></Route>
        </Route>
        <Route path="/fp" element={<Fp />}></Route>
        <Route path="/*" element={<Pnf />}></Route>
      </Routes>
    </>
  );
}
export default App;
