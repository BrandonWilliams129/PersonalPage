import React from 'react';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  // Handle both absolute and relative URLs
  const audioSrc = src.startsWith('http') ? src : `/PersonalPage${src}`;

  return (
    <div className="my-8 p-4 bg-[var(--secondary)] rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-[var(--primary)]">{title}</h3>
      <audio
        controls
        className="w-full"
        preload="metadata"
      >
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
