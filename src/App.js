import './App.css';
import { Person } from './components/person';
import React, { useState } from 'react'

export const App = () => {

  const [personsState, setPersonsState] = useState({
    persons: [
    {name: "Francesca", age: "21"},
    {name: "Antonio", age: "30"},
    {name: "Flafi", age: "3"}
  ],
  otherDetails: 'fsdfsdg'
  })

  const changeName = (e) => {
    setPersonsState({
      persons: [
        {name: "Francesca", age: "21"},
        {name: "ana", age: "30"},
        {name: e.target.value, age: "4"}
      ] // these delete otherDetails becouse the entire object is changed !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! newName in loc de e pentru click
    })
  }

  return (
    <div className="App">
      <h1>React app</h1>
      <button onClick={() => changeName('Flaf!!!!!')}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} changed={changeName}>I like boats</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} changed={changeName} click={() => changeName('Flaf')}>I like mancare</Person>
    </div>
  );
}
