'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function EmailSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Successfully subscribed! You will be notified when we launch.');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
            disabled={status === 'loading' || status === 'success'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Subscribing...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle className="h-5 w-5" />
                Subscribed!
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Notify Me
              </>
            )}
          </button>
        </div>
        
        {message && (
          <div className={`p-3 rounded-lg text-sm ${
            status === 'success' 
              ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}>
            {message}
          </div>
        )}
      </form>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}