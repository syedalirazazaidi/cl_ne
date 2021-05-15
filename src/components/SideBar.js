import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { sidebarButtonItems } from "./data/ButtonIcon";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@material-ui/icons/Inbox";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function SideBar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>PAPA FAM HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            Sonny Sangha
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>
      <SidebarOptions Icon={InsertCommentIcon} title="threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions and Reactions" />
      <SidebarOptions Icon={DraftsIcon} title="Saved icons" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOptions Icon={PeopleAltIcon} title="People and User's group" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File Browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOptions Icon={AddIcon} addChangeOptions title="Channels" />
      {channels?.docs.map((doc) => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SideBarContainer>
  );
}

export default SideBar;
const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.15;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    color: green;
  }
`;
const SideBarButtonItem = styled.div``;
