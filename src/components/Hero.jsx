import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center p-6">
      {/* Glowing Background Elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600 opacity-25 blur-3xl rounded-full animate-pulse"></div>

      {/* Hero Content */}
      <motion.div
        className="relative flex flex-col gap-6 max-w-[800px] w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-xl md:text-2xl text-blue-400 animate-fade-in tracking-wide">
          IT'S TIME TO GET:
        </p>

        <h1 className="uppercase font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
          Aslan
          <span className="text-blue-400 drop-shadow-lg"> BULK 💪🏽</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed">
          No limits. No excuses. Just <strong>pure strength</strong> and unstoppable gains.  
          Welcome to the <strong>bulking era </strong> — where <strong>power meets purpose</strong>.
        </p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            func={() => window.location.href = '#generate'}
            text="Accept the Challenge 💥"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
