import { useEffect } from 'react';

const PixelInitializer = () => {
  useEffect(() => {
    // Ensure pixel is properly initialized
    const initPixel = () => {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        // Re-initialize if needed
        if (!window._fbq || !window._fbq.loaded) {
          console.log('Facebook Pixel: Re-initializing pixel');
          window.fbq('init', '752192693921476');
        }
        
        // Track initial page view
        window.fbq('track', 'PageView');
        console.log('Facebook Pixel: Initial PageView tracked');
      } else {
        // Retry after a short delay
        setTimeout(initPixel, 500);
      }
    };

    // Initialize immediately
    initPixel();
  }, []);

  return null;
};

export default PixelInitializer;
