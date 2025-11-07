import React, { useEffect, useRef, useState } from 'react';

// Mount children only when scrolled into (or near) viewport
export default function LazyMount({ children, rootMargin = '200px', className }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return; // already shown
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, show]);

  return <div ref={ref} className={className}>{show ? children : null}</div>;
}
