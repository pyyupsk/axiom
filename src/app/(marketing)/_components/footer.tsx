import Link from 'next/link';

import { navigation } from '../_constants/navigation';

export function Footer() {
    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()}{' '}
                    <Link
                        className="text-highlight underline"
                        href="https://github.com/pyyupsk/axiom"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Axiom
                    </Link>
                    , Made with ❤️ by{' '}
                    <Link
                        className="hover:underline"
                        href="https://github.com/pyyupsk"
                        rel="noreferrer"
                        target="_blank"
                    >
                        @pyyupsk
                    </Link>
                </p>
                <nav>
                    <ul className="flex space-x-6">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                                    href={item.href}
                                    target={item.external ? '_blank' : undefined}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
