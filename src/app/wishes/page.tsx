"use client"

import { useState } from "react";
import { WishesForm, type Wish } from "@/components/wishes/wishes-form";
import { WishCard } from "@/components/wishes/wish-card";

export default function WishesPage() {
  const [submittedWish, setSubmittedWish] = useState<Wish | null>(null);

  const handleWishSubmit = (data: Wish) => {
    setSubmittedWish(data);
  };
  
  const handleReset = () => {
    setSubmittedWish(null);
  }

  if (submittedWish) {
    return <WishCard wish={submittedWish} onReset={handleReset} />;
  }

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Gửi Lời Chúc
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Trao gửi yêu thương, lan tỏa niềm vui đến thầy cô và bạn bè.
        </p>
      </section>

      <section className="max-w-2xl mx-auto">
        <WishesForm onSubmit={handleWishSubmit} />
      </section>
    </div>
  );
}
