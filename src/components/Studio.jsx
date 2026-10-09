import { approach } from "../data/content";

export default function Studio() {
    return (
        <section id="studio" className="border-y border-line py-[140px] max-md:py-20">
            <div className="mx-auto w-[min(90rem,100%-6rem)] max-md:w-[calc(100%-2.25rem)]">
                <div className="flex justify-between gap-5 max-md:flex-col max-md:gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase">02 / THE STUDIO</span>
                    <span className="text-[10px] tracking-[0.08em] text-muted uppercase">INDEPENDENT BY NATURE.</span>
                </div>

                <div className="mt-[100px] grid grid-cols-[1.2fr_0.8fr] gap-20 max-md:mt-14 max-md:grid-cols-1 max-md:gap-9">
                    <h2 className="text-[clamp(3rem,7.5vw,6.25rem)] font-medium leading-[0.99] tracking-[-0.09em] max-md:text-[clamp(3.25rem,12vw,4.7rem)]">
                        Good design<br />
                        is not decoration.<br />
                        It's <em className="font-serif italic">intention.</em>
                    </h2>

                    <div className="max-w-[370px] pt-2.5 max-md:max-w-none">
                        <p className="text-xl leading-normal tracking-tight text-ink">
                            We partner with ambitious people to turn complex ideas into clear, lasting work.
                        </p>
                        <p className="mt-6 text-[13px] leading-[1.9] text-muted">
                            FORM is an independent creative studio working across architecture, identity, and digital design.
                            We believe the best solutions come from asking better questions, removing the unnecessary, and paying attention to every detail.
                        </p>
                        <a
                            href="#services"
                            className="mt-9 inline-flex min-w-[270px] items-center justify-between gap-6 border-b border-ink pb-2.5 text-[10px] font-semibold tracking-wider transition-colors hover:border-muted hover:text-muted"
                        >
                            WHAT WE DO <span>↓</span>
                        </a>
                    </div>
                </div>

                <div className="mt-[110px] flex flex-wrap justify-between gap-5 border-t border-line pt-5 text-[9px] font-semibold tracking-[0.08em] uppercase max-md:mt-16 max-md:justify-start max-md:gap-x-6">
                    <span className="text-muted">OUR APPROACH</span>
                    {approach.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}