interface TimelineItemProps {
    company: string;
    title: string;
    duration: string;
    details: string[];
}

function TimelineItem({ company, title, duration, details }: TimelineItemProps) {
    return (
        <ol className='pointer-events-none flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-600'>
            <li className='mb-10 border rounded-lg dark:border-stone-700 p-1 w-full ml-4'>
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full 
                mt-4 -left-1.5 border border-white
                dark:border-black dark:bg-stone-600" />

                <div className='flex flex-wrap gap-4 flex-row items-center justify-between text-xs md:text-sm'>
                    <div className="flex flex-row items-center">
                        <span className='inline-block px-2 py-2 text-lg font-semibold text-white dark:text-black bg-stone-900 dark:bg-stone-50 rounded-md'>
                            {company}
                        </span>

                        <h3 className='font-medium ml-3 text-lg text-stone-900 dark:text-stone-50'>
                            {title}
                        </h3>
                    </div>

                    <div className='my-1 text-base font-normal leading-none text-stone-400'>
                        {duration}
                    </div>
                </div>

                {details.map((detail, index) => (
                    <p key={index} className='my-2 text-sm font-normal text-stone-500 dark:text-stone-300'>
                        {detail}
                    </p>
                ))}
            </li>
        </ol>
    );
}

export default TimelineItem;
