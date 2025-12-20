import LayoutWrapper from '@/components/layout-wrapper'

const projects = [
  {
    id: 'crm-rebs',
    title: 'CRM REBS',
    url: 'https://www.crmrebs.ro/',
    description: 'Cloud-based CRM software built for real estate agencies. Automates marketing and sales activities, saving agents 3+ hours daily by publishing listings to 15+ portals with one click.',
    role: 'Co-founder & Technical Lead',
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
    role: 'Technical Lead',
    highlights: [
      'Real-time sync with CRM REBS',
      'Self-service customization without coding',
      'Mobile-first responsive design',
      'Launch-ready in a single day',
    ],
  },
  {
    id: 'asw',
    title: 'ASW.ro',
    url: 'https://www.asw.ro/',
    description: 'Corporate website for Alfa Software, a Romanian software company specializing in ERP solutions. ASiS ERP serves manufacturing, construction, and transportation industries.',
    role: 'Web Development',
    highlights: [
      'Enterprise-grade ERP platform showcase',
      'Multi-industry solution presentation',
      'Cloud & on-premise deployment options',
      'API integrations & IoT capabilities',
    ],
  },
]

export default function WorkPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-[800px] mx-auto px-6 pb-12">
        <div className="text-center mb-12">
          <p>A selection of products and projects I helped create.</p>
        </div>
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-light/5 rounded-lg overflow-hidden tablet:grid tablet:grid-cols-[280px_1fr]"
            >
              <div className="bg-main/20 min-h-[180px] tablet:min-h-full">
                {/* Placeholder for project image */}
              </div>
              <div className="p-6">
                <h2 className="m-0 mb-2 text-lg font-semibold tracking-tight">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light no-underline hover:text-accent transition-colors duration-200"
                  >
                    {project.title}
                  </a>
                </h2>
                <span className="inline-block text-sm text-accent mb-4 font-medium tracking-wide uppercase">
                  {project.role}
                </span>
                <p className="mb-4 leading-relaxed">{project.description}</p>
                <ul className="m-0 p-0 list-none">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="relative pl-5 mb-2 text-sm text-light/80 before:content-['→'] before:absolute before:left-0 before:text-main"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
