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
  video?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    id: 'crm-rebs',
    title: 'CRM REBS',
    url: 'https://www.crmrebs.ro/',
    description: [
      "Co-founded REBS at 23, and helped build it into a market leader. Achieved product market fit with CRM REBS, an all-in-one",
      "SaaS platform for real estate professionals.",
    ].join(' '),
    role: 'Co-founder & Chief Product Officer',
    tags: ['Founder', 'UX', 'Customer Development', 'Project Management', 'Marketing', 'Jira'],
    thumbnail: '/images/work/crm-rebs.png',
    highlights: [
      'Used by 3,000+ real estate professionals',
      'Praised for best user experience',
      'World-class 84 NPS score',
      '€228 billion in property value managed',
      'EU-funded investment of €1 million'
    ],
    images: [
      '/images/work/projects/crm/crm-property.png',
      '/images/work/projects/crm/crm-requests.png',
      '/images/work/projects/crm/crm-ap-list.png',
      '/images/work/projects/crm/crm-reports.png',
      '/images/work/projects/crm/crm-report-details.png',
      '/images/work/projects/crm/crm-design-center.png',
      '/images/work/projects/crm/crm-pricing.png',
    ],
  },
  {
    id: 'rebs-site-builder',
    title: 'REBS Site Builder',
    url: 'https://www.crmrebs.ro/site-agentie-imobiliara/',
    description: [
      "RSB offers real estate professionals a way to showcase their portfolio & services. Designed to be fully configured by the client, up in a few hours, automatically SEO-friendly, ",
      "it was also built with the end consumer in mind.",
    ].join(' '),
    role: 'Product Lead, Front-end lead',
    tags: ['Figma Design System', 'Discovery Workshops', 'Programatic SEO', 'Technical Management'],
    thumbnail: '/images/work/rebs-site-builder.png',
    highlights: [
      'MVP: over 50 websites in 2 months',
      'Now hosting 460+ real-estate websites',
      'Direct impact in client consumer experience, improving transactions',
      '10 themes created by 3 designers, infinite variations',
    ],
    video: 'https://static.crmrebs.ro/video/rsb_video.186c2d2dcdcd.webm',
    images: [
      '/images/work/projects/rsb/rsb-dark-home.png',
      '/images/work/projects/rsb/rsb-risang-home.png',
      '/images/work/projects/rsb/rsb-listing.png',
      '/images/work/projects/rsb/rsb-property.png',
      '/images/work/projects/rsb/rsb-website.png',
      '/images/work/projects/rsb/rsb-mobile.png',
    ],
  },
  {
    id: 'rebs-mobile',
    title: 'REBS Mobile',
    url: '',
    description: 'Mobile application for the REBS CRM ecosystem, cutting edge technology and AI integration.',
    role: 'Product Lead, Front-end Lead',
    tags: ['UX', 'Customer Development', 'AI Integration'],
    thumbnail: '/images/work/mobile.png',
    highlights: [
      'Innovative new features for the busy, on-the-go agent',
      '3+ years worth of research and distilling',
      'Prototyped in days, not weeks, using Lovable + Cursor',
      'Delivered in weeks, not months using Claude Code',
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
