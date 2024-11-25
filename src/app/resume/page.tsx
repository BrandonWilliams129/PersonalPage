import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileDownload, FaTools, FaLaptopCode, FaCertificate, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import ScrollToTop from '@/components/ScrollToTop';

export default function ResumePage() {
  return (
    <>
      <div className="container-wrapper py-8 sm:py-12">
        <div className="space-y-8 sm:space-y-12">
          {/* Header Section */}
          <header className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--primary)]">
              Brandon Williams
            </h1>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base">
              <Link 
                href="mailto:Brandon0129@gmail.com" 
                className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors"
              >
                <FaEnvelope className="w-4 h-4" />
                <span className="break-all">Brandon0129@gmail.com</span>
              </Link>
              <Link 
                href="tel:248-688-5745" 
                className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors"
              >
                <FaPhone className="w-4 h-4" />
                <span className="break-all">248-688-5745</span>
              </Link>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span className="break-all">Sterling Heights, MI</span>
              </div>
              <Link 
                href="https://linkedin.com/in/brandon-williams-00573a123" 
                target="_blank"
                className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Link>
              <Link 
                href="https://github.com/BrandonWilliams129" 
                target="_blank"
                className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </Link>
              <Link 
                href="/resume.pdf" 
                target="_blank"
                className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors"
              >
                <FaFileDownload className="w-4 h-4" />
                <span>Download PDF</span>
              </Link>
            </div>
          </header>

          <div className="space-y-8 sm:space-y-12">
            {/* Experience Section */}
            <section className="space-y-6">
              <h2 className="section-title">Experience</h2>
              <div className="divide-y divide-[var(--border)]">
                <div className="group py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">Weld Technician</h3>
                      <p className="text-[var(--muted)]">Autokiniton • Clinton Township, MI</p>
                    </div>
                    <p className="text-sm text-[var(--muted)] mt-1 sm:mt-0">May 2014 – Present</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-4">
                    <li className="text-[var(--foreground-secondary)]">Lead diagnostic and repair operations for advanced automation systems, optimizing weld timers and transformers</li>
                    <li className="text-[var(--foreground-secondary)]">Program weld schedules and fine-tune Fanuc and Motoman robot programs to enhance performance</li>
                    <li className="text-[var(--foreground-secondary)]">Oversee installation and relocation of production cells, managing setup tasks including plumbing and electrical wiring to ensure seamless integration and operational efficiency</li>
                  </ul>
                </div>
                <div className="group py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">Quality Technician</h3>
                      <p className="text-[var(--muted)]">Tower International • Clinton Township, MI</p>
                    </div>
                    <p className="text-sm text-[var(--muted)] mt-1 sm:mt-0">May 2009 – May 2013</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-4">
                    <li className="text-[var(--foreground-secondary)]">Conducted inspections of assembly units using check fixtures, precision measuring instruments, and visual assessments</li>
                    <li className="text-[var(--foreground-secondary)]">Maintained documentation of quality metrics, facilitating data-driven analysis</li>
                    <li className="text-[var(--foreground-secondary)]">Collaborated with production and engineering teams to align on quality standards and strategize continuous improvement initiatives</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <FaGraduationCap className="text-xl sm:text-2xl text-[var(--primary)]" />
                <h2 className="text-xl sm:text-2xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="group p-4 sm:p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">Industrial Technology</h3>
                    <div className="text-[var(--foreground)] opacity-75 text-sm sm:text-base">Graduated June 2017</div>
                  </div>
                  <div className="text-lg mb-3 text-[var(--primary)]">Macomb Community College • Roseville, MI</div>
                  <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]">
                    <li>Achieved Dean's List recognition while managing full-time professional commitments</li>
                    <li>Balanced a workload of 70-80 hours per week with academic pursuits, demonstrating strong work ethic</li>
                    <li>Attained certifications and commendable academic performance, reflecting a practical approach to learning</li>
                  </ul>
                </div>

                <div className="group p-4 sm:p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">Aviation Science</h3>
                    <div className="text-[var(--foreground)] opacity-75 text-sm sm:text-base">Graduated June 2003</div>
                  </div>
                  <div className="text-lg mb-3 text-[var(--primary)]">Central Texas College • Killeen, TX</div>
                  <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]">
                    <li>Completed coursework in aerodynamics, aircraft systems, and aviation safety</li>
                    <li>Gained foundational knowledge in aviation operations and management</li>
                    <li>Developed skills applicable to both piloting and aviation maintenance roles</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <FaTools className="text-xl sm:text-2xl text-[var(--primary)]" />
                <h2 className="text-xl sm:text-2xl font-bold">Skills</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group p-4 sm:p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 group-hover:text-[var(--primary)] transition-colors">Technical Skills</h3>
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
                        className="px-2 sm:px-3 py-1 bg-[var(--primary)]/15 text-[var(--primary)] rounded-full text-xs sm:text-sm hover:bg-[var(--primary)]/25 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="group p-4 sm:p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 group-hover:text-[var(--primary)] transition-colors">Professional Skills</h3>
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
                        className="px-2 sm:px-3 py-1 bg-[var(--primary)]/15 text-[var(--primary)] rounded-full text-xs sm:text-sm hover:bg-[var(--primary)]/25 transition-colors cursor-default"
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
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <FaCertificate className="text-xl sm:text-2xl text-[var(--primary)]" />
                <h2 className="text-xl sm:text-2xl font-bold">Certifications</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
                    className="group p-4 sm:p-6 rounded-xl bg-[var(--secondary)]/50 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/5"
                  >
                    <h3 className="font-semibold group-hover:text-[var(--primary)] transition-colors">{cert.title}</h3>
                    <div className="text-[var(--foreground)] opacity-75">
                      {cert.issuer}
                      {cert.year && ` • ${cert.year}`}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
