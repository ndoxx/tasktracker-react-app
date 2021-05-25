import React from 'react';
import { FaTimes } from 'react-icons/fa';

export interface ITaskItem {
	id: string,
	text: string,
	day: string,
	reminder: boolean
}

interface ITaskProps {
	task: ITaskItem,
	onDelete: (id: string) => void,
	onToggle: (id: string) => void
}

const Task = (props: ITaskProps): JSX.Element => {

	return (
		<div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => props.onToggle(props.task.id)}>
			<h3>
				{props.task.text}
				<FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => props.onDelete(props.task.id)}/>
			</h3>
			<p>{props.task.day}</p>
		</div>
	);
}

export default Task;