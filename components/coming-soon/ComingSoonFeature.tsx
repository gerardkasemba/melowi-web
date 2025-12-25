'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ComingSoonFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

export default function ComingSoonFeature({ 
  icon, 
  title, 
  description, 
  gradient,
  delay = 0 
}: ComingSoonFeatureProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { delay: delay / 1000 }
        }
      }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className="relative h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`} />
        <div className="relative h-full backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${gradient} rounded-xl mb-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}