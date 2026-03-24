import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
  return (
    <div className="main-container py-5 md:py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
