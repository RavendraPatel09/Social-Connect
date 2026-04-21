import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Image as ImageIcon, Smile, Bot } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { mockChats } from '../data/mockData';

const Chat = () => {
  const [activeChat, setActiveChat] = useState(mockChats[0]);
  const [msgInput, setMsgInput] = useState('');
  const [messages, setMessages] = useState(activeChat.messages);

  const handleSend = (e) => {
    e.preventDefault();
    if(!msgInput.trim()) return;
    
    const newMsg = { sender: 'me', text: msgInput, time: 'Just now' };
    setMessages([...messages, newMsg]);
    setMsgInput('');

    // Simulate AI / mock auto-reply after 1.5 seconds
    setTimeout(() => {
      setMessages(prev => [...prev, {  sender: 'them', text: 'Hey! I just got your message, let me check and get back to you shortly.', time: 'Just now' }]);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-2rem)] md:h-[calc(100vh-5rem)] border border-slate-800 rounded-2xl overflow-hidden mt-2 bg-slate-900/50">
        
        {/* Chat List (Sidebar) */}
        <div className="w-20 md:w-80 border-r border-slate-800 bg-slate-900 flex flex-col">
          <div className="p-4 border-b border-slate-800 flex justify-between items-center hidden md:flex">
            <h2 className="font-bold text-white text-xl">Messages</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {mockChats.map(chat => (
              <div 
                key={chat.id} 
                onClick={() => { setActiveChat(chat); setMessages(chat.messages); }}
                className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${activeChat.id === chat.id ? 'bg-violet-900/20 border-l-4 border-violet-500' : 'hover:bg-slate-800 border-l-4 border-transparent'}`}
              >
                <div className="relative">
                  <img src={chat.user.avatar} className="w-12 h-12 rounded-full object-cover" />
                  {chat.unread > 0 && (
                    <span className="absolute -top-1 -right-1 bg-sky-500 w-4 h-4 rounded-full border-2 border-slate-900"></span>
                  )}
                </div>
                
                <div className="hidden md:block flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-200 truncate">{chat.user.name}</h4>
                    <span className="text-xs text-slate-500">{chat.time}</span>
                  </div>
                  <p className={`text-sm truncate ${chat.unread > 0 ? 'text-white font-semibold' : 'text-slate-400'}`}>
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-slate-950">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={activeChat.user.avatar} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-white leading-tight">{activeChat.user.name}</h3>
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span> Online
                </span>
              </div>
            </div>
            <button className="text-violet-400 hover:text-violet-300 md:hidden bg-violet-500/10 p-2 rounded-lg">
              <Bot size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={idx} 
                className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
              >
                <div className={`max-w-[75%] md:max-w-[60%] p-3 rounded-2xl ${msg.sender === 'me' ? 'bg-violet-600 text-white rounded-tr-sm' : 'bg-slate-800 text-slate-200 rounded-tl-sm'}`}>
                  {msg.text}
                </div>
                <span className="text-xs text-slate-500 mt-1 px-1">{msg.time}</span>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900 border-t border-slate-800">
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <button type="button" className="p-2 text-slate-400 hover:text-white transition-colors"><ImageIcon size={20} /></button>
              <button type="button" className="p-2 text-slate-400 hover:text-white transition-colors relative group">
                <Bot size={20} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-violet-600 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">AI Suggestion</span>
              </button>
              
              <input 
                type="text" 
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                placeholder="Message..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-violet-500"
              />
              <button type="submit" className="p-2.5 bg-violet-600 hover:bg-violet-500 rounded-xl text-white transition-colors">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Chat;
