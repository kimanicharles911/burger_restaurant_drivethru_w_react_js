import './App.css';
import Person from "./Person/Person"

const App = () => {
  return (
    <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p>This is really working!</p>
      <Person />
      <Person />
      <Person />
    </div>
  );
  /* return React.createElement("div",  {className: "App"}, React.createElement("h1", null, "Hi I'm a React App!!!")); */ 

}

export default App;
