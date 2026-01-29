
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getAssistantResponse } from '../services/geminiService';
import Button from './Button';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi! I’m the CommsFlow Guide. Want to know how I can help with your internal messaging strategy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 glass-panel rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500 bg-white">
          <div className="bg-gradient-to-r from-[#f83e02] to-[#feb431] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fas fa-sparkles text-sm"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm">Portfolio Assistant</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] opacity-80 uppercase font-medium">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 h-80 p-4 overflow-y-auto space-y-4 bg-[#fde7cf]/20"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#f83e02] text-white rounded-br-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#feb431] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#feb431] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#feb431] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about a project..."
                className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#f83e02]"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-[#f83e02] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f83e02]/80 transition-colors"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-[#f83e02] to-[#feb431] rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 relative group"
      >
        {isOpen ? (
           <i className="fas fa-comment-slash text-2xl"></i>
        ) : (
          <i className="fas fa-comment-dots text-2xl"></i>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
