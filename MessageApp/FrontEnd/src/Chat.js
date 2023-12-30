import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
import { React, useState , useEffect } from "react";
import "./Chat.css";
 
function Chat({ messages }) {
  const [input, setInput] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []); 
  const fetchMessages = async () => {
    const response = await axios.get("/messages/sync");
    setAllMessages(response.data);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Thanh",
      timestamp: "0",
      received: true,
    });

    setInput("");
    fetchMessages();  

  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://i.pinimg.com/236x/57/4a/7a/574a7a04c26634c080fd68c5e0b09213.jpg" />

        <div className="chat__headerInfo">
          <h3>Current chat</h3>
          <p>Last seen at 5:55 AM</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span
              className="chat__timestamp"
              style={{ height: "0%", width: "100%", marginRight: "-22px" }}
            >
              {message.timestamp}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
