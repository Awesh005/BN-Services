import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, RefreshCw, User } from 'lucide-react';
import { chatbotData, fallbackResponse } from '../data/chatbotData';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  subOptions?: string[];
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

// ── Sound Wave Bars ───────────────────────────────────────────────────────────

const SoundWaveBars: React.FC<{ barH?: number; barW?: number; gap?: number; color?: string }> = ({
  barH = 18, barW = 3, gap = 2.5, color = 'white',
}) => {
  const bars = [
    { s: 0.4, a: 'cbW1', d: '0.85s' },
    { s: 0.7, a: 'cbW2', d: '0.92s' },
    { s: 1.0, a: 'cbW3', d: '0.88s' },
    { s: 0.7, a: 'cbW4', d: '0.95s' },
    { s: 0.4, a: 'cbW5', d: '0.80s' },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: `${gap}px`, height: `${barH}px` }}>
      {bars.map((b, i) => (
        <div key={i} style={{
          width: `${barW}px`, height: `${barH * b.s}px`,
          borderRadius: '99px', background: color,
          transformOrigin: 'center',
          animation: `${b.a} ${b.d} ease-in-out infinite`,
          animationDelay: `${i * 0.09}s`, flexShrink: 0,
        }} />
      ))}
    </div>
  );
};

// ── AI Avatar ─────────────────────────────────────────────────────────────────

const AIAvatar: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'sm' }) => {
  const dim = size === 'lg' ? 40 : 32;
  return (
    <div style={{
      width: dim, height: dim, borderRadius: '50%',
      background: 'linear-gradient(135deg,#3b82f6 0%,#6366f1 55%,#8b5cf6 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, position: 'relative', overflow: 'hidden',
      boxShadow: size === 'lg' ? '0 0 18px rgba(99,102,241,0.5)' : '0 0 10px rgba(99,102,241,0.4)',
    }}>
      <div style={{
        position: 'absolute', top: 3, left: 4, width: '44%', height: '36%',
        background: 'radial-gradient(ellipse,rgba(255,255,255,0.28) 0%,rgba(255,255,255,0) 100%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <SoundWaveBars
        barH={size === 'lg' ? 16 : 12}
        barW={size === 'lg' ? 3 : 2}
        gap={size === 'lg' ? 2.5 : 2}
        color="white"
      />
    </div>
  );
};

// ── Sub-Option Buttons (purple/indigo highlighted) ────────────────────────────

const SubOptionButtons: React.FC<{ options: string[]; onSelect: (o: string) => void }> = ({ options, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.22, delay: 0.12 }}
    style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '10px' }}
  >
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onSelect(opt)}
        style={{
          padding: '5px 13px',
          borderRadius: '99px',
          fontSize: '11px',
          fontWeight: 600,
          cursor: 'pointer',
          border: '1px solid rgba(99,102,241,0.5)',
          background: 'linear-gradient(135deg,rgba(59,130,246,0.12),rgba(99,102,241,0.12))',
          color: '#a5b4fc',
          whiteSpace: 'nowrap',
          transition: 'all 0.16s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.background = 'linear-gradient(135deg,rgba(59,130,246,0.3),rgba(99,102,241,0.3))';
          el.style.borderColor = 'rgba(99,102,241,0.9)';
          el.style.color = '#c7d2fe';
          el.style.transform = 'scale(1.04)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.background = 'linear-gradient(135deg,rgba(59,130,246,0.12),rgba(99,102,241,0.12))';
          el.style.borderColor = 'rgba(99,102,241,0.5)';
          el.style.color = '#a5b4fc';
          el.style.transform = 'scale(1)';
        }}
      >
        {opt}
      </button>
    ))}
  </motion.div>
);

// ── Welcome message with ALL service options as subOptions ────────────────────

const makeWelcome = (): Message => ({
  id: `w_${Date.now()}`,
  text: "Hello! 👋 I'm your BN INTELHUB AI assistant.\n\nWhat can I help you with today?",
  sender: 'bot',
  timestamp: new Date(),
  // ALL service categories shown as purple buttons — no bottom pills needed
  subOptions: [
    "Web App",
    "Mobile App",
    "AI Solutions",
    "Digital Marketing",
    "Cyber Security",
    "GIS Mapping",
    "GPS Survey",
    "Cloud & Hosting",
    "CCTV Surveillance",
    "IoT Integrations",
    "Custom Software",
    "BI Tools",
    "Training Programs",
    "Managed Services",
    "All Services",
    "Pricing",
    "Contact",
    "Hire Us",
  ],
});

// ── Main Chatbot ──────────────────────────────────────────────────────────────

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([makeWelcome()]);
  const [input,    setInput]    = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef           = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // ── Match query ────────────────────────────────────────────────────────────
  const findMatch = (text: string) => {
    const norm = text.toLowerCase().trim();
    return chatbotData.find(item =>
      item.keywords.some(kw => norm.includes(kw.toLowerCase()))
    );
  };

  // ── Send ───────────────────────────────────────────────────────────────────
  const handleSend = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: `u_${Date.now()}`,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const match = findMatch(text);
      const botMsg: Message = {
        id: `b_${Date.now()}`,
        text: match?.response ?? fallbackResponse,
        sender: 'bot',
        timestamp: new Date(),
        subOptions: match?.subOptions,
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  // ── Start over ─────────────────────────────────────────────────────────────
  const startOver = () => {
    setMessages([makeWelcome()]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
          className="fixed bottom-6 right-6 z-[100] w-full max-w-[400px] h-[600px] bg-[#050505] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* ── Header ────────────────────────────────────────────────── */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10">
            <div className="flex items-center gap-3">
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: -5, borderRadius: '50%',
                  border: '1.5px solid rgba(99,102,241,0.35)',
                  animation: 'aiRingPulse 2.4s ease-in-out infinite',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', inset: -2, borderRadius: '50%',
                  border: '1px solid rgba(59,130,246,0.2)',
                  animation: 'aiRingPulse 2.4s ease-in-out infinite',
                  animationDelay: '0.5s', pointerEvents: 'none',
                }} />
                <AIAvatar size="lg" />
                <span style={{
                  position: 'absolute', bottom: -2, right: -2,
                  width: 12, height: 12, borderRadius: '50%',
                  background: '#22c55e', border: '2px solid #050505',
                  boxShadow: '0 0 6px rgba(34,197,94,0.7)',
                }} />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm">AI Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Online</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={startOver} title="Start Over"
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white">
                <RefreshCw size={16} />
              </button>
              <button onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Rainbow shimmer */}
          <div style={{
            height: '1.5px', flexShrink: 0,
            background: 'linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6,#ec4899,#8b5cf6,#6366f1,#3b82f6)',
            backgroundSize: '200% 100%',
            animation: 'rainbowShift 4s linear infinite',
          }} />

          {/* ── Messages — takes all remaining space ───────────────────── */}
          <div className="flex-grow overflow-y-auto px-4 py-4 flex flex-col gap-4 scrollbar-hide">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  width: '100%',
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                  alignItems: 'flex-start',
                  gap: '8px',
                  maxWidth: '92%',
                }}>
                  {/* Avatar */}
                  {msg.sender === 'user' ? (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <User size={14} className="text-white/60" />
                    </div>
                  ) : (
                    <AIAvatar size="sm" />
                  )}

                  {/* Bubble + sub-options */}
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: msg.sender === 'user'
                        ? '16px 16px 4px 16px'
                        : '16px 16px 16px 4px',
                      fontSize: '13px',
                      lineHeight: '1.65',
                      whiteSpace: 'pre-line',
                      wordBreak: 'break-word',
                      ...(msg.sender === 'user'
                        ? { background: 'var(--color-brand-primary,#3b82f6)', color: '#000' }
                        : {
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(255,255,255,0.82)',
                          }
                      ),
                    }}>
                      {msg.text}
                    </div>

                    {/* Purple sub-option buttons */}
                    {msg.sender === 'bot' && msg.subOptions && msg.subOptions.length > 0 && (
                      <SubOptionButtons options={msg.subOptions} onSelect={handleSend} />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}
              >
                <AIAvatar size="sm" />
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px 16px 16px 4px',
                  padding: '12px 16px',
                  display: 'flex', gap: '5px', alignItems: 'center',
                }}>
                  {[0, 150, 300].map((d, i) => (
                    <span key={i} style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.4)',
                      animation: 'typingBounce 1s ease-in-out infinite',
                      animationDelay: `${d}ms`,
                      display: 'inline-block',
                    }} />
                  ))}
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── NO bottom pills — removed entirely ────────────────────── */}

          {/* ── Input ─────────────────────────────────────────────────── */}
          <div style={{
            padding: '12px 20px 20px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              style={{ position: 'relative' }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '13px 52px 13px 18px',
                  fontSize: '13px',
                  color: 'white',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)')}
                onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                style={{
                  position: 'absolute', right: 6, top: '50%',
                  transform: 'translateY(-50%)',
                  width: 38, height: 38, borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: 'none',
                  cursor: input.trim() && !isTyping ? 'pointer' : 'not-allowed',
                  background: input.trim() && !isTyping
                    ? 'linear-gradient(135deg,#3b82f6,#6366f1)'
                    : 'rgba(255,255,255,0.08)',
                  boxShadow: input.trim() && !isTyping ? '0 0 14px rgba(99,102,241,0.4)' : 'none',
                  opacity: input.trim() && !isTyping ? 1 : 0.4,
                  transition: 'all 0.2s ease',
                }}
              >
                <Send size={15} color="white" />
              </button>
            </form>
          </div>

          {/* ── Keyframes ─────────────────────────────────────────────── */}
          <style>{`
            @keyframes cbW1 { 0%,100%{transform:scaleY(0.4)} 50%{transform:scaleY(1)}   }
            @keyframes cbW2 { 0%,100%{transform:scaleY(0.7)} 50%{transform:scaleY(0.3)} }
            @keyframes cbW3 { 0%,100%{transform:scaleY(1)}   50%{transform:scaleY(0.5)} }
            @keyframes cbW4 { 0%,100%{transform:scaleY(0.5)} 50%{transform:scaleY(0.9)} }
            @keyframes cbW5 { 0%,100%{transform:scaleY(0.3)} 50%{transform:scaleY(0.8)} }
            @keyframes aiRingPulse {
              0%,100%{ opacity:0.7; transform:scale(1);   }
              50%    { opacity:0;   transform:scale(1.5); }
            }
            @keyframes rainbowShift {
              0%  { background-position:0%   center; }
              100%{ background-position:200% center; }
            }
            @keyframes typingBounce {
              0%,100%{ transform:translateY(0);    }
              50%    { transform:translateY(-4px); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};