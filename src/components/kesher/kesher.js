import "./kesher.css";
import axios from "axios";
import React from "react";

function Kesher() {
  let product = {};
  // const [value, setValue] = useState("");

  const addProduct = () => {
    axios
      .post("/api/send-mail/", product)
      .then((res) => console.log("res.data"));
    // setValue("");

    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("message").value = "";
  };

  return (
    <div className="kesher">
      <form method="GET">
        <h5>
          רוצים להיות ראשונים להתעדכן על הטבות? אפשרויות חדשות לעשות כסף? הכניסו
          את המייל שלכם ואנו נעדכן אתכם ראשונים.
        </h5>
        {/* <form
          action="http://localhost:4200/api/sendemail/"
          method="GET"
          type="text/plain"
          // target="_top"
        >
          <input type="text" name="name" />
          <input type="text" name="Email" />
          <input type="submit" name="submit" value="Send" />
        </form> */}
        <input
          id="name"
          // value={value}
          className="inputKesher"
          type="text"
          onInput={(e) => (product.name = e.target.value)}
          placeholder="שם"
        />
        <input
          id="mail"
          className="inputKesher"
          type="text"
          onChange={(e) => (product.email = e.target.value)}
          placeholder="מייל"
        />{" "}
        <textarea
          id="message"
          className="textareaKesher"
          type="text"
          onChange={(e) => (product.message = e.target.value)}
          placeholder="שתף אותנו..."
        />{" "}
        <button
          className="btnKesher"
          type="reset"
          onClick={() => {
            addProduct();
            // document.getElementById("name").value = "";
            // console.log(product);
          }}
        >
          שלח
        </button>
      </form>
    </div>
  );
}

export default Kesher;
