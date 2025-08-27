import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
  return (
    <div className='flex flex-row md:flex-row justify-center my-20'>
      <div className='w-9/12 md:w-9/12 lg:w-9/12 max-w-[700px]'>
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
