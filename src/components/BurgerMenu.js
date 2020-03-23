import React, { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { isLoggedIn } from '../App'

const LinkElement = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color:inherit;
`

const MenuWrap = styled.div`
  position:absolute;
  top: 0;
  right: 0;
  z-index:1000;
  width: 100%;
  height: ${(props) => (props.open ? '100%' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.open ? '#94d299' : 'transparent')};
  font-size: 24px;
  font-weight: 600;
`

const BurgerWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    display:none;
    }
`

const Burger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
`

const NavLinks = styled.div`
  display:flex;
  flex-direction:column;
  text-decoration:none;
`

export const BurgerMenu = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const handleBurgerClick = () => {
    setBurgerOpen(!burgerOpen)
  }

  const handleSignout = () => {
    setBurgerOpen(false)
    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('userName')
  }

  return (
    <>
      <MenuWrap open={burgerOpen}>
        <BurgerWrap>
          <Burger>
            <HamburgerMenu
              isOpen={burgerOpen}
              menuClicked={handleBurgerClick}
              width={24}
              height={18}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5} />
          </Burger>
        </BurgerWrap>
        {burgerOpen && (
          <NavLinks>
            <LinkElement to="/" onClick={() => setBurgerOpen(false)}>
              Plants Ahoy!
            </LinkElement>
            {!isLoggedIn() && (
              <LinkElement to="/login" onClick={() => setBurgerOpen(false)}>
              Log In
              </LinkElement>)}
            {!isLoggedIn() && (
              <LinkElement to="/register" onClick={() => setBurgerOpen(false)}>
              Register
              </LinkElement>)}
            <LinkElement to="/newad" onClick={() => setBurgerOpen(false)}>
              Create Ad
            </LinkElement>
            {isLoggedIn() && (
              <LinkElement to="/mypage" onClick={() => setBurgerOpen(false)}>
              My Page
              </LinkElement>)}
            {isLoggedIn() && (
              <LinkElement to="/" onClick={handleSignout}>
              Log Out
              </LinkElement>)}
          </NavLinks>
        )}
      </MenuWrap>
    </>
  )
}