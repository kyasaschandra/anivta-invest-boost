import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

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

const ProjectsPage = () => {
  useEffect(() => {
    setSEO(
      "Ongoing Projects | Anvita Capital",
      "Explore ongoing real estate projects in India from Anvita Capital Fund.",
      window.location.origin + "/projects"
    );
  }, []);

  return (
    <main>
      <section className="pt-28 pb-16 md:pb-24 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-10 md:mb-14">
            <h1 className="text-3xl md:text-5xl font-bold text-primary">Ongoing Projects</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Discover select developments with secure, high-quality assets.
            </p>
          </header>

          <section className="grid grid-cols-1 gap-6 md:gap-8" aria-label="Projects list">
            {projects.map((project) => (
              <article key={project.slug} className="h-full" itemScope itemType="https://schema.org/CreativeWork">
                <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title} details`}>
                  <Card className="overflow-hidden h-full group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={project.image}
                        alt={`${project.title}, ${project.location} project image`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                        itemProp="image"
                      />
                    </AspectRatio>
                    <CardContent className="p-4 md:p-5">
                      <h2 className="text-lg font-semibold text-primary" itemProp="headline">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mt-1" itemProp="description">
                        {project.description}
                      </p>
                      {project.externalUrl && (
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                          aria-label={`Visit the official ${project.title} site`}
                        >
                          Visit official project site
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
