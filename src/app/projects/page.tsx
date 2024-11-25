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
    imageSrc: '/PersonalPage/images/projects/girls-name-or-drug.png',
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
    imageSrc: '/PersonalPage/images/projects/LaserTennis.png',
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
    imageSrc: '/PersonalPage/images/projects/Bricked.png',
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
    imageSrc: '/PersonalPage/images/projects/remodel/Living-room-finished-(1).jpg',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="container-wrapper">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-8">
            Creative Projects
          </h1>
          <p className="text-xl md:text-2xl text-[var(--foreground-muted)] max-w-3xl">
            From game development to home improvement, these projects showcase my passion for creating engaging experiences and solving unique challenges.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[var(--secondary)]/10">
        <div className="container-wrapper">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-[var(--secondary)]/20 rounded-xl overflow-hidden hover:bg-[var(--secondary)]/30 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-[1.5fr,2fr] gap-8">
                  {/* Image Section */}
                  <div className="relative aspect-video overflow-hidden">
                    <CustomImage
                      src={project.imageSrc}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h2 className="text-3xl font-bold text-[var(--primary)]">
                        {project.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                        project.status === 'In Development' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="text-[var(--foreground-muted)] mb-6">
                      {project.description}
                    </p>

                    <div className="space-y-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4">
                        {project.links?.play && (
                          <Link 
                            href={project.links.play}
                            className="button-primary"
                            target={project.links.play.startsWith('http') ? '_blank' : undefined}
                          >
                            Try it Out
                          </Link>
                        )}
                        {project.links?.source && (
                          <Link 
                            href={project.links.source}
                            className="button-primary bg-[var(--secondary)]"
                            target="_blank"
                          >
                            View Source
                          </Link>
                        )}
                      </div>

                      <p className="text-sm text-[var(--foreground-muted)]">
                        {project.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
