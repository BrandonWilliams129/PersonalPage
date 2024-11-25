'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle audio source path
  const getAudioSrc = (src: string) => {
    // If it's an absolute URL, return as is
    if (src.startsWith('http')) return src;

    // Clean up the path
    const cleanPath = src.startsWith('/') ? src : `/${src}`;
    
    // In development, use the full path from the public directory
    if (process.env.NODE_ENV === 'development') {
      return cleanPath;
    }
    
    // In production, add the basePath
    return `/PersonalPage${cleanPath}`;
  };

  // Get the audio source
  const audioSrc = encodeURI(getAudioSrc(src));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log('Loading audio from:', audioSrc); // Debug log

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => {
      console.log('Audio metadata loaded'); // Debug log
      setDuration(audio.duration);
      setIsLoading(false);
    };
    const handleEnded = () => setIsPlaying(false);
    const handleError = (e: ErrorEvent) => {
      console.error('Audio loading error:', e, 'Source:', audioSrc);
      setError('Failed to load audio file');
      setIsLoading(false);
    };
    const handleCanPlayThrough = () => {
      console.log('Audio can play through'); // Debug log
      setIsLoading(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError as EventListener);
    audio.addEventListener('canplaythrough', handleCanPlayThrough);

    // Load the audio
    audio.load();

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError as EventListener);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [audioSrc]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Playback error:', error);
            setError('Failed to play audio');
          });
        }
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.error('Playback error:', err);
      setError('Failed to play audio');
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-3 sm:p-4 bg-[var(--secondary)]/50 rounded-lg border border-[var(--primary)]/20">
      <div className="flex items-center gap-4 mb-3">
        <button
          onClick={togglePlay}
          disabled={isLoading || !!error}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--secondary)] disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <PauseIcon className="w-5 h-5" />
          ) : (
            <PlayIcon className="w-5 h-5" />
          )}
        </button>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-medium text-[var(--foreground)]">{title}</h3>
          <div className="text-sm text-[var(--foreground)]/60">
            {isLoading ? (
              'Loading...'
            ) : error ? (
              <span className="text-red-500">{error}</span>
            ) : (
              `${formatTime(currentTime)} / ${formatTime(duration)}`
            )}
          </div>
        </div>
      </div>

      <div className="relative w-full h-2 bg-[var(--primary)]/20 rounded-full overflow-hidden">
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          disabled={isLoading || !!error}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          aria-label="Seek"
        />
        <div
          className="h-full bg-[var(--primary)] transition-all duration-100"
          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
        />
      </div>

      <audio
        ref={audioRef}
        className="hidden"
        preload="metadata"
      >
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
