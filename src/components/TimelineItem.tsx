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
    <>
      {/* ── Mobile: left accent line layout (hidden on md+) ── */}
      <div className="md:hidden mb-8 pl-4 border-l-2 border-stone-900 dark:border-stone-100">
        {/* Company label */}
        <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-3">
          {company}
        </p>

        {/* Roles */}
        {roles.map((role, idx) => (
          <div key={idx} className="mb-5 last:mb-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
              <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-50">
                {role.title}
              </h3>
              <span className="text-[11px] text-stone-400 dark:text-stone-500 shrink-0">
                {role.duration}
              </span>
            </div>

            {role.details.map((detail, i) => (
              <p
                key={i}
                className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mt-1.5
                before:content-['–'] before:mr-1.5 before:text-stone-300 dark:before:text-stone-600"
              >
                {detail}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* ── Desktop: dot + vertical line timeline (hidden below md) ── */}
      <ol className="pointer-events-none hidden md:block">
        <li className="flex">
          {/* Dot + vertical line column */}
          <div className="flex flex-col items-center mr-6 shrink-0">
            <div
              className="w-3 h-3 mt-2 rounded-full bg-stone-900 dark:bg-stone-100
              ring-4 ring-white dark:ring-stone-900 shrink-0"
            />
            <div className="w-0.5 flex-1 mt-2 bg-stone-200 dark:bg-stone-700" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pb-10">
            {/* Company */}
            <span
              className="inline-flex items-center mb-4 px-3 py-1 text-xs font-semibold
              tracking-widest uppercase rounded-full
              bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900"
            >
              {company}
            </span>

            {/* Roles */}
            {roles.map((role, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <div className="flex flex-wrap gap-2 items-baseline justify-between mb-2">
                  <h3 className="font-semibold text-base text-stone-900 dark:text-stone-50">
                    {role.title}
                  </h3>
                  <span
                    className="text-xs font-medium text-stone-400 dark:text-stone-500 shrink-0
                    bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-full"
                  >
                    {role.duration}
                  </span>
                </div>

                {role.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mt-1.5
                    before:content-['–'] before:mr-2 before:text-stone-300 dark:before:text-stone-600"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </li>
      </ol>
    </>
  );
}

export default TimelineItem;
