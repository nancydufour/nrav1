import React, { useState, useRef, useEffect, ImgHTMLAttributes } from 'react';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'placeholder'> {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Width of the image (helps prevent layout shift) */
  width?: number | string;
  /** Height of the image (helps prevent layout shift) */
  height?: number | string;
  /** Enable fill mode (image fills parent container) */
  fill?: boolean;
  /** Object fit style */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Object position style */
  objectPosition?: string;
  /** Priority loading (disables lazy loading) */
  priority?: boolean;
  /** Placeholder type */
  placeholder?: 'blur' | 'empty';
  /** Custom blur data URL for placeholder */
  blurDataURL?: string;
  /** Quality hint (1-100) */
  quality?: number;
  /** Loading strategy */
  loading?: 'lazy' | 'eager';
  /** Sizes attribute for responsive images */
  sizes?: string;
  /** Callback when image loads */
  onLoad?: () => void;
  /** Callback when image fails to load */
  onError?: () => void;
  /** Additional class names */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

/**
 * Optimized Image component inspired by Next.js Image
 * 
 * Features:
 * - Lazy loading with IntersectionObserver
 * - Blur placeholder effect while loading
 * - Fill mode for container-filling images
 * - Loading state management
 * - Smooth fade-in transitions
 * - Responsive image support
 */
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  quality,
  loading,
  sizes,
  onLoad,
  onError,
  className = '',
  style = {},
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Default blur placeholder (tiny low-quality base64 image)
  const defaultBlurDataURL = 
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlNWU1Ii8+PC9zdmc+';

  // Use IntersectionObserver for lazy loading
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px', // Start loading slightly before in view
        threshold: 0.01,
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Build srcset for responsive images if Cloudinary URL
  const buildSrcSet = (url: string): string | undefined => {
    if (!url.includes('cloudinary.com')) return undefined;
    
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048];
    const srcSet = widths.map((w) => {
      // Add width transformation to Cloudinary URL
      const optimizedUrl = url.replace(
        '/upload/',
        `/upload/w_${w},q_${quality || 'auto'},f_auto/`
      );
      return `${optimizedUrl} ${w}w`;
    }).join(', ');
    
    return srcSet;
  };

  // Build optimized URL (add quality/format for Cloudinary)
  const buildOptimizedUrl = (url: string): string => {
    if (!url.includes('cloudinary.com')) return url;
    
    // Add quality and auto format transformation
    return url.replace(
      '/upload/',
      `/upload/q_${quality || 'auto'},f_auto/`
    );
  };

  // Container styles for fill mode
  const containerStyles: React.CSSProperties = fill
    ? {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }
    : {
        position: 'relative',
        width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
      };

  // Image styles
  const imageStyles: React.CSSProperties = {
    objectFit,
    objectPosition,
    width: fill ? '100%' : width ? '100%' : undefined,
    height: fill ? '100%' : height ? '100%' : undefined,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    ...style,
  };

  // Placeholder styles
  const placeholderStyles: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit,
    objectPosition,
    filter: 'blur(20px)',
    transform: 'scale(1.1)',
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
    pointerEvents: 'none',
  };

  // Error placeholder styles
  const errorStyles: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    color: '#999',
    fontSize: '14px',
    fontFamily: 'sans-serif',
  };

  const srcSet = buildSrcSet(src);
  const optimizedSrc = buildOptimizedUrl(src);

  return (
    <div
      ref={containerRef}
      style={containerStyles}
      className={fill ? '' : 'inline-block overflow-hidden'}
    >
      {/* Error State */}
      {hasError && (
        <div style={errorStyles}>
          <span>Failed to load image</span>
        </div>
      )}

      {/* Blur Placeholder */}
      {placeholder === 'blur' && !hasError && !isLoaded && (
        <img
          src={blurDataURL || defaultBlurDataURL}
          alt=""
          aria-hidden="true"
          style={placeholderStyles}
        />
      )}

      {/* Main Image */}
      {isInView && !hasError && (
        <img
          ref={imgRef}
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
          loading={loading || (priority ? 'eager' : 'lazy')}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          className={className}
          style={imageStyles}
          {...rest}
        />
      )}
    </div>
  );
};

export default Image;
