import './App.css';
import Person from "./Person/Person"

const App = () => {
  return (
    <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p>This is really working!</p>
      <Person name="Samson" age="30" />
      <Person name="Mugo" age="23" >My Hobbies: Racing</Person>
      <Person name="Marren" age="25" />
    </div>
  );
  /* return React.createElement("div",  {className: "App"}, React.createElement("h1", null, "Hi I'm a React App!!!")); */ 

}

export default App;
