import { services } from "../data/content";

export default function Services() {
    return (
        <section id="services" className="mx-auto w-[min(90rem,100%-6rem)] pb-[150px] pt-[140px] max-md:w-[calc(100%-2.25rem)] max-md:py-20">
            <div className="mb-[60px] flex items-end justify-between gap-8 max-md:mb-10 max-md:flex-col max-md:items-start">
                <div>
                    <span className="block text-[10px] font-semibold tracking-[0.1em] uppercase">03 / CAPABILITIES</span>
                    <h2 className="mt-6 text-[clamp(3rem,7vw,5.875rem)] font-medium leading-[0.95] tracking-[-0.08em] max-md:mt-4 max-md:text-[clamp(3rem,12vw,4.4rem)]">
                        What we do.
                    </h2>
                </div>
                <p className="text-right text-xs leading-[1.8] text-muted max-md:text-left">
                    Small teams. Clear thinking.<br className="max-md:hidden" /> Work built to last.
                </p>
            </div>

            <div className="border-t border-line">
                {services.map((service) => (
                    <article
                        key={service.number}
                        className="group grid min-h-[100px] grid-cols-[55px_1fr_1fr_24px] items-center gap-5 border-b border-line transition-all hover:bg-bg-soft hover:px-3 max-md:grid-cols-[28px_1fr_20px] max-md:gap-3 max-md:min-h-[85px] max-md:py-4"
                    >
                        <span className="text-[10px] text-muted">{service.number}</span>
                        <h3 className="text-[clamp(1.125rem,2.2vw,1.75rem)] font-medium tracking-tight max-md:text-[19px]">
                            {service.title}
                        </h3>
                        <p className="text-[11px] text-muted max-md:col-start-2 max-md:row-start-2 max-md:-mt-3 max-md:pb-4 max-md:text-[10px]">
                            {service.description}
                        </p>
                        <span className="justify-self-end text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 max-md:col-start-3 max-md:row-start-1">
                            ↗
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
}