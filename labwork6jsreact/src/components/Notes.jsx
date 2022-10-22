import React from "react";
import "../index.css";
import classnames from "classnames";
export default function Notes({ header, text, count, date }) {
  console.log(header);
  return (
    <div>
      {header.map((val, index) => (
        <p
          key={index}
          className={classnames("note", {
            red: count >= 8,
          })}
        >
          {count >= 8 && "У вас слишком много заметок"}
          {"Header:" + val}
          <br></br>
          {"Date:" + date[index]}
          <br></br>
          {text[index]}
        </p>
      ))}
    </div>
  );
}
