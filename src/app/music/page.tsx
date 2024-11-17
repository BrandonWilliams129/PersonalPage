import AudioPlayer from '@/components/AudioPlayer';
import CustomImage from '@/components/CustomImage';
import Image from 'next/image';

interface Song {
  title: string;
  description: string;
  date: string;
  audioSrc: string;
  imageSrc?: string;
}

const songs: Song[] = [
  {
    title: 'Voice',
    description: 'An AI-assisted composition exploring the boundaries between human vocals and synthetic soundscapes, created using Suno AI.',
    date: 'December 2023',
    audioSrc: '/media/music/Voice .mp3',
    imageSrc: '/images/Voice.jpeg'
  },
  {
    title: 'Chin UP',
    description: 'A motivational anthem about perseverance and resilience, blending punk energy with modern AI production.',
    date: 'January 2024',
    audioSrc: '/media/music/Chin up.mp3',
    imageSrc: '/images/ChinUP.jpeg'
  },
  {
    title: 'Hammer of War',
    description: 'A heavy-hitting track that combines aggressive rhythms with epic orchestral elements, showcasing the versatility of AI music production.',
    date: 'February 2024',
    audioSrc: '/media/music/Hammer of war.mp3',
    imageSrc: '/images/HammerOfWar.jfif'
  },
  {
    title: 'Paper Hearts',
    description: 'An emotional journey through love and loss, featuring a unique blend of acoustic and electronic elements.',
    date: 'March 2024',
    audioSrc: '/media/music/Paper Hearts.mp3',
    imageSrc: '/images/PaperHearts.jfif'
  },
  {
    title: 'Grit Doesn\'t Glitter',
    description: 'Raw and unfiltered, this track explores the less glamorous side of determination and hard work.',
    date: 'March 2024',
    audioSrc: '/media/music/Grit doesn\'t Glitter .mp3',
    imageSrc: '/images/GritDontGlitter.jfif'
  },
  {
    title: 'LFT2',
    description: 'A reimagining of "Live for Today" from my band days, recreated with modern AI tools while keeping the original punk rock spirit alive.',
    date: 'November 2024',
    audioSrc: '/media/music/LFT2.mp3',
    imageSrc: '/images/LFT2.jpeg'
  }
];

export default function MusicPage() {
  return (
    <div className="container-wrapper py-16">
      <h1 className="section-title mb-8">My Music</h1>
      
      <div className="prose prose-invert prose-lg mb-12">
        <p>
          Welcome to my musical playground! Here, I blend traditional musicianship with cutting-edge AI technology,
          creating unique sounds that bridge the gap between human creativity and artificial intelligence.
        </p>
        <p>
          Using tools like Suno AI, I'm exploring new ways to create and reimagine music. Each piece is a collaboration
          between human inspiration and AI capabilities, resulting in something truly unique.
        </p>
      </div>

      <div className="grid gap-8">
        {songs.map((song, index) => (
          <div key={index} className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)]">
            <div className="grid md:grid-cols-[300px,1fr] gap-6">
              {song.imageSrc ? (
                <div className="relative h-[300px] w-full">
                  <CustomImage
                    src={song.imageSrc}
                    alt={song.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="relative h-[300px] w-full bg-[var(--primary)]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[var(--primary)] text-lg">{song.title}</span>
                </div>
              )}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-[var(--primary)]">{song.title}</h2>
                <p className="text-[var(--foreground)]/60 mb-4">{song.date}</p>
                <p className="text-[var(--foreground)]/90 mb-6">{song.description}</p>
                <AudioPlayer src={song.audioSrc} title={`Listen to ${song.title}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
