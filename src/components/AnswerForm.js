import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components/macro'
import { Input, Form, Title } from './StyledCollection'
import { Button } from './Button'
import { SERVER_URL } from '../App'

const MessageInput = styled(Input).attrs({
  as: 'textarea'
})`
  resize:vertical;
`
const jump = keyframes`
  0%   {transform: translate3d(0,0,0);}
  20%  {transform: translate3d(0,10%,0);}
  40%  {transform: translate3d(0,30%,0);}
  50% {transform: translate3d(0,50%,0);}
  100% {transform: translate3d(0,50%,0);}
`

const Image = styled.img`
  object-fit:contain;
  object-position:center;
  height:150px;
  width:auto;
  flex-shrink:0;
  flex-grow:0;
  transform-origin: 50% 50%;
    animation: ${jump} .5s linear alternate infinite;
`
const ImageWrap = styled.div`
  display:flex;
  flex-direction:column;
`

const Section = styled.div`
  margin-top:10px;
`

export const AnswerForm = ({ id, onSubmit }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [ShowForm, setShowForm] = useState(true)

  const handleAnswerForm = (event) => {
    event.preventDefault()
    fetch(`${SERVER_URL}/answer`, {
      method: 'POST',
      body: JSON.stringify({ id, name, email, message }),
      headers: { 'Content-Type': 'application/json ' }
    })
      .then((res) => {
        res.json().then(() => {
          setShowForm(false)
          onSubmit()
        })
      })
      .catch((err) => console.log('error:', err))
  }
  return (
    <Section>
      {ShowForm && (
        <Form onSubmit={handleAnswerForm}>
          <Title>Write a message to the owner</Title>
          <Input
            type="text"
            required
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            value={name} />
          <Input
            type="email"
            required
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email} />
          <MessageInput
            type="text-area"
            rows="4"
            required
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
            value={message} />
          <p>This message will be sent to the current owner.</p>
          <Button label="Send" />
        </Form>
      )}
      {!ShowForm && (
        <ImageWrap>
          <Title>Your answer has been sent!</Title>
          <Image src="/assets/ShinePlant.png" />
        </ImageWrap>
      )}
    </Section>
  )
}