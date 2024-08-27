import NextAuthLogo from '@/assets/images/logomark/nextauth.webp';
import NextjsLogo from '@/assets/images/logomark/nextjs.svg';
import PrismaLogo from '@/assets/images/logomark/prisma.svg';
import ShancnLogo from '@/assets/images/logomark/shancn.svg';
import TailwindLogo from '@/assets/images/logomark/tailwind.svg';
import TypescriptLogo from '@/assets/images/logomark/typescript.svg';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';

interface TechStackItem {
    description: string;
    logos: {
        alt: string;
        src: StaticImport;
    }[];
    title: string;
}

export const techStack: TechStackItem[] = [
    {
        description:
            'Next.js and TypeScript deliver powerful, scalable applications with robust type safety and enhanced developer experience.',
        logos: [
            {
                alt: 'Next.js Logo',
                src: NextjsLogo as StaticImport,
            },
            {
                alt: 'TypeScript Logo',
                src: TypescriptLogo as StaticImport,
            },
        ],
        title: 'Modern Framework + Type Safety',
    },
    {
        description:
            'Prisma ORM streamlines database management, while NextAuth.js ensures secure and flexible authentication.',
        logos: [
            {
                alt: 'Prisma Logo',
                src: PrismaLogo as StaticImport,
            },
            {
                alt: 'NextAuth Logo',
                src: NextAuthLogo as StaticImport,
            },
        ],
        title: 'Effortless Data + Secure Auth',
    },
    {
        description:
            'Tailwind CSS and Shadcn/UI provide a utility-first approach and pre-built components for beautiful, responsive designs.',
        logos: [
            {
                alt: 'Tailwind Logo',
                src: TailwindLogo as StaticImport,
            },
            {
                alt: 'Shadcn Logo',
                src: ShancnLogo as StaticImport,
            },
        ],
        title: 'Stylish UI + Ready Components',
    },
];
