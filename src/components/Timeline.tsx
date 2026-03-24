import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
  return (
    <div className='flex flex-row justify-center py-10 md:py-16'>
      <div className='w-full px-5 sm:w-11/12 sm:px-0 md:w-9/12 max-w-[700px]'>
        <Title id='timeline'>Work Experience</Title>
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            company={item.company}
            roles={item.roles}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
