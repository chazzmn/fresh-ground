'use client';

import { useState } from 'react';

/*
  Graceful image. If the source is missing (e.g. a placeholder not yet swapped
  in), it renders a warm-toned block with a small label instead of a broken
  image icon. Used everywhere a still might be absent.
*/

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Short label shown on the fallback block. */
  label?: string;
  loading?: 'lazy' | 'eager';
}

export function SmartImage({
  src,
  alt,
  className = '',
  label = 'Image coming soon',
  loading = 'lazy',
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`media-fallback flex items-center justify-center ${className}`}
      >
        <span className="px-4 text-center font-sans text-xs font-semibold uppercase tracking-overline text-ember-deep/80">
          {label}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
