import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            className={`sticky top-0 z-50 border-b border-line transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_0_var(--color-line)]" : ""
                }`}
            style={{ background: "color-mix(in srgb, var(--color-bg) 92%, transparent)", backdropFilter: "blur(12px)" }}
        >
            <div className="mx-auto flex min-h-22.5 w-[min(90rem,100%-6rem)] items-center justify-between gap-4 max-md:w-[calc(100%-2.25rem)] max-md:min-h-18.75">
                <a href="#" className="text-[27px] font-bold tracking-[-0.09em] leading-none max-md:text-2xl">
                    FORM
                </a>

                <nav className="flex items-center gap-9.5 max-md:hidden" aria-label="Main navigation">
                    {[
                        { href: "#work", label: "Work", num: "01" },
                        { href: "#studio", label: "Studio", num: "02" },
                        { href: "#services", label: "Services", num: "03" },
                    ].map((item) => (
                        <a key={item.href} href={item.href} className="text-xs font-medium transition-colors hover:text-muted">
                            {item.label} <span className="ml-0.75 text-[9px] text-muted">{item.num}</span>
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="flex items-center gap-5 border border-line px-3.75 py-3 text-xs font-medium transition-all hover:border-accent hover:bg-accent max-md:hidden"
                >
                    Let's talk <span>↗</span>
                </a>

                {/* Mobile toggle */}
                <button
                    className="hidden h-10 w-10 flex-col items-center justify-center gap-1.5 max-md:flex"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className={`block h-[1.5px] w-full bg-ink transition-transform ${menuOpen ? "translate-y-[3.75px] rotate-45" : ""}`} />
                    <span className={`block h-[1.5px] w-full bg-ink transition-transform ${menuOpen ? "translate-y-[-3.75px] -rotate-45" : ""}`} />
                </button>
            </div>

            {/* Mobile nav */}
            {menuOpen && (
                <div className="border-t border-line bg-bg py-6">
                    <nav className="mx-auto flex w-[calc(100%-2.25rem)] flex-col gap-5">
                        {[
                            { href: "#work", label: "Work", num: "01" },
                            { href: "#studio", label: "Studio", num: "02" },
                            { href: "#services", label: "Services", num: "03" },
                        ].map((item) => (
                            <a key={item.href} href={item.href} onClick={closeMenu} className="flex justify-between text-xl font-medium tracking-tight">
                                {item.label} <span className="text-xs text-muted">{item.num}</span>
                            </a>
                        ))}
                        <a href="#contact" onClick={closeMenu} className="mt-4 border-t border-line pt-5 font-semibold">
                            Let's talk ↗
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}