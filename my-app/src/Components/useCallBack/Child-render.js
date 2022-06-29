import React from 'react'

function Child({ handler }) {
    console.log("child re-rendering");
  return (
    <div>
        <button onClick={handler}>
         Child Component
        </button>
    </div>
  )
}

export default Child;