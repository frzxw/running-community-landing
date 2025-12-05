/**
 * Image optimization utilities for Unsplash images
 * Provides responsive image URLs with proper sizing for mobile and desktop
 */

/**
 * Extracts the photo ID from an Unsplash URL
 */
function extractPhotoId(url: string): string | null {
  const match = url.match(/photo-([^?]+)/);
  return match ? match[1] : null;
}

/**
 * Generates an optimized Unsplash image URL
 * @param url - Original Unsplash URL
 * @param width - Desired width in pixels
 * @param quality - Quality (1-100), default 80
 * @param format - Image format ('webp', 'jpg', 'avif'), defaults to 'webp' for modern browsers
 */
export function getOptimizedUnsplashUrl(
  url: string,
  width: number,
  quality: number = 80,
  format: 'webp' | 'jpg' | 'avif' = 'webp'
): string {
  const photoId = extractPhotoId(url);
  if (!photoId) return url; // Fallback to original if parsing fails

  // Unsplash API format: https://images.unsplash.com/photo-{id}?w={width}&q={quality}&fm={format}
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&q=${quality}&fm=${format}&fit=crop&auto=format`;
}

/**
 * Generates a srcset string for responsive images
 * @param url - Original Unsplash URL
 * @param widths - Array of widths to generate
 * @param quality - Quality (1-100), default 80
 * @param format - Image format, default 'webp'
 */
export function generateSrcSet(
  url: string,
  widths: number[],
  quality: number = 80,
  format: 'webp' | 'jpg' | 'avif' = 'webp'
): string {
  return widths
    .map((width) => `${getOptimizedUnsplashUrl(url, width, quality, format)} ${width}w`)
    .join(', ');
}

/**
 * Gets responsive image configuration based on use case
 */
export type ImageSizePreset = 'hero' | 'card' | 'thumbnail' | 'gallery' | 'full';

export interface ResponsiveImageConfig {
  srcset: string;
  sizes: string;
  src: string; // Fallback for older browsers
  srcsetWebp?: string; // WebP srcset
  srcsetJpg: string; // JPG srcset for fallback
}

/**
 * Generates responsive image configuration for different use cases
 */
export function getResponsiveImageConfig(
  url: string,
  preset: ImageSizePreset = 'card'
): ResponsiveImageConfig {
  // Define width breakpoints based on preset
  const configs: Record<ImageSizePreset, { widths: number[]; sizes: string }> = {
    hero: {
      widths: [400, 640, 768, 1024, 1280, 1920],
      sizes: '(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1280px',
    },
    card: {
      widths: [400, 640, 768, 1024],
      sizes: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px',
    },
    thumbnail: {
      widths: [200, 400, 600],
      sizes: '(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px',
    },
    gallery: {
      widths: [400, 640, 768, 1024, 1280],
      sizes: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 500px',
    },
    full: {
      widths: [640, 768, 1024, 1280, 1920],
      sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1280px',
    },
  };

  const config = configs[preset];
  
  // Generate WebP srcset (modern browsers)
  const srcsetWebp = generateSrcSet(url, config.widths, 80, 'webp');
  
  // Generate JPG srcset (fallback)
  const srcsetJpg = generateSrcSet(url, config.widths, 80, 'jpg');
  
  // Use the largest width as the default src (for older browsers)
  const src = getOptimizedUnsplashUrl(url, config.widths[config.widths.length - 1], 80, 'jpg');

  return {
    srcset: srcsetWebp, // Default to WebP
    srcsetWebp,
    srcsetJpg,
    src,
    sizes: config.sizes,
  };
}

/**
 * Gets a mobile-optimized image URL (smaller size for faster loading)
 */
export function getMobileImageUrl(url: string, quality: number = 75): string {
  return getOptimizedUnsplashUrl(url, 640, quality, 'webp');
}

/**
 * Gets a desktop-optimized image URL
 */
export function getDesktopImageUrl(url: string, quality: number = 80): string {
  return getOptimizedUnsplashUrl(url, 1080, quality, 'webp');
}

