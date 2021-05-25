import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { ITaskItem } from './components/Task';
import AddTask from './components/AddTask'

const App = (): JSX.Element => {
	const [showAddTask, setShowAddTask] = useState<boolean>(false);
	const [tasks, setTasks] = useState<ITaskItem[]>([]);

	useEffect(() => {
		const getTasks = async () => {
			const fromServer = await fetchTasks();
			setTasks(fromServer);
		}

		getTasks();
	}, []);

	// Fetch tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		return await res.json();
	};

	const fetchTask = async (id: string) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		return await res.json();
	};

	// Add new task
	const addTask = async (task: ITaskItem) => {
		const res = await fetch('http://localhost:5000/tasks/', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(task)
		});

		const data = await res.json();

		setTasks([...tasks, data]);
	};

	// Delete task
	const deleteTask = async (id: string) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});

		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = async (id: string) => {
		const taskToToggle = await fetchTask(id);
		const updated = {...taskToToggle, reminder: !taskToToggle.reminder};

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(updated)
		});

		const data = await res.json();

		setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task));
	}

	return (
		<div className="container">
			<Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} addTaskShown={showAddTask} />
			{ showAddTask && <AddTask onAddTask={addTask} /> }
			{
				tasks.length ?
					(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
						:
					('No tasks to show')
			}
		</div>
	);
}

export default App;
