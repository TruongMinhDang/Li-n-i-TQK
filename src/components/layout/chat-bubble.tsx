"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

export function ChatBubble() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="fixed bottom-20 right-5 z-50">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Button
            onClick={toggleChat}
            size="icon"
            className="rounded-full h-14 w-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
            aria-label="Mở Chatbot"
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </Button>
        </motion.div>
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
            <Card className="h-[500px] flex flex-col shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between bg-secondary">
                <CardTitle className="text-lg font-bold">Chatbot Hỗ Trợ</CardTitle>
                <Button variant="ghost" size="icon" onClick={toggleChat}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex-1 p-4 overflow-y-auto">
                 <div className="flex flex-col gap-3">
                    <div className="chat-bubble-bot">
                      Xin chào! Tôi có thể giúp gì cho bạn?
                    </div>
                    {/* Các tin nhắn khác sẽ được hiển thị ở đây */}
                 </div>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <form className="flex w-full items-center gap-2">
                    <Input placeholder="Nhập câu hỏi..." className="flex-1"/>
                    <Button type="submit" size="icon">
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
