import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from './Button'
import { Container, ErrorText, Form, Input, Title } from './StyledCollection'
import { SERVER_URL } from '../App'

export const Registration = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('You need to fill out all fields')
      return
    }
    fetch(`${SERVER_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((json) => {
        setMessage(message)
        if (json.saved) {
          history.push('/login')
        } else {
          console.error(json.errors)
        }
      })
      .catch(console.error)
  }

  return (
    <Container>
      <Form>
        <Title>Create account</Title>
        <Input
          type="text"
          required
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Name" />
        <Input
          type="e-mail"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Email" />

        <Input
          type="password"
          required
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Password" />

        <Button
          type="submit"
          onClick={handleRegister}
          label="Register" />
      </Form>
      <ErrorText>{message}</ErrorText>
    </Container>
  )
}