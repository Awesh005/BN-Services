import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, RefreshCw, User } from 'lucide-react';
import { chatbotData, fallbackResponse, fallbackWhatsappMessage, buildWAUrl } from '../data/chatbotData';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  subOptions?: string[];
  waUrl?: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

// ── useIsMobile ───────────────────────────────────────────────────────────────

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
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

// ── WhatsApp CTA ──────────────────────────────────────────────────────────────

const WAIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: 'white', flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WhatsAppCTA: React.FC<{ url: string }> = ({ url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 4 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.2 }}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      marginTop: '10px', padding: '6px 13px',
      borderRadius: '99px', fontSize: '11px', fontWeight: 700,
      textDecoration: 'none', color: 'white',
      background: 'linear-gradient(135deg,#22c55e,#16a34a)',
      boxShadow: '0 2px 12px rgba(34,197,94,0.4)',
      transition: 'all 0.15s ease', cursor: 'pointer', alignSelf: 'flex-start',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(34,197,94,0.6)';
      (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.04)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(34,197,94,0.4)';
      (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
    }}
  >
    <WAIcon />
    Chat on WhatsApp →
  </motion.a>
);

// ── Sub-Option Buttons ────────────────────────────────────────────────────────

const SubOptionButtons: React.FC<{ options: string[]; onSelect: (o: string) => void }> = ({ options, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.22, delay: 0.1 }}
    style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}
  >
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onSelect(opt)}
        style={{
          padding: '5px 12px', borderRadius: '99px',
          fontSize: '11px', fontWeight: 600, cursor: 'pointer',
          border: '1px solid rgba(99,102,241,0.5)',
          background: 'linear-gradient(135deg,rgba(59,130,246,0.1),rgba(99,102,241,0.1))',
          color: '#a5b4fc', whiteSpace: 'nowrap', transition: 'all 0.16s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.background = 'linear-gradient(135deg,rgba(59,130,246,0.28),rgba(99,102,241,0.28))';
          el.style.borderColor = 'rgba(99,102,241,0.9)';
          el.style.color = '#c7d2fe';
          el.style.transform = 'scale(1.04)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.background = 'linear-gradient(135deg,rgba(59,130,246,0.1),rgba(99,102,241,0.1))';
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

// ── Welcome message factory ───────────────────────────────────────────────────

const makeWelcome = (): Message => ({
  id: `w_${Date.now()}`,
  text: "Hello! 👋 I'm your BN INTELHUB AI assistant.\n\nWhat can I help you with today?",
  sender: 'bot',
  timestamp: new Date(),
  subOptions: [
    "Web App", "Mobile App", "AI Solutions",
    "Digital Marketing", "Cyber Security", "GIS Mapping",
    "GPS Survey", "Cloud & Hosting", "CCTV Surveillance",
    "IoT Integrations", "Custom Software", "BI Tools",
    "Training Programs", "Managed Services",
    "All Services", "Pricing", "Contact", "Hire Us",
  ],
  waUrl: buildWAUrl("Hello BN INTELHUB! 👋 I visited your website and would like to know more."),
});

// ── Main Chatbot ──────────────────────────────────────────────────────────────

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();

  const [messages, setMessages] = useState<Message[]>([makeWelcome()]);
  const [input,    setInput]    = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef           = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const findMatch = (text: string) => {
    const norm = text.toLowerCase().trim();
    return chatbotData.find(item =>
      item.keywords.some(kw => norm.includes(kw.toLowerCase()))
    );
  };

  const handleSend = (text: string) => {
    if (!text.trim() || isTyping) return;
    const userMsg: Message = {
      id: `u_${Date.now()}`, text: text.trim(), sender: 'user', timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const match = findMatch(text);
      setMessages(prev => [...prev, {
        id: `b_${Date.now()}`,
        text: match?.response ?? fallbackResponse,
        sender: 'bot', timestamp: new Date(),
        subOptions: match?.subOptions,
        waUrl: buildWAUrl(match?.whatsappMessage ?? fallbackWhatsappMessage),
      }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const startOver = () => { setMessages([makeWelcome()]); setInput(''); };

  // ─────────────────────────────────────────────────────────────────────────
  // RESPONSIVE DIMENSIONS
  //
  // Desktop: fixed 400px wide, 600px tall, bottom-right corner
  // Mobile:  full screen width minus 16px margins each side,
  //          taller to use more of the screen, right-aligned to WA button
  // ─────────────────────────────────────────────────────────────────────────

  const chatStyle: React.CSSProperties = isMobile
    ? {
        position: 'fixed',
        bottom: '90px',           // above the WhatsApp button (24px + 56px + 10px gap)
        right: '8px',             // 8px from right edge — same as WA button edge
        left: '8px',              // 8px from left edge — fills screen safely
        width: 'auto',            // fills between left:8px and right:8px
        maxWidth: '100%',
        height: '75vh',           // 75% of viewport height on mobile
        maxHeight: '560px',
        zIndex: 100,
        borderRadius: '24px',
      }
    : {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '400px',
        maxWidth: '400px',
        height: '600px',
        zIndex: 100,
        borderRadius: '2.5rem',   // matches original rounded-[2.5rem]
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          exit={{   opacity: 0, scale: 0.92,  y: 16 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          style={{
            ...chatStyle,
            background: '#050505',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* ── Header ────────────────────────────────────────────────── */}
          <div style={{
            padding: isMobile ? '16px 20px' : '24px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(139,92,246,0.08))',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {/* AI Avatar with pulse rings */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: -5, borderRadius: '50%',
                  border: '1.5px solid rgba(99,102,241,0.35)',
                  animation: 'aiRingPulse 2.4s ease-in-out infinite', pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', inset: -2, borderRadius: '50%',
                  border: '1px solid rgba(59,130,246,0.2)',
                  animation: 'aiRingPulse 2.4s ease-in-out infinite',
                  animationDelay: '0.5s', pointerEvents: 'none',
                }} />
                <AIAvatar size={isMobile ? 'sm' : 'lg'} />
                <span style={{
                  position: 'absolute', bottom: -2, right: -2,
                  width: 11, height: 11, borderRadius: '50%',
                  background: '#22c55e', border: '2px solid #050505',
                  boxShadow: '0 0 6px rgba(34,197,94,0.7)',
                }} />
              </div>

              <div>
                <p style={{ color: 'white', fontWeight: 700, fontSize: isMobile ? 13 : 14, margin: 0 }}>
                  AI Assistant
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%', background: '#22c55e',
                    animation: 'typingBounce 2s ease-in-out infinite',
                    display: 'inline-block',
                  }} />
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Online
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 4 }}>
              <button onClick={startOver} title="Start Over"
                style={{
                  padding: 8, borderRadius: '50%', border: 'none',
                  background: 'transparent', cursor: 'pointer',
                  color: 'rgba(255,255,255,0.4)', transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)'; }}
              >
                <RefreshCw size={15} />
              </button>
              <button onClick={onClose}
                style={{
                  padding: 8, borderRadius: '50%', border: 'none',
                  background: 'transparent', cursor: 'pointer',
                  color: 'rgba(255,255,255,0.4)', transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)'; }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Rainbow shimmer */}
          <div style={{
            height: '1.5px', flexShrink: 0,
            background: 'linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6,#ec4899,#8b5cf6,#6366f1,#3b82f6)',
            backgroundSize: '200% 100%', animation: 'rainbowShift 4s linear infinite',
          }} />

          {/* ── Messages ──────────────────────────────────────────────── */}
          <div style={{
            flex: 1, overflowY: 'auto',
            padding: isMobile ? '12px 12px' : '16px',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  width: '100%',
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                  alignItems: 'flex-start', gap: 8,
                  maxWidth: isMobile ? '95%' : '92%',
                  width: '100%',
                }}>
                  {/* Avatar */}
                  {msg.sender === 'user' ? (
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <User size={13} color="rgba(255,255,255,0.6)" />
                    </div>
                  ) : (
                    <AIAvatar size="sm" />
                  )}

                  {/* Bubble + WA + sub-options */}
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                    <div style={{
                      padding: isMobile ? '10px 13px' : '12px 16px',
                      borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      fontSize: isMobile ? 12 : 13, lineHeight: '1.65',
                      whiteSpace: 'pre-line', wordBreak: 'break-word',
                      ...(msg.sender === 'user'
                        ? { background: 'var(--color-brand-primary,#3b82f6)', color: '#000' }
                        : {
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(255,255,255,0.85)',
                          }
                      ),
                    }}>
                      {msg.text}
                    </div>

                    {/* WhatsApp CTA */}
                    {msg.sender === 'bot' && msg.waUrl && (
                      <WhatsAppCTA url={msg.waUrl} />
                    )}

                    {/* Sub-options */}
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
                style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}
              >
                <AIAvatar size="sm" />
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px 16px 16px 4px',
                  padding: '11px 14px',
                  display: 'flex', gap: 5, alignItems: 'center',
                }}>
                  {[0, 150, 300].map((d, i) => (
                    <span key={i} style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.4)',
                      animation: 'typingBounce 1s ease-in-out infinite',
                      animationDelay: `${d}ms`, display: 'inline-block',
                    }} />
                  ))}
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Input ─────────────────────────────────────────────────── */}
          <div style={{
            padding: isMobile ? '10px 12px 14px' : '12px 20px 20px',
            borderTop: '1px solid rgba(255,255,255,0.05)', flexShrink: 0,
          }}>
            <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              style={{ position: 'relative' }}>
              <input
                type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 14,
                  padding: isMobile ? '11px 48px 11px 14px' : '13px 52px 13px 18px',
                  fontSize: isMobile ? 12 : 13,
                  color: 'white', outline: 'none',
                  boxSizing: 'border-box', transition: 'border-color 0.2s ease',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)')}
                onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
              <button type="submit" disabled={!input.trim() || isTyping}
                style={{
                  position: 'absolute', right: 5, top: '50%', transform: 'translateY(-50%)',
                  width: isMobile ? 34 : 38, height: isMobile ? 34 : 38,
                  borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: 'none',
                  cursor: input.trim() && !isTyping ? 'pointer' : 'not-allowed',
                  background: input.trim() && !isTyping
                    ? 'linear-gradient(135deg,#3b82f6,#6366f1)'
                    : 'rgba(255,255,255,0.08)',
                  boxShadow: input.trim() && !isTyping ? '0 0 12px rgba(99,102,241,0.4)' : 'none',
                  opacity: input.trim() && !isTyping ? 1 : 0.4,
                  transition: 'all 0.2s ease',
                }}>
                <Send size={14} color="white" />
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