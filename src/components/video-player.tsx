"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export function VideoPlayer({ isOpen, onClose, videoUrl }: VideoPlayerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <div className="aspect-video">
           <video
            className="w-full h-full"
            src={videoUrl}
            title="Giới thiệu Liên Đội Trần Quang Khải"
            controls
            autoPlay
          >
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
}