import React, { useState, useRef, useEffect } from "react";
import { OpenAI } from "openai";

function Chat(props) {
  const setIsChatActive = props.setIsChatActive;
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const handleClick = () => {
    setIsChatActive(true);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  async function getAssistantResponse(input) {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are talking to a friend. " },
          { role: "user", content: input },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 50, // Limit the length of the response
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error("Error:", error);
      return "Sorry, I couldn't process your request at the moment.";
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    const userMessage = inputValue.trim();
    if (userMessage === "") return; // Don't send empty messages

    setMessages([
      ...messages,
      { role: "user", content: userMessage },
      { role: "assistant", content: await getAssistantResponse(userMessage) },
    ]);
    setInputValue(""); // Clear the input field after submitting
  };

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update the input value as it changes
  };

  return (
    <div
      className="w-25 p-0 d-flex flex-row flex-wrap mt-5 border border-primary rounded"
      style={{ height: "20vw", overflowY: "auto" }}
    >
      <div className="w-100 rounded-top border border-primary bg-secondary d-flex justify-content-between">
        Avatar
        <button className="rounded bg-light" onClick={handleClick}>
          X
        </button>
      </div>
      <div className="h-75 w-100 bg-light overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "d-flex flex-row-reverse"
                : "d-flex flex-row"
            }
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-100 rounded-bottom border border-primary bg-secondary d-flex justify-content-center align-items-center"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="h-75 rounded"
          placeholder="Type message here"
        ></input>
        <button type="submit">Send</button> {/* Changed input type to button */}
      </form>
    </div>
  );
}

export default Chat;
