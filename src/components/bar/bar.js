import "./bar.css";
import { useParams } from "react-router-dom";

const Bar = (props) => {
  const { id } = useParams();

  return (
    <div className="bar">
      <div className="allURL">
        <a className={id === "a" ? "divtrue" : "divfalse"} href="/api/aaa/a">
          דף הבית
        </a>
        <a
          className={id === "b" ? "divtrue" : "divfalse"}
          href="http://www.caspomat.co.il/bbb/b"
        >
          סקרים בתשלום
        </a>{" "}
        <a
          className={id === "c" ? "divtrue" : "divfalse"}
          href="/שיווק-שותפים/c"
        >
          שיווק שותפים
        </a>{" "}
        <a className={id === "d" ? "divtrue" : "divfalse"} href="/צור-קשר/d">
          צור קשר
        </a>{" "}
      </div>
    </div>
  );
};

export default Bar;
