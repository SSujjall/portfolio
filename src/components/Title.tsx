import { ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
    id?: string; // Make `id` optional if you want to allow `undefined`.
}

const Title: React.FC<TitleProps> = ({ children, id }: TitleProps) => {
    return (
        <h1 id={id}
            className="text-3xl font-bold underline underline-offset-8 
            decoration-4 mb-8 text-stone-900 dark:text-stone-50 text-center
            pointer-events-none"
        >
            {children}
        </h1>
    )
}

export default Title;