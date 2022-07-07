import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

function Login() {
  const signIn = e => {
    e.preventDefault()
    signInWithPopup(auth, provider).catch(console.log)
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://pngimg.com/uploads/pineapple/pineapple_PNG95135.png"
          alt=""
        />
        <h1>Sign-in to General</h1>

        <Button type="submit" onClick={signIn}>
          Sign-in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.3);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 40px;
    text-transform: inherit;
    background-color: #2a58ab;
    color: white;
  }
`
