"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const Work = () => {
  const { t } = useLanguage();
  const projects = t.work.projects;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.2, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="mb-10 text-center xl:text-left">
          <p className="text-accent uppercase tracking-[4px] text-sm">
            {t.work.subtitle}
          </p>
          <h2 className="h2">{t.work.title}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.num}
              className="bg-[#232329] border border-white/10 rounded-2xl overflow-hidden group"
            >
              <div className="relative h-[260px] sm:h-[300px]">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <Image
                  src={project.image}
                  fill
                  className="object-cover"
                  alt={project.title}
                />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
                  <span className="text-sm uppercase tracking-[3px] text-white/70">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="text-5xl font-extrabold text-transparent text-outline">
                    {project.num}
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-accent transition-all">
                  {project.title}
                </h3>
                <p className="text-white/60">{project.description}</p>
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
                <div className="border-t border-white/10 pt-4 flex items-center gap-4 flex-wrap">
                  <Link
                    href={`/work/${project.slug}`}
                    className="flex items-center gap-2 text-white hover:text-accent transition-all"
                  >
                    <BsArrowUpRight className="text-xl" />
                    {t.work.actions.details}
                  </Link>
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
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
