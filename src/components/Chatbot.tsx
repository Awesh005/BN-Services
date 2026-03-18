import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatBotProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ isOpen: externalIsOpen, onClose: externalOnClose }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = (value: boolean) => {
    if (externalOnClose && !value) externalOnClose();
    setInternalIsOpen(value);
  };

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your BN INTELHUB AI assistant. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are an AI assistant for BN INTELHUB, an EdTech and Software Solutions company. You are professional, helpful, and innovative. You help users understand BN INTELHUB's services, which include software development, digital marketing, and educational technology solutions. Keep responses concise and engaging.",
        },
      });

      const response = await chat.sendMessage({ message: userMessage });
      const aiText = response.text || "I'm sorry, I couldn't process that request.";
      
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickReplies = [
    "What services do you offer?",
    "How can I contact you?",
    "Tell me about BN INTELHUB",
    "Do you offer AI solutions?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-24 right-6 z-[999]">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative group flex items-center justify-center p-[2px] rounded-full overflow-hidden transition-all duration-300 shadow-2xl ${
            isOpen ? 'bg-red-500/20 border border-red-500/50' : ''
          }`}
        >
          {/* Purple Border Glow Effect */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full border-2 border-[#8B5CF6] opacity-80 group-hover:opacity-100 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
          )}
          
          {/* Inner Dark Background */}
          <div className={`relative flex items-center justify-center w-14 h-14 rounded-full z-10 transition-colors duration-300 ${
            isOpen ? 'bg-red-500 text-white' : 'bg-[#050505]'
          }`}>
            {isOpen ? (
              <X size={24} />
            ) : (
              <div className="flex flex-col items-center justify-center -space-y-1">
                <Sparkles size={18} className="text-[#22D3EE] drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                <span className="text-[10px] font-display font-black tracking-tighter text-white relative">
                  AI
                  {/* Glitch Effect Layers */}
                  <span className="absolute inset-0 text-[#FF0080] opacity-0 group-hover:opacity-70 group-hover:translate-x-[1px] group-hover:translate-y-[-1px] transition-all duration-100 mix-blend-screen pointer-events-none">AI</span>
                  <span className="absolute inset-0 text-[#00FFFF] opacity-0 group-hover:opacity-70 group-hover:translate-x-[-1px] group-hover:translate-y-[1px] transition-all duration-100 mix-blend-screen pointer-events-none">AI</span>
                </span>
              </div>
            )}
          </div>

          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm z-20">
              <span className="w-2.5 h-2.5 bg-[#8B5CF6] rounded-full animate-pulse" />
            </span>
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-44 right-6 z-[999] w-[90vw] sm:w-[400px] h-[500px] bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-brand-primary/20 to-purple-500/20 border-bottom border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">BN AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary text-black rounded-tr-none' 
                      : 'bg-white/5 text-white/80 border border-white/10 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
                    <Loader2 className="animate-spin text-brand-primary" size={18} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {!isLoading && messages.length === 1 && (
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {quickReplies.map((reply, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    onClick={() => {
                      setInput(reply);
                      // Trigger send immediately
                      setTimeout(() => {
                        const btn = document.getElementById('chat-send-btn');
                        btn?.click();
                      }, 100);
                    }}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] text-white/60 hover:text-white transition-all"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-black/40">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-brand-primary/50 transition-all"
                />
                <motion.button
                  id="chat-send-btn"
                  onClick={handleSend}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading || !input.trim()}
                  className="w-11 h-11 bg-brand-primary text-black rounded-xl flex items-center justify-center disabled:opacity-50 disabled:hover:scale-100 transition-all"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 opacity-20">
                <Sparkles size={10} className="text-brand-primary" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-white">Powered by Gemini AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
