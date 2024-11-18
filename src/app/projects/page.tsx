import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  links?: {
    play?: string;
    source?: string;
    download?: string;
  };
  status: 'Completed' | 'In Development' | 'On Hold';
  date: string;
}

const projects: Project[] = [
  {
    title: 'Girls Name or Drug',
    description: 'A fun and challenging quiz game where players must guess whether a given word is a girl\'s name or the name of a pharmaceutical drug. Test your knowledge and prepare to be surprised!',
    imageSrc: '/images/projects/girls-name-or-drug.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'Quiz Game'],
    links: {
      play: '/games/girls-name-or-drug/Index.html'
    },
    status: 'Completed',
    date: 'November 2024'
  },
  {
    title: 'Laser Tennis',
    description: 'An innovative take on Pong where players use lasers instead of balls. Features fast-paced gameplay, dynamic laser mechanics, and competitive multiplayer action.',
    imageSrc: '/images/projects/LaserTennis.png',
    tags: ['Godot', 'GDScript', 'Sports', 'Multiplayer'],
    links: {
      play: 'https://bit-shifter.itch.io/laser-tennis'
    },
    status: 'Completed',
    date: 'October 2024'
  },
  {
    title: 'Bricked',
    description: 'A unique twist on the classic brick-breaker genre. Control a paddle to bounce the ball and break bricks, but with modern mechanics and challenging gameplay that keeps you coming back for more.',
    imageSrc: '/images/projects/Bricked.png',
    tags: ['Godot', 'GDScript', 'Arcade', 'Action'],
    links: {
      play: 'https://bit-shifter.itch.io/bricked'
    },
    status: 'Completed',
    date: 'October 2024'
  },
  {
    title: 'AI-Guided Condo Remodel',
    description: 'A complete transformation of my living space using AI as the interior designer. From Stable Diffusion design concepts to smart home integration, this project showcases the practical application of AI in home improvement.',
    imageSrc: '/images/projects/remodel/Living-room-finished-(1).jpg',
    tags: ['AI Design', 'Home Improvement', 'Stable Diffusion', 'Smart Home'],
    links: {
      play: '/projects/remodel'
    },
    status: 'Completed',
    date: 'June 2023'
  }
];

export default function ProjectsPage() {
  return (
    <div className="container-wrapper py-16">
      <h1 className="section-title mb-8">Game Projects</h1>
      
      <div className="prose prose-invert prose-lg mb-12">
        <p>
          Welcome to my game development portfolio! Here you'll find my collection of games created with the Godot Engine.
          Each project represents a unique challenge and learning experience in game development.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)]">
            <div className="grid md:grid-cols-[400px,1fr] gap-6">
              <div className="relative h-[225px] w-full">
                <CustomImage
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-[var(--primary)]">{project.title}</h2>
                  <span className={`px-2 py-1 rounded text-sm ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                    project.status === 'In Development' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-[var(--foreground)]/60 mb-2">{project.date}</p>
                <p className="text-[var(--foreground)]/90 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.links?.play && (
                    <Link
                      href={project.links.play}
                      target={project.links.play.startsWith('http') ? '_blank' : undefined}
                      className="px-4 py-2 bg-[var(--primary)] text-[var(--background)] rounded hover:opacity-90 transition-opacity"
                    >
                      {project.title === 'AI-Guided Condo Remodel' ? 'Take Tour' : 'Play Game'}
                    </Link>
                  )}
                  {project.links?.source && (
                    <Link
                      href={project.links.source}
                      target="_blank"
                      className="px-4 py-2 border border-[var(--primary)] text-[var(--primary)] rounded hover:bg-[var(--primary)]/10 transition-colors"
                    >
                      View Source
                    </Link>
                  )}
                  {project.links?.download && (
                    <Link
                      href={project.links.download}
                      target="_blank"
                      className="px-4 py-2 border border-[var(--primary)] text-[var(--primary)] rounded hover:bg-[var(--primary)]/10 transition-colors"
                    >
                      Download
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
