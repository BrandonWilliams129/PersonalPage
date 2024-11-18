import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';

export default function ResumePage() {
  return (
    <div className="container-wrapper py-16">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="section-title mb-6">Brandon Williams</h1>
        <div className="flex flex-wrap gap-6 text-[var(--foreground)]/80">
          <Link 
            href="mailto:Brandon0129@gmail.com" 
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
          >
            <FaEnvelope className="text-[var(--primary)]" />
            Brandon0129@gmail.com
          </Link>
          <Link 
            href="tel:248-688-5745" 
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
          >
            <FaPhone className="text-[var(--primary)]" />
            248-688-5745
          </Link>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[var(--primary)]" />
            Sterling Heights, MI
          </div>
          <Link 
            href="https://linkedin.com/in/brandon-williams-00573a123" 
            target="_blank"
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
          >
            <FaLinkedin className="text-[var(--primary)]" />
            LinkedIn
          </Link>
          <Link 
            href="https://github.com/BrandonWilliams129" 
            target="_blank"
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
          >
            <FaGithub className="text-[var(--primary)]" />
            GitHub
          </Link>
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
          >
            <FaFileDownload className="text-[var(--primary)]" />
            Download PDF
          </Link>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Professional Experience</h2>
        
        <div className="space-y-8">
          <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] hover:shadow-lg transition-shadow">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Weld Technician</h3>
              <div className="text-[var(--foreground)]/60">May 2014 – Present</div>
            </div>
            <div className="text-lg mb-3 text-[var(--primary)]">Autokiniton • Clinton Township, MI</div>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/80">
              <li>Lead diagnostic and repair operations for advanced automation systems, optimizing weld timers and transformers</li>
              <li>Program weld schedules and fine-tune Fanuc and Motoman robot programs to enhance performance</li>
              <li>Oversee installation and relocation of production cells, managing setup tasks including plumbing and electrical wiring</li>
            </ul>
          </div>

          <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] hover:shadow-lg transition-shadow">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Quality Technician</h3>
              <div className="text-[var(--foreground)]/60">May 2009 – May 2013</div>
            </div>
            <div className="text-lg mb-3 text-[var(--primary)]">Tower International • Clinton Township, MI</div>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/80">
              <li>Conducted inspections using check fixtures, precision measuring instruments, and visual assessments</li>
              <li>Maintained documentation of quality metrics, facilitating data-driven analysis</li>
              <li>Collaborated with production and engineering teams on quality standards and improvement initiatives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Education</h2>
        
        <div className="space-y-8">
          <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] hover:shadow-lg transition-shadow">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Industrial Technology</h3>
              <div className="text-[var(--foreground)]/60">Graduated June 2017</div>
            </div>
            <div className="text-lg mb-3 text-[var(--primary)]">Macomb Community College • Roseville, MI</div>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/80">
              <li>Achieved Dean's List recognition while managing full-time professional commitments</li>
              <li>Balanced 70-80 hour workweeks with academic pursuits</li>
              <li>Attained certifications with commendable academic performance</li>
            </ul>
          </div>

          <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] hover:shadow-lg transition-shadow">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Aviation Science</h3>
              <div className="text-[var(--foreground)]/60">Graduated June 2003</div>
            </div>
            <div className="text-lg mb-3 text-[var(--primary)]">Central Texas College • Killeen, TX</div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Industrial & Technical</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Advanced Automation Systems',
                'Weld Programming',
                'Fanuc Robots',
                'Motoman Robots',
                'Production Cell Installation',
                'Quality Control',
                'Electrical Systems',
                'System Diagnostics'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">AI & Software Development</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'AI Integration',
                'Stable Diffusion',
                'Suno AI',
                'Flux',
                'Web Development',
                'React',
                'Next.js',
                'Tailwind CSS',
                'GitHub',
                'AI Prompting'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Certified Journeyman Maintenance Electrician',
              issuer: 'U.S. Department of Labor'
            },
            {
              title: 'Private Pilot License',
              issuer: 'Federal Aviation Administration',
              year: '2001'
            },
            {
              title: 'Drawn Arc Stud Welding',
              issuer: 'Emhart Fastening Teknologies'
            },
            {
              title: 'Resistance Welding',
              issuer: 'Update Technology'
            },
            {
              title: 'Responsive Web Design',
              issuer: 'freeCodeCamp',
              year: '2023'
            }
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-[var(--secondary)] p-4 rounded-lg border border-[var(--primary)] hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-[var(--primary)]">{cert.title}</h3>
              <div className="text-[var(--foreground)]/80">
                {cert.issuer}
                {cert.year && ` • ${cert.year}`}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Featured Projects</h2>
        
        <div className="space-y-4">
          <Link 
            href="/projects/remodel"
            className="block bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">AI-Guided Condo Remodel</h3>
            <p className="text-[var(--foreground)]/80">
              Transformed living space using AI for design visualization and smart home integration.
              Utilized Stable Diffusion for concept generation and implemented various smart home technologies.
            </p>
          </Link>

          <Link 
            href="/projects"
            className="block bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Game Development Portfolio</h3>
            <p className="text-[var(--foreground)]/80">
              Collection of interactive games developed using modern technologies.
              Showcases programming skills and creative problem-solving abilities.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
