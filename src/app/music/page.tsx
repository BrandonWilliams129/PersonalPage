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
    title: 'Weight of the World',
    description: 'A powerful and emotive track that explores the burdens we carry and the strength we find to move forward.',
    date: 'November 24, 2024',
    audioSrc: '/PersonalPage/media/music/Weight of the World.mp3',
    imageSrc: '/PersonalPage/images/Weight of the World.png'
  },
  {
    title: 'Against The Wake',
    description: 'A powerful exploration of resilience and determination, featuring dynamic instrumentation and emotive vocals created with AI.',
    date: 'November 18, 2024',
    audioSrc: '/PersonalPage/media/music/AgainstTheWake.mp3',
    imageSrc: '/PersonalPage/images/AgainstTheWake.jpeg'
  },
  {
    title: 'Blackout Curtains',
    description: 'An experimental piece that pushes the boundaries of conventional sound, blending dark atmospheres with cutting-edge AI production.',
    date: 'November 24, 2024',
    audioSrc: '/PersonalPage/media/music/Blackout Curtains.mp3',
    imageSrc: '/PersonalPage/images/Weight of the World.png'
  },
  {
    title: 'Voice',
    description: 'An AI-assisted composition exploring the boundaries between human vocals and synthetic soundscapes, created using Suno AI.',
    date: 'December 2023',
    audioSrc: '/PersonalPage/media/music/Voice .mp3',
    imageSrc: '/PersonalPage/images/Voice.jpeg'
  },
  {
    title: 'Chin UP',
    description: 'A motivational anthem about perseverance and resilience, blending punk energy with modern AI production.',
    date: 'January 2024',
    audioSrc: '/PersonalPage/media/music/Chin up.mp3',
    imageSrc: '/PersonalPage/images/ChinUP.jpeg'
  },
  {
    title: 'Collapse the Sky',
    description: 'An intense and atmospheric track that combines heavy elements with ethereal soundscapes.',
    date: 'November 24, 2024',
    audioSrc: '/PersonalPage/media/music/Collapse the Sky.mp3',
    imageSrc: '/PersonalPage/images/Weight of the World.png'
  },
  {
    title: 'Hammer of War',
    description: 'A heavy-hitting track that combines aggressive rhythms with epic orchestral elements, showcasing the versatility of AI music production.',
    date: 'February 2024',
    audioSrc: '/PersonalPage/media/music/Hammer of war.mp3',
    imageSrc: '/PersonalPage/images/HammerOfWar.jfif'
  },
  {
    title: 'Paper Hearts',
    description: 'An emotional journey through love and loss, featuring a unique blend of acoustic and electronic elements.',
    date: 'March 2024',
    audioSrc: '/PersonalPage/media/music/Paper Hearts.mp3',
    imageSrc: '/PersonalPage/images/PaperHearts.jfif'
  },
  {
    title: 'Paper Houses',
    description: 'A metaphorical exploration of fragile foundations and the structures we build in our lives.',
    date: 'November 24, 2024',
    audioSrc: '/PersonalPage/media/music/Paper Houses.mp3',
    imageSrc: '/PersonalPage/images/Weight of the World.png'
  },
  {
    title: 'Quiet Panic',
    description: 'A haunting piece that delves into the silent struggles we face, wrapped in atmospheric soundscapes.',
    date: 'November 24, 2024',
    audioSrc: '/PersonalPage/media/music/Quiet Panic.mp3',
    imageSrc: '/PersonalPage/images/Weight of the World.png'
  },
  {
    title: 'Salt in the Water',
    description: 'A fluid and dynamic composition that explores themes of purification and emotional cleansing.',
    date: 'November 24, 2024',
    audioSrc: '/PersonalPage/media/music/Salt in the Water.mp3',
    imageSrc: '/PersonalPage/images/Weight of the World.png'
  },
  {
    title: 'Grit Doesn\'t Glitter',
    description: 'Raw and unfiltered, this track explores the less glamorous side of determination and hard work.',
    date: 'March 2024',
    audioSrc: '/PersonalPage/media/music/Grit doesn\'t Glitter .mp3',
    imageSrc: '/PersonalPage/images/GritDontGlitter.jfif'
  },
  {
    title: 'LFT2',
    description: 'A reimagining of "Live for Today" from my band days, recreated with modern AI tools while keeping the original punk rock spirit alive.',
    date: 'November 2024',
    audioSrc: '/PersonalPage/media/music/LFT2.mp3',
    imageSrc: '/PersonalPage/images/LFT2.jpeg'
  }
];

export default function MusicPage() {
  return (
    <div className="container-wrapper py-8 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8 text-[var(--primary)]">
        My Music Journey
      </h1>
      
      <div className="prose prose-invert prose-lg max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
        <p className="text-base sm:text-lg text-[var(--foreground)]/80">
          Welcome to my musical playground! Here, I blend traditional musicianship with cutting-edge AI technology,
          creating unique sounds that bridge the gap between human creativity and artificial intelligence.
        </p>
        <p className="text-base sm:text-lg text-[var(--foreground)]/80">
          Using tools like Suno AI, I'm exploring new ways to create and reimagine music. Each piece is a collaboration
          between human inspiration and AI capabilities, resulting in something truly unique.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8">
        {songs.map((song, index) => (
          <div 
            key={index} 
            className="group bg-[var(--secondary)] p-4 sm:p-6 rounded-lg border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg"
          >
            <div className="grid sm:grid-cols-[250px,1fr] md:grid-cols-[300px,1fr] gap-4 sm:gap-6">
              {song.imageSrc ? (
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
                  <CustomImage
                    src={song.imageSrc}
                    alt={song.title}
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 rounded-lg flex items-center justify-center group-hover:from-[var(--primary)]/30 group-hover:to-[var(--primary)]/10 transition-all">
                  <span className="text-[var(--primary)] text-lg sm:text-xl font-medium">{song.title}</span>
                </div>
              )}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[var(--primary)] group-hover:translate-x-1 transition-transform">
                    {song.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--foreground)]/60 mb-2 sm:mb-4">{song.date}</p>
                  <p className="text-sm sm:text-base text-[var(--foreground)]/80 mb-4 sm:mb-6">{song.description}</p>
                </div>
                <AudioPlayer src={song.audioSrc} title={`Listen to ${song.title}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
