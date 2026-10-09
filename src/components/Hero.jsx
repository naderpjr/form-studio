export default function Hero() {
    return (
        <section className="mx-auto w-[min(90rem,100%-6rem)] pt-12 max-md:w-[calc(100%-2.25rem)] max-md:pt-7">
            <div className="flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.08em] uppercase">
                <span className="h-1.75 w-1.75 shrink-0 rounded-full bg-status animate-pulse" />
                <span>INDEPENDENT CREATIVE STUDIO</span>
                <span className="ml-auto text-muted max-md:hidden">EST. 2021 / BASED EVERYWHERE</span>
            </div>

            <h1 className="mt-[72px] text-[clamp(4.5rem,14.5vw,12.8rem)] font-medium leading-[0.82] tracking-[-0.1em] max-md:mt-[68px] max-md:text-[clamp(4.2rem,16vw,6.5rem)]">
                We make<br />
                ideas <em className="italic tracking-[-0.08em]">matter.</em>
            </h1>

            <div className="my-14 grid grid-cols-3 items-end gap-6 max-md:my-10 max-md:grid-cols-[1fr_auto]">
                <p className="max-w-xs text-sm leading-[1.8] text-[#5d5c56] max-md:text-xs max-md:max-w-[16rem]">
                    An independent studio building thoughtful identities,
                    digital experiences, and spaces for a world that never stands still.
                </p>

                <a
                    href="#work"
                    className="mx-auto grid h-[52px] w-[52px] place-items-center rounded-full border border-line transition-all hover:translate-y-1 hover:border-accent hover:bg-accent max-md:h-[42px] max-md:w-[42px]"
                    aria-label="Explore our work"
                >
                    ↓
                </a>

                <p className="justify-self-end text-right text-[9px] leading-[1.85] tracking-[0.1em] text-muted uppercase max-md:hidden">
                    STRATEGY<br />DESIGN<br />DIRECTION
                </p>
            </div>

            <figure className="relative h-[clamp(17.5rem,51vw,43.125rem)] overflow-hidden bg-[#d7d3c9] max-md:h-[380px]">
                <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
                    alt="Minimal contemporary interior with sculptural furniture"
                    className="h-full w-full object-cover transition-transform duration-900 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-5 bottom-[18px] flex justify-between gap-3 text-[9px] font-semibold tracking-[0.08em] text-white drop-shadow max-md:inset-x-3 max-md:bottom-3 max-md:text-[7px]">
                    <span>FIG. 001 — SPATIAL STUDY</span>
                    <span>52° 31′ N / 13° 24′ E</span>
                </figcaption>
                <span className="absolute right-5 top-[18px] text-[10px] font-medium tracking-wider text-white drop-shadow max-md:right-3 max-md:top-3">
                    01 / 04
                </span>
            </figure>
        </section>
    );
}