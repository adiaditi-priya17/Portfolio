
import { useState, type FormEvent } from "react";
import "./Chatbot.css";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey! 👋 I'm your portfolio assistant. Ask me anything!"
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim()
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: updatedMessages.slice(1)
        })
      });

      const data: { reply?: string; error?: string } =
        await response.json();

      if (!response.ok || !data.reply) {
        throw new Error(data.error || "Request failed");
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.reply
        }
      ]);

    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Sorry! Something went wrong. Please try again."
        }
      ]);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbot-container">

      {open && (
        <div className="chat-window">

          <div className="chat-header">
            <div>
              <h3>Portfolio AI 🤖</h3>
              <span>● Online</span>
            </div>

            <button onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.role}`}
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="message assistant">
                Typing...
              </div>
            )}
          </div>

          <form
            className="chat-input"
            onSubmit={sendMessage}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={loading}
            />

            <button type="submit" disabled={loading}>
              ➤
            </button>
          </form>

        </div>
      )}

      <button
        className="chat-toggle"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "💬"}
      </button>

    </div>
  );
}

export default Chatbot;
