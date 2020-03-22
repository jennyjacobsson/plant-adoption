import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import { isLoggedIn } from '../App'

const Outer = styled.div`
  display:flex;
  width: 100%;
  box-sizing: border-box;
  text-align:left;
  padding: 16px 0;
  
  a {
    text-decoration: none;
  }
`

const Wrap = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 0 10px;
`

const Text = styled.h2`
  margin-left:10px;
  font-size:14px;
  line-height: 1;
  color:#222;

  @media (min-width: 768px) {
    margin-left:40px;
    font-size:20px;
  }
`

const Logo = styled.h1`
  font-size:26px;
  font-weight:normal;
  color:#222;
  font-family: 'Cherry Swash', cursive;

  @media (min-width: 768px) {
    margin:0;
   font-size:30px;
  } 
`

const NavContainer = styled(Wrap)`
  display:none;

  @media (min-width: 768px) {
    display:flex;
    justify-content:space-evenly;
  }
`

export const Header = () => {
  const history = useHistory()
  const location = useLocation()

  const handleSignout = () => {
    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('userName')
    history.push('/')
  }

  return (
    <Outer>
      <Wrap>
        {location.pathname !== '/' && (
          <Link to="/">
            <Logo>Plant adoption</Logo>
          </Link>
        )}
      </Wrap>
      <NavContainer>
        {!isLoggedIn() && <Link to="/login"><Text>Log in</Text></Link>}
        {!isLoggedIn() && <Link to="/register"><Text>Register</Text></Link>}
        <Link to="/newad"><Text>New Ad</Text></Link>
        {isLoggedIn() && <Link to="/mypage"><Text>My page</Text></Link>}
        {isLoggedIn() && <Link to="/" onClick={handleSignout}><Text>Log Out</Text></Link>}
      </NavContainer>
    </Outer>
  )
}