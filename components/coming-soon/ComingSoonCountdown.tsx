'use client';

import { useState, useEffect } from 'react';
import ComingSoonCard from './ComingSoonCard';

interface ComingSoonCountdownProps {
  targetDate: Date;
}

export default function ComingSoonCountdown({ targetDate }: ComingSoonCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <ComingSoonCard className="max-w-3xl mx-auto mb-16 backdrop-blur-xl bg-white/5 border border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-lg" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 mt-2 uppercase tracking-wider">
                  {unit.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <p className="text-gray-400">
          Estimated launch: <span className="text-purple-300">{targetDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </p>
      </div>
    </ComingSoonCard>
  );
}