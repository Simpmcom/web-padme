import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, RefreshCw, Send, Bot } from 'lucide-react';
import { marked } from 'marked';
import OpenAI from 'openai';

const DEFAULT_GREETING = "Xin chào! Tôi là Trợ Lý Ảo PADME. Tôi có thể giúp gì cho bạn hôm nay?";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: DEFAULT_GREETING, id: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [systemPrompt, setSystemPrompt] = useState('');
  const messagesEndRef = useRef(null);

  // Khởi tạo OpenAI client (Ghi đè baseURL theo yêu cầu)
  const openai = new OpenAI({
    baseURL: 'https://9router.vuhai.io.vn/v1',
    apiKey: 'sk-4bd27113b7dc78d1-lh6jld-f4f9c69f',
    dangerouslyAllowBrowser: true // Bắt buộc khi gọi API trực tiếp từ Client-side
  });

  // Tự động cuộn xuống tin nhắn mới nhất
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Load kiến thức chatbot khi khởi tạo
  useEffect(() => {
    const fetchKnowledge = async () => {
      try {
        const response = await fetch("/chatbot_data.txt");
        let knowledgeBase = "";
        if (response.ok) {
          knowledgeBase = await response.text();
        } else {
          console.error("Không tải được cơ sở dữ liệu cho chatbot!");
        }

        const prompt = `Bạn là AI trợ lý cá nhân độc quyền trên website của chuyên gia Nguyễn Văn A.
Nhiệm vụ của bạn là hỗ trợ khách truy cập lịch sự, cung cấp thông tin chính xác về các dịch vụ, khóa học, và dự án của chuyên gia này.

Dưới đây là cơ sở dữ liệu kiến thức (Knowledge Base) của bạn:
${knowledgeBase}

Quy tắc giao tiếp bắt buộc:
1. Luôn chào hỏi thân thiện và kết thúc bằng cách mời họ đặt thêm câu hỏi.
2. Bạn phải định dạng các câu trả lời của mình bằng Markdown đầy đủ (in đậm ý chính, dùng gạch đầu dòng, tạo code block nếu cần).
3. Nếu người dùng hỏi điều gì ngoài phạm vi dữ liệu trên, hãy tế nhị từ chối và hướng dẫn họ gửi email hoặc nhắn tin Zalo trực tiếp cho chuyên gia.
4. Không được phép bịa đặt thông tin ngoài cơ sở dữ liệu đã cấp.`;
        setSystemPrompt(prompt);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu chatbot:", error);
      }
    };
    fetchKnowledge();
  }, []);

  // Logic Nút Refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Xóa toàn bộ lịch sử
    setMessages([]);
    setTimeout(() => {
      // In lại câu thiết lập chào mặc định ban đầu
      setMessages([{ role: 'bot', text: DEFAULT_GREETING, id: Date.now() }]);
      // Gỡ hiệu ứng xoay của icon sau đúng 500ms
      setIsRefreshing(false);
    }, 500);
  };

  const simulateAIResponse = async (userText, currentMessages) => {
    setIsTyping(true);
    try {
      // Chuẩn bị messages gửi API
      const apiMessages = [
        { role: 'system', content: systemPrompt },
        ...currentMessages.map(msg => ({
          role: msg.role === 'bot' ? 'assistant' : 'user',
          content: msg.text
        }))
      ];

      // Gửi request POST gọi chat completion
      const completion = await openai.chat.completions.create({
        model: "ces-chatbot-gpt-5.4",
        messages: apiMessages,
      });

      const botResponse = completion.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'bot', text: botResponse, id: Date.now() }]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Xin lỗi, hiện tại tôi đang gặp sự cố kết nối. Vui lòng thử lại sau.", id: Date.now() }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    // Chặn gửi tin nhắn rỗng hoặc đang trong lúc AI typing
    if (!inputValue.trim() || isTyping) return;

    const userMessage = { role: 'user', text: inputValue, id: Date.now() };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInputValue('');
    
    await simulateAIResponse(inputValue, newMessages);
  };

  const renderMarkdown = (text) => {
    // Parse Markdown text using marked.js
    const html = marked.parse(text);
    return { __html: html };
  };

  return (
    <>
      {/* 1️⃣ Floating Chatbot */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-[9999] p-4 rounded-full bg-gradient-to-r from-[#ffb77a] to-[#f28d21] text-white shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center glow-primary border-none"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window Container - Glassmorphism */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-[350px] md:w-[380px] h-[520px] z-[10000] flex flex-col rounded-2xl shadow-2xl overflow-hidden glass-card transition-all duration-300 border border-white/20" style={{ backdropFilter: 'blur(16px)', backgroundColor: 'rgba(20, 25, 40, 0.75)' }}>
          
          {/* 2️⃣ Header Chat Window */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-white/10 bg-black/20">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb77a] to-[#f28d21]">
                <Bot size={20} className="text-white" />
                {/* Trạng thái online (Có dấu chấm xanh nhấp nháy báo hiệu đang hoạt động) */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-wide">Trợ Lý Ảo PADME</h3>
                <p className="text-xs text-green-400 font-medium opacity-90">Đang hoạt động</p>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              {/* Nút Refresh */}
              <button 
                onClick={handleRefresh}
                className={`p-1.5 text-slate-300 hover:text-white rounded-md hover:bg-white/10 transition-all duration-500 ${isRefreshing ? 'rotate-180 animate-spin text-[#f28d21]' : ''}`}
                title="Làm mới cuộc hội thoại"
              >
                <RefreshCw size={18} />
              </button>
              {/* Nút Close */}
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                title="Đóng cửa sổ"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 relative scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent bg-transparent">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-md ${msg.role === 'user' ? 'bg-gradient-to-r from-[#ffb77a] to-[#f28d21] text-slate-900 font-medium rounded-br-none' : 'glass-card-light text-slate-200 rounded-bl-none border border-white/5 bg-slate-800/60'}`}>
                  {msg.role === 'user' ? (
                    <p>{msg.text}</p>
                  ) : (
                    /* 4️⃣ Tích hợp Marked.js render qua dangerouslySetInnerHTML */
                    <div className="chat-markdown" dangerouslySetInnerHTML={renderMarkdown(msg.text)} />
                  )}
                </div>
              </div>
            ))}
            
            {/* 6️⃣ Hiệu ứng Typing */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-bl-none px-4 py-3 glass-card-light flex flex-col items-start gap-2 bg-slate-800/60 border border-white/5">
                  <span className="text-xs text-slate-400 italic font-medium">Đang nhập...</span>
                  <div className="flex space-x-1.5 items-center h-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-white/10 bg-black/30 backdrop-blur-md">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập tin nhắn..." 
                className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-full py-2.5 pl-4 pr-12 focus:outline-none focus:border-[#f28d21]/70 placeholder-slate-400 transition-colors shadow-inner"
                disabled={isTyping}
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-1.5 p-1.5 rounded-full bg-gradient-to-r from-[#ffb77a] to-[#f28d21] text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all glow-primary"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
          
        </div>
      )}
    </>
  );
}
