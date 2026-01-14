
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string, sources?: any[]}[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const predefinedPrompts = [
    "2024年以降の生成AI活用事業のトレンドは？",
    "ドローン物流の最新の法規制と市場規模を教えて",
    "シード期スタートアップのPMF事例を調べて",
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    setLoading(true);
    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setInput('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: query,
        config: {
          tools: [{ googleSearch: {} }],
          systemInstruction: "あなたはプロフェッショナルな新規事業PdMです。Google検索を活用して、最新かつ具体的な市場情報、競合動向、技術トレンドを回答してください。専門用語を使いつつ、ビジネスに役立つ示唆を加えてください。",
        },
      });

      const text = response.text || "申し訳ありません、回答を生成できませんでした。";
      const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

      setMessages(prev => [...prev, { role: 'ai', text, sources }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "エラーが発生しました。時間を置いて再度お試しください。" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-neutralBg rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col h-[600px]">
          {/* Chat Display */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-cta text-white font-medium rounded-tr-none' 
                    : 'bg-white text-textMain shadow-sm border border-gray-100 rounded-tl-none leading-relaxed'
                }`}>
                  <div className="whitespace-pre-wrap text-sm md:text-base">{msg.text}</div>
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-[10px] font-bold text-textSub uppercase tracking-widest mb-2">Sources (Google Search Grounding)</p>
                      <div className="flex flex-wrap gap-2">
                        {msg.sources.map((src, sIdx) => (
                          src.web && (
                            <a 
                              key={sIdx} 
                              href={src.web.uri} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[10px] bg-neutralBg px-2 py-1 rounded border border-gray-200 hover:border-cta transition-colors max-w-[150px] truncate"
                              title={src.web.title}
                            >
                              🔗 {src.web.title}
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cta rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cta rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-cta rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex flex-wrap gap-2 mb-4">
              {predefinedPrompts.map((p, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleSearch(p)}
                  className="text-xs font-bold px-3 py-1.5 bg-neutralBg rounded-lg hover:bg-cta/5 hover:text-cta border border-transparent hover:border-cta/20 transition-all"
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(input)}
                placeholder="例：2025年の国内ドローン配送の法改正について教えて"
                className="flex-1 bg-neutralBg border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cta/20"
              />
              <button 
                onClick={() => handleSearch(input)}
                disabled={loading}
                className="bg-primary text-white p-3 rounded-xl hover:bg-cta transition-colors disabled:opacity-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
