import { ReactNode } from "react";

function Title({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div id={id} className="mb-12 text-center pointer-events-none">
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-4">
        {children}
      </h2>
      <div className="mx-auto w-12 h-0.5 bg-stone-900 dark:bg-stone-100 rounded-full" />
    </div>
  );
}

export default Title;
