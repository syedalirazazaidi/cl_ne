import Button from "@material-ui/core/Button";
import React from "react";
import styled from "styled-components";
import firebase from "firebase";
import { db } from "../firebase";

function ChatInput({ channelId }) {
  const inputRef = React.useRef(null);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "sunny",
      userImage: "../mypic/mypic.jpg",
    });
    inputRef.current.value = "";
  };

  console.log(channelId, "iiiiiiii");
  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder={`Message #Room`} />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
