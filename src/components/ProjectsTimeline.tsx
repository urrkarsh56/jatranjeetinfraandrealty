import React from 'react';
import { PROJECTS_TIMELINE, TAKSHIT_OMKARLOK_GATE_ALT } from '../data/properties';
import { MapPin, Shield, Calendar } from 'lucide-react';
import { RealEstateIcons } from './RealEstateIcons';

interface ProjectsTimelineProps {
  onEnquireProject: (projectName: string) => void;
}

export const ProjectsTimeline: React.FC<ProjectsTimelineProps> = ({ onEnquireProject }) => {
  return (
    <section
      id="projects"
      className="py-20 lg:py-28 relative transition-colors duration-300"
      style={{
        backgroundColor: 'var(--theme-bg-base)',
        color: 'var(--theme-text-main)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="space-y-3 reveal-item">
            <span
              className="text-xs font-mono tracking-wider uppercase block"
              style={{ color: 'var(--theme-accent-gold)' }}
            >
              Development Milestones & Status
            </span>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--theme-text-headline)' }}
            >
              Active Construction & Registry Handover
            </h2>
            <p
              className="text-sm sm:text-base max-w-xl"
              style={{ color: 'var(--theme-text-muted)' }}
            >
              Track physical infrastructure delivery on site: road asphalt completion, electrical substations, water supply mains, and sub-registrar execution schedules.
            </p>
          </div>

          <div
            className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border shadow-theme-card reveal-item delay-100 luxury-card"
            style={{
              backgroundColor: 'var(--theme-bg-surface)',
              borderColor: 'var(--theme-border-subtle)',
              color: 'var(--theme-text-main)',
            }}
          >
            <RealEstateIcons.UtilitiesLive className="w-4 h-4" style={{ color: 'var(--theme-accent-gold)' }} />
            <span>Site Engineering Inspection: Bi-Weekly Audits</span>
          </div>
        </div>

        {/* Longitudinal Milestone Architecture */}
        <div className="space-y-8 text-left">
          {PROJECTS_TIMELINE.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-theme-card reveal-item delay-200 luxury-card group"
              style={{
                backgroundColor: 'var(--theme-bg-surface)',
                borderColor: 'var(--theme-border-subtle)',
              }}
            >
              {/* Media Column (4 cols) */}
              <div
                className="luxury-img-wrapper lg:col-span-4 relative aspect-[16/10] lg:aspect-auto min-h-[220px]"
                style={{ backgroundColor: 'var(--theme-bg-base)' }}
              >
                <img
                  src={project.image}
                  alt={TAKSHIT_OMKARLOK_GATE_ALT}
                  loading="lazy"
                  width={1068}
                  height={723}
                  className="luxury-img is-revealed w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full backdrop-blur-md text-xs font-semibold border"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    borderColor: 'var(--theme-accent-border)',
                    color: 'var(--theme-accent-gold)',
                  }}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Data & Milestone Schedule (8 cols) */}
              <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      className="font-display text-xl sm:text-2xl font-bold"
                      style={{ color: 'var(--theme-text-headline)' }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="font-mono text-xs px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: 'var(--theme-bg-card)',
                        borderColor: 'var(--theme-border-subtle)',
                        color: 'var(--theme-text-muted)',
                      }}
                    >
                      {project.totalUnits}
                    </span>
                  </div>

                  <div
                    className="flex flex-wrap items-center gap-4 text-xs font-mono"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent-gold)' }} />
                      {project.location}
                    </span>
                    <span style={{ color: 'var(--theme-accent-border)' }}>/</span>
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent-gold)' }} />
                      RERA: {project.reraNo}
                    </span>
                  </div>

                  <p
                    className="text-xs sm:text-sm"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    {project.type}
                  </p>
                </div>

                {/* Technical Progress Breakdown */}
                <div
                  className="space-y-2 p-4 rounded-2xl border"
                  style={{
                    backgroundColor: 'var(--theme-bg-card)',
                    borderColor: 'var(--theme-border-subtle)',
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span style={{ color: 'var(--theme-text-muted)' }}>Physical Infrastructure Completed</span>
                    <span
                      className="font-bold"
                      style={{ color: 'var(--theme-accent-gold)' }}
                    >
                      {project.progress}%
                    </span>
                  </div>

                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: 'var(--theme-bg-surface)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${project.progress}%`,
                        background: 'var(--theme-btn-gradient)',
                      }}
                    />
                  </div>

                  <div
                    className="flex items-center justify-between text-[11px] pt-1 font-mono"
                    style={{ color: 'var(--theme-text-dim)' }}
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" style={{ color: 'var(--theme-accent-gold)' }} />
                      Registry Status: {project.expectedDate}
                    </span>
                    <span>Direct Registry at Tehsil</span>
                  </div>
                </div>

                {/* Action button */}
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => onEnquireProject(project.title)}
                    className="luxury-btn-slide px-6 py-2.5 rounded-full text-xs font-bold active:scale-95 shadow-theme-card"
                    style={{
                      background: 'var(--theme-btn-gradient)',
                      color: 'var(--theme-btn-text)',
                    }}
                  >
                    Check available units in {project.title.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
