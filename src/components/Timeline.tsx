import { GanttChart } from 'lucide-react';
import FeaturePlaceholder from './FeaturePlaceholder';


const Timeline = () => {
  return (
    <FeaturePlaceholder
      title="Project Timeline & Gantt"
      description="Interactive dependency mapping and sprint scheduling across dates are not active in this build. Switch back to the primary workspace view to track task progress."
      icon={GanttChart}
      badgeText="Future Milestone"
    />
  );
};

export default Timeline;