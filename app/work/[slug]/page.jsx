"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useLanguage } from "@/components/LanguageProvider";

const WorkDetail = () => {
  const { slug } = useParams();
  const { t } = useLanguage();

  const resolvedSlug = Array.isArray(slug) ? slug[0] : slug;
  const project = t.work.projects.find((item) => item.slug === resolvedSlug);

  if (!project) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-12">
        <div className="container mx-auto text-center">
          <h2 className="h2 mb-4">{t.work.title}</h2>
          <p className="text-white/60 mb-6">{t.work.detail.notFound}</p>
          <Link
            href="/work"
            className="text-accent hover:text-accent-hover transition-all"
          >
            {t.work.detail.back}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] py-12">
      <div className="container mx-auto">
        <div className="mb-8">
          <p className="text-accent uppercase tracking-[4px] text-sm">
            {project.category}
          </p>
          <h1 className="h2">{project.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <div className="space-y-6">
            <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={project.image}
                fill
                className="object-cover"
                alt={project.title}
              />
            </div>

            <div>
              <h3 className="h3 mb-3">{t.work.detail.description}</h3>
              <p className="text-white/70 leading-relaxed">
                {project.details}
              </p>
            </div>

            <div>
              <h3 className="h3 mb-3">{t.work.detail.stack}</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item.name}
                    className="text-sm px-3 py-1 rounded-full bg-white/5 text-accent"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="h3 mb-3">{t.work.detail.challenges}</h3>
              <ul className="flex flex-col gap-2 text-white/70">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>• {challenge}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#232329] border border-white/10 rounded-2xl p-6">
              <h3 className="h3 mb-4">{t.work.detail.links}</h3>
              <div className="flex flex-col gap-3">
                {project.live ? (
                  <Link
                    href={project.live}
                    className="flex items-center gap-2 text-white hover:text-accent transition-all"
                  >
                    <BsArrowUpRight className="text-xl" />
                    {t.work.actions.live}
                  </Link>
                ) : (
                  <span className="text-white/40 text-sm">
                    {t.work.actions.soon}
                  </span>
                )}
                {project.github ? (
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 text-white hover:text-accent transition-all"
                  >
                    <BsGithub className="text-xl" />
                    {t.work.actions.github}
                  </Link>
                ) : (
                  <span className="text-white/40 text-sm">
                    {t.work.actions.private}
                  </span>
                )}
              </div>
            </div>

            <div>
              <h3 className="h3 mb-4">{t.work.detail.gallery}</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((image) => (
                  <div
                    key={image}
                    className="relative h-[140px] rounded-xl overflow-hidden border border-white/10"
                  >
                    <Image src={image} fill className="object-cover" alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/work"
            className="text-accent hover:text-accent-hover transition-all"
          >
            ? {t.work.detail.back}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkDetail;
