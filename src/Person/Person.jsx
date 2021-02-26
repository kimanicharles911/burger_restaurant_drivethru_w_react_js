const Person = ({name, age, children}) => {
  return(
    <div>
      <p>I'm {name} and I am {age} years old.</p>
      <p>{children}</p>
    </div>
  );
}

export default Person;