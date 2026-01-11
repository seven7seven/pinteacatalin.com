import Link from 'next/link'
import { notFound } from 'next/navigation'
import LayoutWrapper from '@/components/layout-wrapper'
import PasswordGate from '@/components/password-gate'
import { projects, getProjectById } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

type Props = {
  params: Promise<{ id: string }>
}

function ProjectContent({ project }: { project: ReturnType<typeof getProjectById> }) {
  if (!project) return null

  return (
    <article>
      <h1 className="m-0 mb-2 text-2xl font-semibold tracking-tight text-light">
        {project.title}
      </h1>
      <span className="inline-block text-sm text-accent mb-4 font-medium tracking-wide uppercase">
        {project.role}
      </span>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 bg-main/20 text-light/70 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-6 leading-relaxed text-light/90">{project.description}</p>

      <ul className="m-0 p-0 list-none mb-8">
        {project.highlights.map((highlight, index) => (
          <li
            key={index}
            className="relative pl-5 mb-2 text-light/80 before:content-['→'] before:absolute before:left-0 before:text-main"
          >
            {highlight}
          </li>
        ))}
      </ul>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent no-underline hover:underline"
        >
          Visit project
          <span>↗</span>
        </a>
      )}
    </article>
  )
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const content = <ProjectContent project={project} />

  return (
    <LayoutWrapper>
      <div className="max-w-[800px] mx-auto px-6 pb-12">
        <div className="text-center mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-light text-sm no-underline hover:text-accent transition-colors duration-200"
          >
            <span>←</span>
            <span>Back to projects</span>
          </Link>
        </div>

        {project.protected ? (
          <PasswordGate projectId={project.id}>{content}</PasswordGate>
        ) : (
          content
        )}
      </div>
    </LayoutWrapper>
  )
}
