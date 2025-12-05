import React from 'react';
import { getResponsiveImageConfig, ImageSizePreset } from '../../utils/imageOptimizer';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  preset?: ImageSizePreset;
  priority?: boolean; // For LCP images
  className?: string;
}

/**
 * OptimizedImage component that provides responsive image loading
 * with proper srcset, sizes, and format optimization for mobile and desktop
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  preset = 'card',
  priority = false,
  className = '',
  ...props
}) => {
  const imageConfig = getResponsiveImageConfig(src, preset);

  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : 'auto';

  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source
        srcSet={imageConfig.srcsetWebp}
        sizes={imageConfig.sizes}
        type="image/webp"
      />
      {/* JPG fallback for older browsers */}
      <source
        srcSet={imageConfig.srcsetJpg}
        sizes={imageConfig.sizes}
        type="image/jpeg"
      />
      {/* Fallback img element for browsers that don't support picture */}
      <img
        src={imageConfig.src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        {...props}
      />
    </picture>
  );
};

