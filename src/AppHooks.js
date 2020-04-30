import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

//Converstion to React Hooks
const App = (props) => {
  //multipleuse state calls posssible
  const [personState, setPersonState] = useState({
    //array destructuring
    persons: [
      { name: "Gehan", age: 44 },
      { name: "Sinji", age: 40 },
    ],
    //will not be replace when updating the state using hooks
    //otherState: "Don't Change this value",
  });

  //Multiple slices of state
  const [otherState, setOtherState] = useState({
    otherState: "Don't Change this value",
  });

  console.log("personState : " + personState);
  console.log("otherState  : " + otherState);

  //When using hooks replaces all old state data
  //with new.What ever is not assigned will not be lost
  //unlike in state based operations
  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "T.G.A. Mendis ", age: 44 },
        { name: "H.H.D.T. Hemachandra ", age: 39 },
      ],
      //otherwise this state value is lost when hooks are used
      //otherState: personState.otherState,
    });
  };

  //Multiple state slices mained by different userstate methods

  return (
    /* Note: wrap all elements within a single root element per component*/
    /* Note: No class html element but className element in Jsx tags to add CSS class (Because class is already a reserverd word in JS) */
    <div className="App">
      <h1>Hi, I am a Roooki React Developer</h1>
      <p>JSX really works like HTML most of the time !</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        My Hobby is writing and JS
      </Person>
    </div>
  );
};

export default App;
