import Link from 'next/link'
import Image from 'next/image'
import LayoutWrapper from '@/components/layout-wrapper'
import { projects } from '@/data/projects'

export default function WorkPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-[800px] mx-auto px-6 pb-12">
        <div className="text-center mb-6">
          <p>A selection of products and projects I helped create.</p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="flex flex-col bg-light/5 rounded-xl overflow-hidden no-underline hover:bg-light/10 transition-colors duration-200 group"
            >
              <div className="relative w-full h-[180px] bg-main/20">
                {project.splineEmbed ? (
                  <iframe
                    src={project.splineEmbed}
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="pointer-events-none"
                  />
                ) : project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="p-4">
                <h2 className="m-0 text-lg font-semibold text-light group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-main/20 text-light/70 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
