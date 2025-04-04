import React from 'react'
import { useState,useEffect,useRef } from 'react';

function StatCard({ mainheading, desHeading, initialCount = 0, ending }) {
    const [count, setCount] = useState(initialCount);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );
  
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
  
      return () => {
        if (cardRef.current) observer.unobserve(cardRef.current);
      };
    }, []);
  
    useEffect(() => {
      if (!isVisible) return;
  
      const target = parseInt(mainheading);
      if (count >= target) return;
  
      const step = Math.ceil(target / 100);
      const delay = Math.max(1000 / (target / step), 10);
  
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount < target ? prevCount + step : target));
      }, delay);
  
      return () => clearInterval(interval);
    }, [isVisible, count, mainheading]);
  
    return (
      <div ref={cardRef} className="stat-item">
        <h3 className="text-white text-4xl sm:text-5xl mb-2 font-bold">{count}{ending}</h3>
        <p className="text-lg sm:text-xl opacity-90">{desHeading}</p>
      </div>
    );
  }

export default StatCard
