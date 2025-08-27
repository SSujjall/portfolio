interface Role {
  title: string;
  duration: string;
  details: string[];
}

interface TimelineItemProps {
  company: string;
  roles: Role[];
}

function TimelineItem({ company, roles }: TimelineItemProps) {
  return (
    <ol className='pointer-events-none flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-600'>
      <li className='mb-10 border rounded-lg dark:border-stone-700 p-1 w-full ml-4'>
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full 
          mt-4 -left-1.5 border border-white
          dark:border-black dark:bg-stone-600" />

        {/* Company */}
        <div className="flex flex-row items-center mb-3">
          <span className='inline-block px-2 py-2 text-lg font-semibold text-white dark:text-black bg-stone-900 dark:bg-stone-50 rounded-md'>
            {company}
          </span>
        </div>

        {/* Roles */}
        {roles.map((role, idx) => (
          <div key={idx} className="mb-4">
            <div className='flex flex-wrap gap-4 flex-row items-center justify-between text-xs md:text-sm'>
              <h3 className='font-medium text-lg text-stone-900 dark:text-stone-50'>
                {role.title}
              </h3>
              <div className='my-1 text-base font-normal leading-none text-stone-400'>
                {role.duration}
              </div>
            </div>

            {role.details.map((detail, i) => (
              <p key={i} className='my-2 text-sm font-normal text-stone-500 dark:text-stone-300'>
                {detail}
              </p>
            ))}
          </div>
        ))}
      </li>
    </ol>
  );
}

export default TimelineItem;
