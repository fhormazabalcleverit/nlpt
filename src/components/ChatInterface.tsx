import React, { useState, useEffect } from 'react';
import { Mic, BarChart3, LayoutDashboard, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ChatInterface = () => {
  const { t } = useLanguage();
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrases = [
      t.chatInterface.placeholder1,
      t.chatInterface.placeholder2,
      t.chatInterface.placeholder3
    ];

    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      // Typing effect
      if (currentPlaceholder.length < phrases[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentPlaceholder(phrases[currentIndex].slice(0, currentPlaceholder.length + 1));
        }, 50); // Typing speed
      } else {
        // Wait before starting to erase
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Erasing effect
      if (currentPlaceholder.length > 0) {
        timeout = setTimeout(() => {
          setCurrentPlaceholder(currentPlaceholder.slice(0, -1));
        }, 15); // Erasing speed (much faster than typing)
      } else {
        // Move to next phrase and start typing
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentPlaceholder, currentIndex, isTyping, t]);

  // Reset animation when language changes
  useEffect(() => {
    setCurrentPlaceholder('');
    setCurrentIndex(0);
    setIsTyping(true);
  }, [t]);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 md:mt-16 mb-4 md:mb-8 relative z-20">
      {/* Chat Interface Container */}
      <div className="bg-gradient-to-r from-pink-500/20 via-purple-600 to-pink-500 p-1 rounded-2xl md:rounded-3xl backdrop-blur-sm">
        <div className="bg-backblack rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-700/30">
          {/* Chat Input */}
          <div className="bg-backblack rounded-lg md:rounded-xl p-1.5 md:p-2 mb-1.5 md:mb-2 border border-gray-600/30">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-transparent text-white text-sm md:text-base outline-none text-left py-1"
                />
                {!message && (
                  <div className="absolute inset-0 flex items-center pointer-events-none pl-1">
                    <span className="text-gray-400 text-xs md:text-sm text-left">
                      {currentPlaceholder}
                      <span className="animate-pulse">|</span>
                    </span>
                  </div>
                )}
              </div>
              <button
                onClick={toggleListening}
                className={`p-1.5 md:p-2 rounded-full transition-all duration-200 ${
                  isListening
                    ? 'bg-pink-500 text-gray-700'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Mic className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
              </button>
              <button
                onClick={handleSendMessage}
                className="hidden md:flex bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full font-medium text-sm transition-all duration-200 transform hover:scale-105"
              >
                {t.chatInterface.sendButton}
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-start gap-2 md:gap-4 mb-3 md:mb-6">
            <button className="flex items-center gap-1.5 md:gap-2 text-gray-700 hover:text-white transition-colors duration-200 group">
              <BarChart3 className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:text-pink-400" />
              <span className="text-xs">{t.chatInterface.metricsLabel}</span>
            </button>
            <button className="flex items-center gap-1.5 md:gap-2 text-gray-700 hover:text-white transition-colors duration-200 group">
              <LayoutDashboard className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:text-pink-400" />
              <span className="text-xs">{t.chatInterface.dashboardLabel}</span>
            </button>
            <button className="flex items-center gap-1.5 md:gap-2 text-gray-700 hover:text-white transition-colors duration-200 group">
              <FileText className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:text-pink-400" />
              <span className="text-xs">{t.chatInterface.reportsLabel}</span>
            </button>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[11px] md:text-xs">{t.chatInterface.statusOnline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;