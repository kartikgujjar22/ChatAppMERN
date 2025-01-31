import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../api";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/messages`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(res.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      try {
        const res = await axios.post(
          `${BASE_URL}/messages`,
          { text: input },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMessages([...messages, res.data]);
        setInput("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      <header className="p-4 text-center bg-gray-800">Chat Room</header>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${
              msg.sender === "You" ? "bg-blue-600 ml-auto" : "bg-gray-700"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="p-4 flex space-x-2 bg-gray-800">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-3 bg-gray-700 rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;


// import React, { useEffect, useRef } from 'react';
// import { useChat } from '../context/ChatContext';
// import { LogOut } from 'lucide-react';
// import MessageInput from '../components/MessageInput';

// const Chat = () => {
//   const { state } = useChat();
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     if (state.messages.length > 0) {
//       scrollToBottom();
//     }
//   }, [state.messages]);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-gray-200 text-black p-3 flex justify-between items-center">
//         {/* Search Box on the left */}
//         <div className="flex items-center">
//           <div className="flex items-center bg-white rounded-md shadow-sm">
//             <input
//               type="text"
//               placeholder="Search users"
//               className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-l-md focus:outline-none"
//             />
//           </div>
//         </div>
        
//         {/* Heading in the center */}
//         <h1 className="text-xl font-semibold text-center flex-1">Chat app</h1>

//         {/* Log Out Button on the right */}
//         <button className="hover:bg-gray-700 p-2 rounded">
//           <LogOut className="w-5 h-5 text-black" />
//         </button>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-1 overflow-hidden bg-gray-800">
//         {/* Sidebar */}
//         <div className="w-96 bg-gray-700 border-r flex flex-col">
//           <div className="p-4 border-b text-white">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="font-semibold">My Chats</h2>
//             </div>
//           </div>
          
//           {/* Chat List */}
//           <div className="flex-1 overflow-y-auto">
//             {/* Empty state for chat list */}
//             <div className="p-4 text-gray-500 text-sm">
//               No chats available
//             </div>
//           </div>
//         </div>

//         {/* Chat Area */}
//         <div className="flex-1 flex flex-col bg-[#B0C4DE]">
//           <div className="flex-1 overflow-y-auto p-4 mb-20"> {/* Added margin bottom to ensure space for the input */}
//             {state.messages.length === 0 ? (
//               <div className="text-center text-gray-500">No messages yet. Start the conversation!</div>
//             ) : (
//               state.messages.map((message, index) => (
//                 <div key={index} className="mb-4 flex items-end">
//                   <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md max-w-xs">
//                     <p className="text-sm">{message.content}</p>
//                     <p className="text-xs text-gray-300 mt-1">{new Date(message.timestamp).toLocaleTimeString()}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Sticky Message Input */}
//           <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t dark:bg-gray-800 dark:border-gray-700">
//             <MessageInput />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
