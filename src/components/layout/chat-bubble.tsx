
"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Loader2, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { chat, type ChatOutput } from "@/ai/flows/chatbot";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";

interface Message {
    sender: 'user' | 'bot';
    text: string;
    sources?: ChatOutput['sources'];
}

// Helper function to parse simple Markdown (bold)
const renderMessage = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};


export function ChatBubble() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen && messages.length === 0) {
        // Add initial bot message when chat opens for the first time
        setMessages([
            { sender: 'bot', text: 'Chào bồ, tớ là Chiêu Minh đây! Bồ cần tớ giúp gì không nè?' }
        ]);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await chat({ query: userMessage.text });
      const botMessage: Message = { sender: 'bot', text: result.answer, sources: result.sources };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = { sender: 'bot', text: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // Auto-scroll to the bottom when new messages are added
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
             viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);

  return (
    <>
      <div className="fixed bottom-20 right-5 z-50">
          <Button
            onClick={toggleChat}
            size="icon"
            variant="ghost"
            className="rounded-full h-16 w-16 shadow-lg p-0 glint-effect"
            aria-label="Mở Chatbot"
          >
            <Image 
                src="https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/chi%C3%AAu%20minh%202%20mascot.png?alt=media&token=f830ea79-998d-40fb-91bb-4b7b5ed885c1"
                alt="Chatbot Mascot"
                width={64}
                height={64}
                className="object-cover"
            />
          </Button>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
             initial={{ opacity: 0, y: 50, scale: 0.9 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: 50, scale: 0.9 }}
             transition={{ duration: 0.3, ease: "easeOut" }}
             className="fixed bottom-5 right-5 z-[60] w-full max-w-sm"
          >
             <div className="p-0.5 chat-gradient-frame rounded-2xl shadow-2xl">
                <Card className="h-[600px] flex flex-col rounded-[15px]">
                  <CardHeader className="flex flex-row items-center justify-between bg-secondary">
                    <CardTitle className="text-lg font-bold">Chiêu Minh</CardTitle>
                    <Button variant="ghost" size="icon" onClick={toggleChat}>
                      <X className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="flex-1 p-0 overflow-y-auto">
                    <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                        <div className="flex flex-col gap-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                  {msg.sender === 'bot' && <div className="p-2 rounded-full bg-primary text-primary-foreground"><Bot className="h-5 w-5"/></div>}
                                    <div className={`flex flex-col gap-1 w-full max-w-[320px] ${msg.sender === 'user' ? 'items-end' : ''}`}>
                                        <div className={`flex flex-col leading-1.5 p-3 border-gray-200 ${msg.sender === 'user' ? 'rounded-e-xl rounded-es-xl bg-primary text-primary-foreground' : 'rounded-s-xl rounded-ee-xl bg-muted'}`}>
                                            <p className="text-sm font-normal">{renderMessage(msg.text)}</p>
                                        </div>
                                        {msg.sources && msg.sources.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mt-1">
                                                <p className="text-xs text-muted-foreground">Nguồn:</p>
                                                {msg.sources.map((source, i) => (
                                                    <Badge key={i} variant="secondary" className="hover:bg-secondary/80">
                                                        <Link href={source.url} target="_blank" className="flex items-center gap-1">
                                                            <LinkIcon className="h-3 w-3"/>
                                                            {source.title}
                                                        </Link>
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {msg.sender === 'user' && <div className="p-2 rounded-full bg-secondary text-secondary-foreground"><User className="h-5 w-5"/></div>}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-start gap-2.5">
                                    <div className="p-2 rounded-full bg-primary text-primary-foreground"><Bot className="h-5 w-5"/></div>
                                    <div className="flex items-center gap-2 p-3 rounded-s-xl rounded-ee-xl bg-muted">
                                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                                        <span className="text-sm text-muted-foreground">Chiêu Minh đang gõ...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                  </CardContent>
                  <CardFooter className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
                        <Input 
                            placeholder="Hỏi Chiêu Minh điều gì đó..." 
                            className="flex-1"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isLoading}
                        />
                        <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                  </CardFooter>
                </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
