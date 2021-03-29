import React from 'react'

export const Person = (a) => {
  return (
    <div>
      <p onClick={a.click}>
        I am {a.name} and I am {a.age} years old - {a.children}
      </p>
      <input type="text" onChange={a.changed} value={a.name}/>
    </div>
  )
}
