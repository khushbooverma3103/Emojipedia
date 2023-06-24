import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt className="dt">
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span className="dt span">{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}
export default Entry;
