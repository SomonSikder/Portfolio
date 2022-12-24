import React from "react";
import "../style/style.css";

const Card = ({ img, link, code, code2 = "" }) => {
  return (
    <div className="work-img">
      <img src={img} alt="img-some" />
      <div className="work-link flex flex-col justify-center items-center gap-5 ">
        <a href={link} className="work-link-name ">
          Visit Website
        </a>
        <a href={code} className="work-link-name ">
          Source Code
        </a>
        {code2 ? (
          <a href={code} className="work-link-name ">
            Server Code
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
