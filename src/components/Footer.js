import React from 'react'
import styled from 'styled-components/macro'

const Foot = styled.div`
  background-color:#f3f3f3;
  color:#222;
  height:50px;
  width:auto;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  margin-top:auto;


@media (min-width: 768px) {
   height:80px;
   }
`

const Text = styled.h4`
`

export const Footer = () => {
  return (
    <Foot>
      <Text>About us</Text>
      <Text>Contact us</Text>
      <Text>Something else</Text>
    </Foot>

  )
}