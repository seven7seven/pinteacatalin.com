import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ChevronRight, ExternalLink } from 'lucide-react'
import LayoutWrapper from '@/components/layout-wrapper'
import PasswordGate from '@/components/password-gate'
import VideoPlayer from '@/components/video-player'
import { projects, getProjectById } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: 'Project Not Found — Pintea Cătălin',
    }
  }

  return {
    title: `${project.title} — Pintea Cătălin`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Pintea Cătălin`,
      description: project.description,
      images: project.thumbnail ? [project.thumbnail] : undefined,
    },
  }
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

      <p className="mb-6 leading-relaxed text-sm text-light">{project.description}</p>

      <ul className="m-0 p-0 list-none mb-8">
        {project.highlights.map((highlight, index) => (
          <li
            key={index}
            className="flex items-start gap-2 mb-2 text-sm text-light"
          >
            <ChevronRight className="w-4 h-4 text-main flex-shrink-0 mt-0.5" />
            {highlight}
          </li>
        ))}
      </ul>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent font-semibold no-underline hover:underline"
        >
          Visit project
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </article>
  )
}

function ProjectAssets({ project }: { project: ReturnType<typeof getProjectById> }) {
  if (!project) return null
  if (!project.video && (!project.images || project.images.length === 0)) return null

  return (
    <div className="max-w-[1440px] mx-auto px-6 mt-8">
      {project.video && (
        <div className="mb-12 max-w-[1110px] mx-auto">
          <VideoPlayer src={project.video} />
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="flex flex-col gap-4">
          {project.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              width={1600}
              height={1000}
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="w-full h-auto rounded-sm tablet:rounded-lg desktop:rounded-2xl"
            />
          ))}
        </div>
      )}
    </div>
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
      <div className="max-w-[800px] mx-auto px-6">
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

      {!project.protected && <ProjectAssets project={project} />}

      <div className="pb-12" />
    </LayoutWrapper>
  )
}
