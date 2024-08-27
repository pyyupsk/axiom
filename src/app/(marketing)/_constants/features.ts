import { CodeIcon, LayersIcon, ShieldCheckIcon } from 'lucide-react';

interface FeatureItem {
    description: string;
    icon: React.ElementType;
    title: string;
}

export const features: FeatureItem[] = [
    {
        description:
            'Get up and running quickly with a pre-configured setup, enabling you to focus on building features instead of boilerplate code.',
        icon: CodeIcon,
        title: 'Rapid Development',
    },
    {
        description:
            'Leverage the power of Next.js and Prisma to build applications that are not only fast but can also scale effortlessly as your project grows.',
        icon: LayersIcon,
        title: 'Scalable Architecture',
    },
    {
        description:
            'Ensure code quality and security with TypeScript and NextAuth.js, providing type safety and robust authentication out of the box.',
        icon: ShieldCheckIcon,
        title: 'Type-Safe and Secure',
    },
];
