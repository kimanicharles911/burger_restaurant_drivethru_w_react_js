import { useState } from "react";
import './App.css';
import Person from "./Person/Person"

const App = () => {
  /* const [location, updateLocation] = useState("Seattle, WA"); */
  const [personsState, updatePerson] = useState({
    persons: [
      { name : "Samson", age: 30 },
      { name : "Mugo", age : 23},
      {name : "Marren", age : 25}
    ]
  });

  const switchNameHandler = () => {
    console.log("Collide Air Strike");
  }
  
  return (
    <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  /* return React.createElement("div",  {className: "App"}, React.createElement("h1", null, "Hi I'm a React App!!!")); */ 

}

export default App;
