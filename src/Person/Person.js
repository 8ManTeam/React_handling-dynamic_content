/* Note: in itś simple form a component is a js function returing some jsx */
/* Note: ES 6 type arrow funtion to avoid this related complications */
import React from "react";

import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old. I am trying hard to
        learn react
      </p>
      <p>{props.children}</p>
      <input type="Text" onChange={props.changed} value={props.name} />
      {/* no paranthesis used call a reference to the method .
      Event object passesd automatically by react */}
      {/*React two way binding for properties*/}
    </div>
    /*<p>
      I am trying hard to learn react and i am {Math.floor(Math.random() * 30)}
      years old
    </p> */
  );
};

export default person;
