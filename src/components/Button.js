import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  margin:40px 0;
  text-align:center;
`

const Btn = styled.button`
  border-radius: 6px;
  font-size: 18px;
  border: 0;
  font-weight: 600;
  padding: 12px 26px;
  color: ${({ color }) => color || '#fff'};
  background-color: ${({ bg }) => bg || '#72BD78'};

  @media (min-width: 768px) {
  font-size:20px; 
  }
`

export const Button = ({ label, onClick, bg }) => {
  return (
    <Container>
      <Btn type="submit" onClick={onClick} bg={bg}>{label}</Btn>
    </Container>
  )
}