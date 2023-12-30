import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://i.pinimg.com/236x/57/4a/7a/574a7a04c26634c080fd68c5e0b09213.jpg" />
      <div className="sidebarChat__info">
        <h2>Random person</h2>
        <p>This is the last message.</p>
      </div>
    </div>
  );
}
export default SidebarChat;
