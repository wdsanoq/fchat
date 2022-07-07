import React from 'react'
import styled from 'styled-components'

function Message({ message, timestamp, user, userImage }) {
  const time = new Date(timestamp?.toDate()).toUTCString()
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{time}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: grey;
    font-weight: 300;
    margin-left: 10px;
    font-size: 10px;
  }
`
