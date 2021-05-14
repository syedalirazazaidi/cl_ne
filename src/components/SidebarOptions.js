import React from "react";
import styled from "styled-components";

function SidebarOptions({ Icon, title, addChangeOptions }) {
  return (
    <SideBarOptionContainer>
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

const SideBarOptionChannel = styled.div``;
