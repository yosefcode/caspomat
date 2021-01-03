import React, { useState } from "react";

import "./App.css";
import Home from "./components/home/home";
import Pirsomot from "./components/pirsomot/pirsomot";
import Skarim from "./components/skarim/skarim";
import Kesher from "./components/kesher/kesher";
import List from "./components/list/list";
import Newsletter from "./components/newsletter/newsletter";
import HeaderHome from "./components/home/headerhome.jpg";
import HeaderSkr from "./components/skarim/headerskr.jpg";
import HeaderPrs from "./components/pirsomot/headerprs.jpg";

function App() {
  const [loadhome, setLoadhome] = useState(true);
  const [loadskr, setLoadskr] = useState(false);
  const [loadprs, setLoadprs] = useState(false);
  const [loadatr, setLoadatr] = useState(false);
  const [loadkshr, setLoadkshr] = useState(false);

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  const divhome = () => {
    topFunction();
    setLoadhome(true);
    setLoadskr(false);
    setLoadprs(false);
    setLoadatr(false);
    setLoadkshr(false);
  };

  const divskr = () => {
    topFunction();
    setLoadskr(true);
    setLoadhome(false);
    setLoadprs(false);
    setLoadatr(false);
    setLoadkshr(false);
  };
  const divprs = () => {
    topFunction();
    setLoadprs(true);
    setLoadhome(false);
    setLoadskr(false);
    setLoadatr(false);
    setLoadkshr(false);
  };
  const divatr = () => {
    topFunction();
    setLoadatr(true);
    setLoadhome(false);
    setLoadskr(false);
    setLoadprs(false);
    setLoadkshr(false);
  };

  const divkshr = () => {
    topFunction();
    setLoadkshr(true);
    setLoadatr(false);
    setLoadhome(false);
    setLoadskr(false);
    setLoadprs(false);
  };

  return (
    <div className="App" dir="rtl">
      {/* <head>
        {" "}
        <script
          data-ad-client="ca-pub-0726942470432270"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </head> */}
      <div className="bar">
        <div className="allURL">
          <button
            className={loadhome ? "divtrue" : "divfalse"}
            onClick={divhome}
          >
            דף הבית
          </button>
          <button className={loadskr ? "divtrue" : "divfalse"} onClick={divskr}>
            סקרים בתשלום
          </button>
          <button className={loadprs ? "divtrue" : "divfalse"} onClick={divprs}>
            שיווק שותפים
          </button>
          {/* <button className={loadatr ? "divtrue" : "divfalse"} onClick={divatr}>
            כסף מפרסום
          </button> */}
          <button
            className={loadkshr ? "divtrue" : "divfalse"}
            onClick={divkshr}
          >
            צור קשר{" "}
          </button>
        </div>
      </div>
      {/* <div className="adsr">
        <script
          data-ad-client="ca-pub-0726942470432270"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </div>
      <div className="adsl">
        {" "}
        <script
          data-ad-client="ca-pub-0726942470432270"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </div>
      <div className="adsbtm">
        {" "}
        <script
          data-ad-client="ca-pub-0726942470432270"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </div> */}
      {/* <img
        className="imgheader"
        src={
          loadhome ? HeaderHome : loadskr ? HeaderSkr : loadprs ? HeaderPrs : ""
        }
        alt=""
      /> */}
      {loadhome && (
        <div>
          {" "}
          <img className="imgheader" src={HeaderHome} alt="" />
          <Home divskr={divskr} divprs={divprs} divatr={divatr} />{" "}
          <Newsletter />
        </div>
      )}
      {loadskr && (
        <div>
          {" "}
          <div className="aaa-001">
            <img className="imgheader" src={HeaderSkr} alt="" />
          </div>
          <Skarim /> <Newsletter />
        </div>
      )}
      {loadprs && (
        <div>
          {" "}
          <img className="imgheader" src={HeaderPrs} alt="" />
          <Pirsomot divatr={divatr} /> <Newsletter />
        </div>
      )}
      {/* {loadatr && (
        <div>
          {" "}
          <Home divskr={divskr} divprs={divprs} divatr={divatr} />{" "}
        </div>
      )} */}
      {loadkshr && (
        <div>
          {" "}
          <Kesher />
        </div>
      )}
      {/* <List /> */}
    </div>
  );
}

export default App;
