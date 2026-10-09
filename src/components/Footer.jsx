export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex min-h-[105px] w-[min(90rem,100%-6rem)] flex-wrap items-center justify-between gap-5 py-7 max-md:w-[calc(100%-2.25rem)]">
                <a href="#" className="text-[27px] font-bold tracking-[-0.09em] leading-none max-md:text-2xl">
                    FORM<span className="ml-[0.15em] align-super text-[10px] font-semibold">®</span>
                </a>
                <p className="text-[9px] font-medium tracking-wider text-muted uppercase max-md:hidden">
                    INDEPENDENT THINKING. INTENTIONAL DESIGN.
                </p>
                <p className="text-[9px] font-medium tracking-wider text-muted uppercase max-md:text-[8px]">
                    © FORM STUDIO 2026
                </p>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-[9px] font-medium tracking-wider uppercase transition-colors hover:text-ink max-md:text-[8px]"
                >
                    BACK TO TOP ↑
                </a>
            </div>
        </footer>
    );
}