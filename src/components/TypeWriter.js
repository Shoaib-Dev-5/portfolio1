import React from 'react'
import Typewriter from 'typewriter-effect';

export const TypeWriter = () => {
  return (
    <Typewriter 
 options={{
  strings: ['Frontend Engineer', 'React Developer','Open Source Contributor','Team Person','Programmer'],
  autoStart: true,
  loop:true,
  delay:50,
  deleteSpeed:150,
 }}
  />
  )
}
