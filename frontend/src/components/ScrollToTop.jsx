import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 🧹 SCROLL TO TOP COMPONENT
 * React handles SPAs by swapping components, but it doesn't automatically
 * reset the scroll position. This component listens for route changes and
 * scrolls the window back to the top (0, 0).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the absolute top of the page on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' is usually better for SPAs than 'smooth' here to avoid jarring movement
    });
  }, [pathname]);

  return null; // This component doesn't render any UI
}
