"use client"

import { useEffect, useState, useRef } from 'react';
import Confetti from 'react-confetti';
import * as Tone from 'tone';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Gift, Sparkles } from 'lucide-react';
import type { Wish } from './wishes-form';

interface WishCardProps {
  wish: Wish;
  onReset: () => void;
}

export function WishCard({ wish, onReset }: WishCardProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const toneStarted = useRef(false);

  useEffect(() => {
    const playSound = async () => {
      if (!toneStarted.current) {
        await Tone.start();
        toneStarted.current = true;
      }
      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      const now = Tone.now();
      synth.triggerAttackRelease(["C4", "E4", "G4", "C5"], "8n", now);
      synth.triggerAttackRelease(["F4", "A4", "C5", "F5"], "8n", now + 0.2);
      synth.triggerAttackRelease(["G4", "B4", "D5", "G5"], "8n", now + 0.4);
    };

    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setShowConfetti(true);
      playSound();
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={600}
          gravity={0.1}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <Card className="w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-90">
        <CardHeader className="text-center items-center">
            <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                <Sparkles className="h-10 w-10 text-primary animate-pulse" />
            </div>
          <CardTitle className="font-headline text-2xl gradient-text">Gửi lời chúc thành công!</CardTitle>
          <CardDescription>Món quà tinh thần của bạn đã được gửi đi.</CardDescription>
        </CardHeader>
        <CardContent className="text-center bg-muted/50 p-6 m-6 rounded-lg border">
          <p className="text-lg italic text-foreground">"{wish.message}"</p>
          <p className="text-right mt-4 font-semibold text-primary">- {wish.name} -</p>
           <p className="text-right mt-1 text-sm text-muted-foreground">gửi {wish.recipient}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={onReset} className="w-full">
            Gửi một lời chúc khác
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
