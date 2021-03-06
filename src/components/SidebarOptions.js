import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";
function SidebarOptions({ id, Icon, title, addChangeOptions }) {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("please enter the channel Name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (!id) {
      <p>Loading</p>;
    }
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };
  return (
    <SideBarOptionContainer
      onClick={addChangeOptions ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span>#{title}</span>
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  );
}

export default SidebarOptions;
const SideBarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  h3 > {
    font-weight: 500;
  }
  > h3 > span {
    /* padding: 15px; */
  }
`;

const SideBarOptionChannel = styled.h3`
  padding: 10px 20px;
  font-weight: 300;
`;
