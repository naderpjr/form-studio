export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden bg-accent py-20 max-md:py-[60px]">
            <div className="relative z-10 mx-auto w-[min(90rem,100%-6rem)] max-md:w-[calc(100%-2.25rem)]">
                <span className="block text-[10px] font-semibold tracking-[0.1em] uppercase">04 / NEXT CHAPTER</span>
                <h2 className="mt-16 text-[clamp(3.5rem,9.5vw,8.125rem)] font-medium leading-[0.92] tracking-[-0.09em] max-md:mt-14 max-md:text-[clamp(3.25rem,12vw,4.7rem)]">
                    Have a good<br />idea? <em className="font-serif italic">Let's make it.</em>
                </h2>
                <a
                    href="mailto:hello@form.studio"
                    className="mt-14 flex w-[min(350px,100%)] items-center justify-between gap-10 border-b border-ink pb-3 text-[11px] font-semibold tracking-wider transition-opacity hover:opacity-70 max-md:mt-10"
                >
                    HELLO@FORM.STUDIO <span className="text-lg">↗</span>
                </a>
            </div>
            <div
                className="pointer-events-none absolute right-[4%] bottom-[-145px] select-none text-[clamp(220px,40vw,520px)] font-bold leading-none tracking-[-0.12em] opacity-[0.055] max-md:right-0 max-md:bottom-[-40px] max-md:text-[240px]"
                aria-hidden="true"
            >
                F.
            </div>
        </section>
    );
}