import React from "react";
import styled from "styled-components";

import userM from "../mypic/mypic.jpg";

function Messages({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userM} alt="my" />
      <MessageInfo>
        <h4>
          {user}
          {``}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          <p>{message}</p>
        </h4>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Messages;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 22px;
  > img {
    height: 50px;
    width: 40px;
    border-radius: 6px;
    object-fit: cover;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
