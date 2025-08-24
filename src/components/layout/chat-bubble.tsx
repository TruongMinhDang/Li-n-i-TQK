"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatBubble() {

  const handleChatClick = () => {
    // Tương lai: Tích hợp API chatbot ở đây
    alert("Tính năng Chatbot sắp ra mắt!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Button
        onClick={handleChatClick}
        size="icon"
        className="rounded-full h-14 w-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
        aria-label="Mở Chatbot"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
    </motion.div>
  );
}
