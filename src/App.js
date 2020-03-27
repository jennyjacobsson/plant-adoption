import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { InfoCard } from 'components/InfoCard'
import { StartPage } from 'components/StartPage'
import { SalesForm } from 'components/SalesForm'
import { AnswerForm } from 'components/AnswerForm'
import { Login } from 'components/Login'
import { Registration } from 'components/Registration'
import { MyPage } from 'components/MyPage'
import { BurgerMenu } from 'components/BurgerMenu'
import { Header } from 'components/Header'

export const SERVER_URL = 'https://plants-ahoy.herokuapp.com';

export const getAuth = () => {
  return {
    userId: window.localStorage.getItem('userId'),
    userName: window.localStorage.getItem('userName'),
    accessToken: window.localStorage.getItem('accessToken')
  }
}

export const isLoggedIn = () => {
  const { accessToken } = getAuth()

  return !!accessToken
}

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <BurgerMenu />
        <Header />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/newad" component={SalesForm} />
          <Route path="/answer/:id" component={AnswerForm} />
          <Route path="/plants/:id" component={InfoCard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/mypage" component={MyPage} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}
