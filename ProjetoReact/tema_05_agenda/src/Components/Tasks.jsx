import TaskItem from './TaskItem';

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                //<h3>{task.text}</h3>
                //<h3 key={task.id}>{task.text}</h3>
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default Tasks;
