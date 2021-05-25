import React from 'react';
import Task, { ITaskItem } from './Task';


interface ITasksProps {
	tasks: ITaskItem[],
	onDelete: (id: string) => void,
	onToggle: (id: string) => void
}

const Tasks = (props: ITasksProps): JSX.Element => {

	return (
		<>
			{props.tasks.map((task, ) => (
				<Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>
			))}
		</>
	);
}

export default Tasks;