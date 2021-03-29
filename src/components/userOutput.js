import React from 'react'

export const UserOutput = (a) => {
  return (
    <div>
      <p onClick={a.chnage}>Username: {a.username}</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
    </div>
  )
}
