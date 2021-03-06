import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
// import { InfoOutlined } from "@material-ui/icons";
import StarBorderOutlined from "@material-ui/icons/StarBorder";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";

import ChatBottom from "./ChatBottom";
import { db } from "../firebase";

import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Messages from "./Messages";

function Chat() {
  const chatRef = React.useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails, loading] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessage] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);
  return (
    <ChatContainer>
      {roomDetails && roomMessage && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon />
                Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessage?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Messages
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelId={roomId}
            channelname={roomDetails?.data().name}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 20px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
const ChatContainer = styled.div`
  overflow-y: scroll;
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
`;
