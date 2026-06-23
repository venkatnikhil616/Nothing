'use client';

import React from 'react';
import { Calendar, Award } from 'lucide-react';

interface Position {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  accolade?: string;
}

export default function Experience() {
  const experiences: Position[] = [
    {
      role: 'AI Web Development Intern',
      company: 'InAmigos Foundation',
      period: 'May 2025 – Jun 2026',
      bullets: [
        'Led end-to-end development of a full-stack online learning platform using the MERN stack (MongoDB, Express, React, Node.js).',
        'Implemented secure JWT-based user authentication and role-based access control (RBAC) for instructors and learners.',
        'Developed course management features including content upload, enrollment workflows, and quiz creation modules.',
        'Built interactive progress tracking dashboards and responsive UI components, improving user engagement by 30%.'
      ]
    },
    {
      role: 'Cyber Security Analyst',
      company: 'TATA',
      period: 'April 2025',
      bullets: [
        'Conducted Identity and Access Management (IAM) assessment in a simulated enterprise cybersecurity environment.',
        'Analyzed cybersecurity risks, access control mechanisms, and security policies to identify vulnerabilities and improve security posture.',
        'Evaluated cybersecurity best practices including Role-Based Access Control (RBAC), least privilege access, and user lifecycle management.',
        'Collaborated on security analysis and threat assessment tasks to strengthen enterprise security operations.'
      ],
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title">Internship Experience</h2>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="timeline-node"></div>
            
            <div className="glass-card timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <div className="timeline-date" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={15} style={{ color: 'var(--primary-orange)' }} />
                  {exp.period}
                </div>
              </div>

              {exp.accolade && (
                <div className="badge" style={{ marginBottom: '1.2rem', display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}>
                  <Award size={14} /> {exp.accolade}
                </div>
              )}

              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
