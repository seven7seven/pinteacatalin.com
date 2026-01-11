export type Project = {
  id: string
  title: string
  url: string
  description: string
  role: string
  tags: string[]
  highlights: string[]
  thumbnail?: string
  splineEmbed?: string
  protected?: boolean
}

export const projects: Project[] = [
  {
    id: 'crm-rebs',
    title: 'CRM REBS',
    url: 'https://www.crmrebs.ro/',
    description: 'Cloud-based CRM software built for real estate agencies. Automates marketing and sales activities, saving agents 3+ hours daily by publishing listings to 15+ portals with one click.',
    role: 'Co-founder & Chief Product Officer',
    tags: ['Founder', 'UX', 'Customer Development', 'Project Management', 'Marketing'],
    thumbnail: '/images/work/crm-rebs.png',
    highlights: [
      'Used by 3,000+ real estate professionals',
      'Network of 350+ collaborating agencies',
      'Real-time property synchronization',
      'Automated PDF presentations & reports',
    ],
  },
  {
    id: 'rebs-site-builder',
    title: 'REBS Site Builder',
    url: 'https://www.crmrebs.ro/site-agentie-imobiliara/',
    description: 'Website builder tailored for real estate agencies. Modern, mobile-first design with SEO optimization, fully synchronized with CRM REBS in real-time.',
    role: 'Product Lead, Front-end lead',
    tags: ['Figma Design System', 'Discovery Workshops', 'Programatic SEO', 'Technical Management'],
    thumbnail: '/images/work/rebs-site-builder.png',
    highlights: [
      'Real-time sync with CRM REBS',
      'Self-service customization without coding',
      'Mobile-first responsive design',
      'Launch-ready in a single day',
    ],
  },
  {
    id: 'rebs-mobile',
    title: 'REBS Mobile',
    url: '',
    description: 'Mobile application for real estate agents, featuring AI-powered property matching and client management on the go.',
    role: 'Product Lead, Front-end Lead',
    tags: ['UX', 'Customer Development', 'AI Integration'],
    thumbnail: '/images/work/mobile.png',
    highlights: [
      'AI-powered property recommendations',
      'Seamless CRM synchronization',
      'Offline-first architecture',
      'Voice-enabled property search',
    ],
    protected: true,
  },
  {
    id: 'asw',
    title: 'ASW.ro',
    url: 'https://www.asw.ro/',
    description: 'Corporate website for Alfa Software, a Romanian software company specializing in ERP solutions. ASiS ERP serves manufacturing, construction, and transportation industries.',
    role: 'Consultant, Lead Designer',
    tags: ['Business Consulting', 'Branding', 'User Research'],
    thumbnail: '/images/work/asw.png',
    highlights: [
      'Enterprise-grade ERP platform showcase',
      'Multi-industry solution presentation',
      'Cloud & on-premise deployment options',
      'API integrations & IoT capabilities',
    ],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
