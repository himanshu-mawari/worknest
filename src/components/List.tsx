import { ListTodo } from 'lucide-react';
import FeaturePlaceholder from './FeaturePlaceholder';


const List = () => {
  return (
    <FeaturePlaceholder
      title="Task List View"
      description="A structured, sortable table view for rapid bulk editing and filtering is scoped for a future release. Use the Board view to manage your active sprint tasks."
      icon={ListTodo}
      badgeText="Planned Feature"
    />
  );
};

export default List;