import React from "react";
import bubble from "../asset/images//bubble.png";
import "../style/style.css";

function Bubble(props) {
  return (
    <div class="bubbles">
      <img src={bubble} alt="img-some" />
      <img src={bubble} alt="img-some" />
      <img src={bubble} alt="img-some" />
      <img src={bubble} alt="img-some" />
      <img src={bubble} alt="img-some" />
      <img src={bubble} alt="img-some" />
    </div>
  );
}

export default Bubble;
