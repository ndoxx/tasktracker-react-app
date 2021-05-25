import React, {useState} from 'react';
import { ITaskItem } from './Task';
import { v4 as uuidv4 } from 'uuid';

interface IAddTaskProps {
	onAddTask: (task: ITaskItem) => void;
}

const AddTask = (props: IAddTaskProps): JSX.Element => {
	const [text, setText] = useState<string>('');
	const [day, setDay] = useState<string>('');
	const [reminder, setReminder] = useState<boolean>(false);

	const onSubmit = (e: any) => {
		e.preventDefault();

		if(!text) {
			alert('Please, add a task');
			return;
		}

		props.onAddTask({id: uuidv4(), text, day, reminder});
	}

	return (
		<form className='addForm' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>Task</label>
				<input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
			</div>
			<div className='form-control'>
				<label>Day & Time</label>
				<input type="text" placeholder="Add day & time" value={day} onChange={(e) => setDay(e.target.value)} />
			</div>
			<div className='form-control-check'>
				<label>Set Reminder</label>
				<input type="checkbox" value={reminder.toString()} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
			</div>

			<input type='submit' value='Save Task' className='btn btn-block' />
		</form>
	);
}

export default AddTask;