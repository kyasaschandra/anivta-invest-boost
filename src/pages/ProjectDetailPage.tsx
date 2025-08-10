import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { projects } from "@/data/projects";

const setSEO = (title: string, description: string, canonical?: string) => {
  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", description);
  else {
    const m = document.createElement("meta");
    m.setAttribute("name", "description");
    m.setAttribute("content", description);
    document.head.appendChild(m);
  }
  const linkRelCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (linkRelCanonical) linkRelCanonical.href = canonical || window.location.href;
  else {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    l.setAttribute("href", canonical || window.location.href);
    document.head.appendChild(l);
  }
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      setSEO(
        `${project.title} | Ongoing Project | Anvita Capital`,
        project.description,
        window.location.origin + `/projects/${project.slug}`
      );
    }
  }, [project]);

  if (!project) {
    return (
      <main className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">Project not found</h1>
          <p className="text-muted-foreground mt-3">The project you are looking for does not exist.</p>
          <Link to="/projects" className="inline-block mt-6 underline">Back to Projects</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <article className="pt-28 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <header className="mb-6 md:mb-8">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-3">
              <Link to="/projects" className="underline">Projects</Link>
              <span className="mx-2">/</span>
              <span aria-current="page">{project.title}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-primary">{project.title}</h1>
            <p className="text-muted-foreground mt-2">{project.location}</p>
          </header>

          <section className="mb-8 md:mb-10">
            <AspectRatio ratio={16 / 9}>
              <img
                src={project.image}
                alt={`${project.title}, ${project.location} hero image`}
                className="object-cover w-full h-full rounded-lg"
                loading="eager"
              />
            </AspectRatio>
          </section>

          <section className="prose prose-neutral max-w-none">
            <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
            {project.content && (
              <p className="text-base text-muted-foreground leading-relaxed mt-4">{project.content}</p>
            )}
          </section>
        </div>
      </article>
    </main>
  );
};

export default ProjectDetailPage;
