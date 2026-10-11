import React from 'react';

interface TeamMember {
  name: string;
  phone: string;
  tel?: string;
  role?: string;
  isPlainTextPhone?: boolean;
}

const CORE_MEMBERS: TeamMember[] = [
  {
    name: 'Seema Prajapat',
    phone: '9755189184',
    tel: '+919755189184',
  },
  {
    name: 'Utkarsh Sharma',
    phone: '7452918773',
    tel: '+917452918773',
  },
  {
    name: 'Sarthak Prajapat',
    phone: '97835 83308',
    tel: '+917835583308',
  },
  {
    name: 'Nitin Arya',
    phone: '6264949433',
    tel: '+916264949433',
  },
  {
    name: 'Arpit Sharma',
    phone: '9669551854',
    tel: '+919669551854',
  },
  {
    name: 'Muskan Goud',
    phone: '+91 88230 28952',
    isPlainTextPhone: true,
  },
];

export const CoreTeamSection: React.FC = () => {
  return (
    <section
      id="core-team"
      aria-labelledby="core-team-heading"
      className="core-team-section"
    >
      <div className="core-team-container">
        {/* Section Heading */}
        <h2 id="core-team-heading" className="core-team-heading">
          CORE TEAM
        </h2>

        {/* 6 Equal Cards Grid */}
        <div className="core-team-grid">
          {CORE_MEMBERS.map((member) => (
            <div key={member.name} className="core-team-card">
              <h3 className="core-team-member-name">
                {member.name}
              </h3>
              {member.role && (
                <div className="core-team-role">
                  {member.role}
                </div>
              )}
              {member.isPlainTextPhone || !member.tel ? (
                <div
                  className="core-team-phone-text"
                  aria-label={`Phone number of ${member.name}: ${member.phone}`}
                >
                  <span className="core-team-phone-icon" aria-hidden="true">📞</span>
                  <span>{member.phone}</span>
                </div>
              ) : (
                <a
                  href={`tel:${member.tel}`}
                  className="core-team-phone-link focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-midnight)]"
                  aria-label={`Call ${member.name} at ${member.phone}`}
                >
                  <span className="core-team-phone-icon" aria-hidden="true">📞</span>
                  <span>{member.phone}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
