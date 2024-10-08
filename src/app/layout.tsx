import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { fontHeading, fontMono, fontSans } from '@/styles/fonts';
import '@/styles/globals.css';
import { Provider } from 'react-wrap-balancer';

export const metadata: Metadata = {
    description: 'Next.js TypeScript Tailwind CSS Template',
    title: 'Axiom Skeleton',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(fontSans.variable, fontHeading.variable, fontMono.variable)}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
};

export default RootLayout;
