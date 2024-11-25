'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { books, type Book } from '@/data/books';

export default function ReadingPage() {
  const [failedCovers, setFailedCovers] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState<Set<string>>(new Set());

  const groupedBooks = {
    'Currently Reading': books.filter(book => 
      book.status === 'Currently Reading' && 
      (searchQuery === '' || 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    ),
    'Read': books.filter(book => 
      book.status === 'Read' &&
      (searchQuery === '' || 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    ),
    'Want to Read': books.filter(book => 
      book.status === 'Want to Read' &&
      (searchQuery === '' || 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    )
  };

  const DEFAULT_COVER = '/images/books/default-cover.jfif';

  const getCoverUrl = (book: Book) => {
    // Check for missing or invalid ISBN
    if (!book.isbn || book.isbn.trim() === '') {
      return DEFAULT_COVER;
    }

    // Return OpenLibrary cover URL
    return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
  };

  const handleCoverError = (isbn: string | undefined) => {
    if (!isbn) return;
    const img = document.querySelector(`img[data-isbn="${isbn}"]`) as HTMLImageElement;
    if (img) {
      img.src = DEFAULT_COVER;
    }
  };

  const handleImageLoad = useCallback((isbn: string | undefined) => {
    if (!isbn) return;
    setIsLoading(prev => {
      const next = new Set(prev);
      next.delete(isbn);
      return next;
    });
  }, []);

  const handleImageLoadStart = useCallback((isbn: string | undefined) => {
    if (!isbn) return;
    setIsLoading(prev => {
      const next = new Set(prev);
      next.add(isbn);
      return next;
    });
  }, []);

  return (
    <div className="container-wrapper py-8 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8 text-[var(--primary)]">
        My Reading Journey
      </h1>
      
      <div className="prose prose-invert prose-lg max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
        <p className="text-base sm:text-lg text-[var(--foreground)]/80">
          Books are windows to new worlds, sources of inspiration, and catalysts for creativity. 
          Here's a curated list of books that have shaped my thinking, along with some that I'm excited to explore.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search books by title, author, or genre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-[var(--secondary)] border border-[var(--primary)]/20 focus:border-[var(--primary)]/40 focus:outline-none text-[var(--foreground)] placeholder-[var(--foreground)]/50"
        />
      </div>

      {Object.entries(groupedBooks).map(([status, statusBooks]) => (
        statusBooks.length > 0 && (
          <div key={status} className="mb-12 sm:mb-16 animate-fadeIn">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] mb-6 sm:mb-8 px-4 sm:px-0">
              {status}
            </h2>
            <div className="grid gap-6 sm:gap-8">
              {statusBooks.map((book, index) => (
                <div 
                  key={index} 
                  className="group bg-[var(--secondary)] p-4 sm:p-6 rounded-lg border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg"
                >
                  <div className="grid sm:grid-cols-[200px,1fr] md:grid-cols-[250px,1fr] gap-6 sm:gap-8">
                    <div className="relative aspect-[2/3] w-full max-w-[200px] mx-auto sm:mx-0 bg-[var(--primary)]/5 rounded-lg overflow-hidden">
                      {isLoading.has(book.isbn || '') && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[var(--secondary)]">
                          <div className="w-8 h-8 border-2 border-[var(--primary)]/20 border-t-[var(--primary)] rounded-full animate-spin"></div>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                          <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <Link 
                        href={book.link || '#'} 
                        target="_blank"
                        className="block w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
                      >
                        <Image
                          src={getCoverUrl(book)}
                          alt={`Cover of ${book.title}`}
                          fill
                          data-isbn={book.isbn}
                          className="object-cover object-center rounded-lg shadow-md"
                          sizes="(max-width: 640px) 200px, 250px"
                          onError={() => handleCoverError(book.isbn)}
                          onLoadingComplete={() => handleImageLoad(book.isbn)}
                          onLoadStart={() => handleImageLoadStart(book.isbn)}
                          priority={index < 2}
                        />
                      </Link>
                    </div>

                    <div className="flex flex-col">
                      <Link 
                        href={book.link || '#'} 
                        target="_blank"
                        className="text-xl sm:text-2xl font-semibold text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors mb-2"
                      >
                        {book.title}
                      </Link>
                      <p className="text-base sm:text-lg text-[var(--foreground)]/80 mb-2">
                        by {book.author}
                      </p>
                      {book.description && (
                        <p className="text-sm sm:text-base text-[var(--foreground)]/70 mb-4">
                          {book.description}
                        </p>
                      )}
                      {book.thoughts && (
                        <p className="text-sm sm:text-base text-[var(--foreground)]/60 italic mb-4">
                          &ldquo;{book.thoughts}&rdquo;
                        </p>
                      )}
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {book.genre.map((genre, idx) => (
                            <span 
                              key={idx}
                              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                        {book.rating && (
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i}
                                className={`w-4 h-4 ${i < book.rating! ? 'text-yellow-500' : 'text-[var(--foreground)]/20'}`}
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}