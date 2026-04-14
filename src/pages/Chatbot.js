import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2,
  Maximize2,
  Sparkles,
  Loader,
  Zap,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedTopics, setSuggestedTopics] = useState([]);
  const [conversationContext, setConversationContext] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatbotRef = useRef(null);
  const navigate = useNavigate();

  // API Base URL
  const API_BASE_URL = 'https://interviewr-backend.onrender.com/api';

  // Available categories from your backend
  const categories = [
    { name: 'Java', icon: '☕', path: 'java', color: 'orange', route: '/java' },
    { name: 'JavaScript', icon: '🟡', path: 'javascript', color: 'yellow', route: '/javascript' },
    { name: 'React', icon: '⚛️', path: 'react', color: 'blue', route: '/react' },
    { name: 'Node.js', icon: '🟢', path: 'node', color: 'green', route: '/node' },
    { name: 'Express', icon: '🚂', path: 'express', color: 'gray', route: '/express' },
    { name: 'Python', icon: '🐍', path: 'python', color: 'blue', route: '/python' },
    { name: 'MongoDB', icon: '🍃', path: 'mongodb', color: 'green', route: '/mongodb' },
    { name: 'MySQL', icon: '🗄️', path: 'mysql', color: 'cyan', route: '/mysql' },
    { name: 'DSA', icon: '📊', path: 'dsa', color: 'purple', route: '/dsa' },
    { name: 'HTML', icon: '🌐', path: 'html', color: 'red', route: '/html' },
    { name: 'CSS', icon: '🎨', path: 'css', color: 'blue', route: '/css' },
    { name: 'Tailwind', icon: '💨', path: 'tailwind', color: 'cyan', route: '/tailwind' },
    { name: 'HR Interview', icon: '💼', path: 'hr', color: 'pink', route: '/hr' },
    { name: 'Machine Learning', icon: '🤖', path: 'ml', color: 'indigo', route: '/ml' },
    { name: 'AI', icon: '🧠', path: 'AI', color: 'purple', route: '/ai' },
    { name: 'AWS', icon: '☁️', path: 'aws', color: 'yellow', route: '/aws' },
    { name: 'Docker', icon: '🐳', path: 'docker', color: 'blue', route: '/docker' },
    { name: 'Git', icon: '📝', path: 'git', color: 'orange', route: '/git' }
  ];

  // Navigate to question page
  const navigateToQuestions = (categoryPath, categoryName) => {
    navigate(`/${categoryPath}`);
    setIsOpen(false); // Close chatbot after navigation
  };

  // Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          type: 'bot',
          content: "👋 Hello! I'm your InterviewReady Assistant. I can help you with:\n\n• 📚 Finding interview questions and answers\n• 💡 Explaining programming concepts\n• 🎯 Providing practice recommendations\n• 📊 Suggesting learning paths\n\nWhat would you like to learn today?",
          timestamp: new Date(),
          suggestions: [
            "Show me Java interview questions",
            "Explain React hooks",
            "What are common DSA problems?",
            "Tips for HR interview"
          ]
        }
      ]);
      loadSuggestedTopics();
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Load suggested topics based on popular queries
  const loadSuggestedTopics = async () => {
    setSuggestedTopics([
      { text: "Top 10 JavaScript questions", category: "javascript", popularity: 95 },
      { text: "React interview preparation", category: "react", popularity: 92 },
      { text: "Java OOP concepts", category: "java", popularity: 88 },
      { text: "SQL queries for interview", category: "mysql", popularity: 85 },
      { text: "System design basics", category: "dsa", popularity: 82 }
    ]);
  };

  // Search for questions in database
  const searchQuestions = async (query, category = null) => {
    try {
      const matchedCategory = categories.find(cat => 
        query.toLowerCase().includes(cat.name.toLowerCase())
      );

      const searchCategory = category || (matchedCategory ? matchedCategory.path : null);
      
      if (searchCategory) {
        const response = await axios.get(`${API_BASE_URL}/questions/${searchCategory}`);
        return { success: true, data: response.data, category: searchCategory, categoryName: matchedCategory?.name };
      } else {
        const searchResults = [];
        for (const cat of categories) {
          try {
            const response = await axios.get(`${API_BASE_URL}/questions/${cat.path}`);
            const relevantQuestions = response.data.filter(q => 
              q.question.toLowerCase().includes(query.toLowerCase()) ||
              q.answer.toLowerCase().includes(query.toLowerCase())
            );
            searchResults.push(...relevantQuestions.map(q => ({ ...q, category: cat.name, categoryPath: cat.path })));
          } catch (err) {
            console.log(`No questions found for ${cat.path}`);
          }
        }
        return { success: true, data: searchResults, category: 'all' };
      }
    } catch (error) {
      console.error('Error searching questions:', error);
      return { success: false, error: error.message };
    }
  };

  // Get AI-like response based on query
  const generateResponse = async (userQuery) => {
    const query = userQuery.toLowerCase();
    
    // Check for greetings
    if (query.match(/^(hi|hello|hey|greetings)/)) {
      return {
        type: 'greeting',
        content: "Hello! I'm here to help you with interview preparation. What topic would you like to explore today?",
        suggestions: categories.slice(0, 4).map(c => `Questions about ${c.name}`)
      };
    }

    // Check for help request
    if (query.includes('help') || query.includes('what can you do')) {
      return {
        type: 'help',
        content: "I can assist you with:\n\n• 📖 Finding interview Q&A for any programming topic\n• 🎓 Explaining concepts with examples\n• 📝 Providing practice questions\n• 💡 Tips for technical interviews\n• 🎯 Personalized learning recommendations\n\nJust type your question or topic, and I'll find relevant answers from our database!",
        suggestions: ["Show me JavaScript questions", "Explain React lifecycle", "DSA practice problems"]
      };
    }

    // Check for specific topic questions
    const matchedCategory = categories.find(cat => 
      query.includes(cat.name.toLowerCase())
    );

    if (matchedCategory) {
      const result = await searchQuestions(query, matchedCategory.path);
      if (result.success && result.data.length > 0) {
        const questions = result.data.slice(0, 1); // Show only first question with full answer
        
        // Format the response with question and full answer
        let responseContent = `**${questions[0].question}**\n\n${questions[0].answer}`;
        
        return {
          type: 'questions',
          content: responseContent,
          fullQuestion: questions[0],
          category: matchedCategory.name,
          categoryPath: matchedCategory.path,
          showLinkButton: true,
          suggestions: [`More ${matchedCategory.name} questions`, `Advanced ${matchedCategory.name} topics`, `${matchedCategory.name} best practices`]
        };
      } else {
        return {
          type: 'no-results',
          content: `I couldn't find specific ${matchedCategory.name} questions at the moment. Would you like to browse all available questions?`,
          suggestions: [`Show all ${matchedCategory.name} topics`, "Basic concepts", "Common interview questions"],
          categoryPath: matchedCategory.path,
          categoryName: matchedCategory.name,
          showLinkButton: true
        };
      }
    }

    // General search across all categories
    const searchResult = await searchQuestions(query);
    if (searchResult.success && searchResult.data.length > 0) {
      const topResult = searchResult.data[0];
      
      let responseContent = `**${topResult.question}**\n\n${topResult.answer}`;
      
      return {
        type: 'search-results',
        content: responseContent,
        totalResults: searchResult.data.length,
        category: topResult.category,
        categoryPath: topResult.categoryPath,
        showLinkButton: true,
        suggestions: ["Show more results", "Try another topic", "Explain in detail"]
      };
    }

    // Default response with all categories as buttons
    return {
      type: 'default',
      content: "I want to help you prepare for your interview! Could you please specify which technology or topic you're interested in? For example:\n\n• 'Show me React interview questions'\n• 'Explain JavaScript closures'\n• 'DSA problems for interviews'\n• 'HR interview tips'\n\nI have questions and answers for all major programming topics!",
      suggestions: categories.slice(0, 6).map(c => `${c.name} questions`)
    };
  };

  // Handle sending message
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentQuery = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    setConversationContext(prev => [...prev, { role: 'user', content: currentQuery }]);

    try {
      const response = await generateResponse(currentQuery);
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response.content,
        timestamp: new Date(),
        suggestions: response.suggestions || [],
        fullQuestion: response.fullQuestion || null,
        category: response.category || null,
        categoryPath: response.categoryPath || null,
        showLinkButton: response.showLinkButton || false,
        totalResults: response.totalResults || null
      };

      setMessages(prev => [...prev, botMessage]);
      setConversationContext(prev => [...prev, { role: 'assistant', content: response.content }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: "I'm having trouble connecting to our knowledge base. Please try again in a moment.",
        timestamp: new Date(),
        suggestions: ["Try a different topic", "Ask about specific technology"]
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  // Copy message to clipboard
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Format timestamp
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Chatbot toggle
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur-xl group-hover:opacity-75 transition-opacity"></div>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div 
          ref={chatbotRef}
          className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl transition-all duration-300 flex flex-col ${
            isMinimized ? 'w-80 h-14' : 'w-[90vw] sm:w-[450px] h-[600px]'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl p-4 flex justify-between items-center cursor-pointer" onClick={!isMinimized ? toggleMinimize : undefined}>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 rounded-lg p-1.5">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">InterviewReady Assistant</h3>
                <p className="text-xs text-blue-100">Online • Ready to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!isMinimized && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMinimize();
                  }}
                  className="hover:bg-white/20 rounded-lg p-1 transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              )}
              {isMinimized && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMinimize();
                  }}
                  className="hover:bg-white/20 rounded-lg p-1 transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={toggleChatbot}
                className="hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div className={`max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start gap-2 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-blue-600' 
                            : 'bg-gradient-to-r from-purple-600 to-pink-600'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`relative group ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm' 
                            : 'bg-white text-gray-800 rounded-2xl rounded-tl-sm shadow-sm'
                        } p-3`}>
                          <div className="prose prose-sm max-w-none">
                            <ReactMarkdown
                              components={{
                                p: ({ children }) => <p className="mb-2 last:mb-0 whitespace-pre-wrap">{children}</p>,
                                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                                code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          </div>
                          

                          {/* LINK BUTTON for search results */}
                          {message.type === 'bot' && message.showLinkButton && message.categoryPath && message.category && (
                            <div className="mt-3 pt-2 border-t border-gray-100">
                              <button
                                onClick={() => navigateToQuestions(message.categoryPath, message.category)}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all hover:scale-105 w-full justify-center"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View all {message.category} questions →
                              </button>
                            </div>
                          )}
                          
                          {/* Copy button */}
                          <button
                            onClick={() => copyToClipboard(message.content, message.id)}
                            className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white rounded-full p-1.5 hover:bg-gray-700"
                          >
                            {copiedId === message.id ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                          
                          <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-blue-200' : 'text-gray-400'}`}>
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>

                      {/* Suggestions - Now shown AFTER the link button */}
                      {message.type === 'bot' && message.suggestions && message.suggestions.length > 0 && (
                        <div className="mt-2 ml-10 flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
                            >
                              <Sparkles className="w-3 h-3" />
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm p-3">
                      <div className="flex items-center gap-2">
                        <Loader className="w-4 h-4 text-purple-600 animate-spin" />
                        <span className="text-sm text-gray-500">Searching our knowledge base...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Categories */}
              <div className="border-t border-gray-200 bg-white p-3">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {categories.slice(0, 6).map((category) => (
                    <button
                      key={category.path}
                      onClick={() => handleSuggestionClick(`${category.name} interview questions`)}
                      className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors"
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 bg-white rounded-b-2xl p-3">
                <div className="flex items-end gap-2">
                  <div className="flex-1 relative">
                    <textarea
                      ref={inputRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about interview preparation..."
                      rows="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                      style={{ minHeight: '40px', maxHeight: '100px' }}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-4 py-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-400">
                    Powered by InterviewReady • 500+ Interview Questions
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Chatbot;