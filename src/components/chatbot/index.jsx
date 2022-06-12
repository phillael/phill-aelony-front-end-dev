import React, { useEffect, useState, useRef } from "react";
import chatStyles from "./chatbot.module.scss";
import "../../utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Custom hook to provide size for chat window
import useWindowSize from "../../hooks/useWindowSize";
import axios from "axios";

const id = Math.random();
function botSay(text) {
  return {
    sender: "Phill",
    recipient: "user",
    text,
    timestamp: Date.now(),
  };
}

function userSay(text) {
  return {
    sender: "user",
    recipient: "chatbot",
    text,
    timestamp: Date.now(),
  };
}

export default function Chatbot() {
  const ref = useRef(undefined);
  const [open, setOpen] = useState(false);
  const [botMessages, setBotMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [message, setMessage] = useState("");
  const size = useWindowSize();
  const userStyles = {
    backgroundColor: "lightblue",
  };
  const motd =
    "My name is Phill Aelony. Have a look around. Just don't break anything! Let me know if you get lost or confused.";

  useEffect(() => {
    setBotMessages((prev) => [botSay(motd), ...prev]);
  }, []);

  useEffect(() => {
    // scroll newest message into view
    ref.current.scrollIntoView();
  }, [userMessages, botMessages]);

  function handleNewUserMessage() {
    // set user messages to all previous messages plus the new one
    setUserMessages((prev) => [...prev, userSay(message)]);
    // post the new message and id
    axios
      .post("https://chatbot-2427.twil.io/chat", {
        message,
        id,
      })
      // get the response and set the state of botMessages
      .then((response) => {
        setBotMessages((prev) => [
          ...prev,
          ...response.data.response.says
            // will need to reverse to display correctly
            .reverse()
            .map((say) => botSay(say.text)),
        ]);
        // clear the input
        setMessage("");
      });
  }

  function zip(a, b) {
    return a.flatMap((k, i) => [k, b[i]]);
  }

  return (
    <div className={chatStyles.chatBot}>
      <div className={chatStyles.launcher} onClick={() => setOpen(!open)}>
        {open ? (
          <FontAwesomeIcon icon={"times"} />
        ) : (
          <FontAwesomeIcon icon={"comments"} />
        )}
      </div>

      <div
        style={size.width < 601 ? { height: size.height } : null}
        className={`${chatStyles.chatWindow} ${open && chatStyles.open}`}
      >
        <div className={chatStyles.head}>
          <h3>Welcome</h3>
          <h4>Let me know if you have any questions!</h4>
        </div>
        <div id="dialogue" className={chatStyles.dialogue}>
          {/* the zip function will return a new array with the bot messages
          and user messages in order of the conversation */}
          {zip(botMessages, userMessages).map((message) => {
            return message ? (
              message.sender === "user" ? (
                <div className={chatStyles.messageBubble} style={userStyles}>
                  {message.text}
                </div>
              ) : (
                <div className={chatStyles.botMessage}>
                  <img
                    className={chatStyles.avatar}
                    src="../../images/weirdface.png"
                    alt="avatar face"
                  />
                  <div className={chatStyles.messageBubble}>{message.text}</div>
                </div>
              )
            ) : (
              ""
            );
          })}
          {/* chat window ref to manage scroll into view */}
          <div ref={ref} />
        </div>
        <div className={chatStyles.inputBox}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNewUserMessage();
            }}
          >
            <input
              className={chatStyles.input}
              type="text"
              style={{ width: "100%", boxSizing: "border-box" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <FontAwesomeIcon
              onClick={handleNewUserMessage}
              icon={"paper-plane"}
              className={chatStyles.sendIcon}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
