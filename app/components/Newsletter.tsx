"use client";

import { useState } from "react";
import Wrapper from "./Wrapper";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <Wrapper className="bg-white/10">
      <div className="rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the Game
          </h2>
          <p className="text-gray-300 mb-8 text-base md:text-lg">
            Get the latest news, updates, and exclusive content delivered
            straight to your inbox. Be the first to know about new releases,
            events, and special announcements.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 border border-white/10 rounded-full px-6 py-3.5 text-sm placeholder-gray-400 focus:outline-none focus:border-white/25 transition-colors"
            />
            <button
              type="submit"
              className="bg-white/90 text-black font-semibold rounded-full px-8 py-3.5 text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-4 text-white text-sm font-medium animate-fade-in">
              ✓ Thanks for subscribing! Check your inbox for confirmation.
            </div>
          )}

          <p className="text-gray-500 text-xs mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
