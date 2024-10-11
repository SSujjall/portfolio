import { ReactNode } from 'react';

function Title({ children, id }: { children: ReactNode, id: string }) {
    return (
        <h1 id={id && id}
            className="text-3xl font-bold underline underline-offset-8 
            decoration-4 mb-8 text-stone-900 dark:text-stone-50 text-center
            pointer-events-none"
        >
            {children}
        </h1>
    )
}

export default Title;