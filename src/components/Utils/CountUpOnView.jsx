import React, { useEffect, useRef, useState } from 'react';

const CountUpOnView = ({ target = 100, duration = 2000, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Only count once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const stepTime = Math.max(16, duration / target); // ~60fps cap
    const interval = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
};

export default CountUpOnView;