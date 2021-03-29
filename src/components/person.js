import React from 'react'

export const Person = () => {
  return (
    <div>
      <p onClick={click}>
        I am {name} and I am {age} years old - {children}
      </p>
      <input type="text" onChange={changed} value={name}/>
    </div>
  )
}
