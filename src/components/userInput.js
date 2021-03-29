import React from 'react'

export const UserInput = (a) => {
  return (
    <div>
      <input type="text" placeholder={a.currentName} onChange={a.change} />
    </div>
  )
}
