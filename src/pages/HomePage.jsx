import { useState } from "react"

import AddTaskForm from "../components/AddTaskForm"
import FilterBar from "../components/FilterBar"
import SearchBar from "../components/SearchBar"
import TaskList from "../components/TaskList"

function HomePage() {

    const [tasks, setTasks] = useState([])

    function addTask(newTask) {

        const taskObject = {
            id: Date.now(),
            text: newTask,
            completed: false
        }

        setTasks([...tasks, taskObject])
    }

    return (
        <div className="max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold m-5">
            Task Manager</h1>

        <AddTaskForm addTask={addTask} />

        <FilterBar />

        <SearchBar />

        <TaskList tasks={tasks} />

        </div>
    )
}

export default HomePage