import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileDownload, FaTools, FaLaptopCode, FaCertificate, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function ResumePage() {
  return (
    <div className="container-wrapper py-16 max-w-5xl mx-auto px-4">
      {/* Header Section with Gradient Background */}
      <div className="relative mb-12 p-8 rounded-2xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--primary)]/5 backdrop-blur-sm border border-[var(--primary)]/20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/70">
          Brandon Williams
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[var(--foreground)]/80">
          <Link 
            href="mailto:Brandon0129@gmail.com" 
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-all hover:translate-x-1"
          >
            <FaEnvelope className="text-[var(--primary)]" />
            Brandon0129@gmail.com
          </Link>
          <Link 
            href="tel:248-688-5745" 
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-all hover:translate-x-1"
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
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-all hover:translate-x-1"
          >
            <FaLinkedin className="text-[var(--primary)]" />
            LinkedIn
          </Link>
          <Link 
            href="https://github.com/BrandonWilliams129" 
            target="_blank"
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-all hover:translate-x-1"
          >
            <FaGithub className="text-[var(--primary)]" />
            GitHub
          </Link>
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-all hover:translate-x-1"
          >
            <FaFileDownload className="text-[var(--primary)]" />
            Download PDF
          </Link>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <FaBriefcase className="text-2xl text-[var(--primary)]" />
          <h2 className="text-2xl font-bold">Professional Experience</h2>
        </div>
        
        <div className="space-y-6">
          <div className="group p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">Weld Technician</h3>
              <div className="text-[var(--foreground)]/60">May 2014 – Present</div>
            </div>
            <div className="text-lg mb-3 text-[var(--primary)]">Autokiniton • Clinton Township, MI</div>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/80">
              <li>Lead diagnostic and repair operations for advanced automation systems, optimizing weld timers and transformers</li>
              <li>Program weld schedules and fine-tune Fanuc and Motoman robot programs to enhance performance</li>
              <li>Oversee installation and relocation of production cells, managing setup tasks including plumbing and electrical wiring to ensure seamless integration and operational efficiency</li>
            </ul>
          </div>

          <div className="group p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">Quality Technician</h3>
              <div className="text-[var(--foreground)]/60">May 2009 – May 2013</div>
            </div>
            <div className="text-lg mb-3 text-[var(--primary)]">Tower International • Clinton Township, MI</div>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/80">
              <li>Conducted inspections of assembly units using check fixtures, precision measuring instruments, and visual assessments</li>
              <li>Maintained documentation of quality metrics, facilitating data-driven analysis</li>
              <li>Collaborated with production and engineering teams to align on quality standards and strategize continuous improvement initiatives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <FaGraduationCap className="text-2xl text-[var(--primary)]" />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        
        <div className="space-y-6">
          <div className="group p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">Industrial Technology</h3>
              <div className="text-[var(--foreground)]/60">Graduated June 2017</div>
            </div>
            <div className="text-lg mb-3 text-[var(--primary)]">Macomb Community College • Roseville, MI</div>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/80">
              <li>Achieved Dean's List recognition while managing full-time professional commitments</li>
              <li>Balanced a workload of 70-80 hours per week with academic pursuits, demonstrating strong work ethic</li>
              <li>Attained certifications and commendable academic performance, reflecting a practical approach to learning</li>
            </ul>
          </div>

          <div className="group p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">Aviation Science</h3>
              <div className="text-[var(--foreground)]/60">Graduated June 2003</div>
            </div>
            <div className="text-lg mb-3 text-[var(--primary)]">Central Texas College • Killeen, TX</div>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/80">
              <li>Completed coursework in aerodynamics, aircraft systems, and aviation safety</li>
              <li>Gained foundational knowledge in aviation operations and management</li>
              <li>Developed skills applicable to both piloting and aviation maintenance roles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <FaTools className="text-2xl text-[var(--primary)]" />
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[var(--primary)] transition-colors">Technical Skills</h3>
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
                  className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm hover:bg-[var(--primary)]/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="group p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[var(--primary)] transition-colors">Professional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'AI Enthusiasm',
                'Detail Oriented',
                'Consistent',
                'Problem Solving',
                'Team Leadership',
                'Process Optimization',
                'Quality Assurance',
                'Technical Documentation'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm hover:bg-[var(--primary)]/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <FaCertificate className="text-2xl text-[var(--primary)]" />
          <h2 className="text-2xl font-bold">Certifications</h2>
        </div>
        
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
              className="group p-4 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5"
            >
              <h3 className="font-semibold group-hover:text-[var(--primary)] transition-colors">{cert.title}</h3>
              <div className="text-[var(--foreground)]/80">
                {cert.issuer}
                {cert.year && ` • ${cert.year}`}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
