import { projects } from "../data/content";

export default function Work() {
    return (
        <section id="work" className="mx-auto w-[min(90rem,100%-6rem)] py-[140px] max-md:w-[calc(100%-2.25rem)] max-md:py-20">
            <div className="mb-[60px] flex items-end justify-between gap-8 max-md:mb-10 max-md:flex-col max-md:items-start">
                <div>
                    <span className="block text-[10px] font-semibold tracking-[0.1em] uppercase">01 / SELECTED WORK</span>
                    <h2 className="mt-6 text-[clamp(3rem,7vw,5.875rem)] font-medium leading-[0.95] tracking-[-0.08em] max-md:mt-4 max-md:text-[clamp(3rem,12vw,4.4rem)]">
                        Less, but <em className="font-serif italic">better.</em>
                    </h2>
                </div>
                <p className="text-right text-xs leading-[1.8] text-muted max-md:text-left">
                    A selection of projects shaped<br className="max-md:hidden" /> by clarity and intention.
                </p>
            </div>

            <div className="grid grid-cols-[1.15fr_0.85fr] gap-x-[42px] gap-y-[75px] max-md:grid-cols-1 max-md:gap-y-10">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className={project.large ? "" : "mt-[100px] max-md:mt-0"}
                    >
                        <a href="#contact" className="group relative block overflow-hidden bg-[#e2dfd7]">
                            <div className={`overflow-hidden ${project.large ? "h-[clamp(16.25rem,37vw,32.5rem)]" : "h-[clamp(15rem,29vw,25rem)]"} max-md:h-[70vw] max-md:max-h-[470px]`}>
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
                                />
                            </div>
                            <span className="absolute right-3.5 top-3.5 grid h-10 w-10 place-items-center rounded-full bg-accent text-lg opacity-0 translate-y-1.5 transition-all group-hover:translate-y-0 group-hover:opacity-100 max-md:opacity-100 max-md:translate-y-0 max-md:h-[34px] max-md:w-[34px]">
                                ↗
                            </span>
                        </a>
                        <div className="mt-[17px] flex items-start justify-between gap-4 border-t border-line pt-[18px]">
                            <div>
                                <h3 className="text-base font-medium tracking-tight">{project.title}</h3>
                                <p className="mt-1.5 text-[10px] text-muted">{project.category}</p>
                            </div>
                            <span className="mt-1.5 text-[10px] text-muted">{project.year}</span>
                        </div>
                    </article>
                ))}
            </div>

            <a
                href="#contact"
                className="mt-[90px] inline-flex min-w-[270px] items-center justify-between gap-6 border-b border-ink pb-2.5 text-[10px] font-semibold tracking-wider transition-colors hover:border-muted hover:text-muted max-md:mt-14"
            >
                HAVE A PROJECT IN MIND? <span>LET'S TALK ↗</span>
            </a>
        </section>
    );
}