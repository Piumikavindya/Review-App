import React from 'react'

export default function Submit({value}) {
  return (
   <input type="submit " className="rounded bg-white mt-4 hover:bg-opacity
   -90 text-secondary transition font-semibold text-lg cursor-pointer p-1 "  value={value}/>
  )
}
