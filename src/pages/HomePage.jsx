import { useState } from "react"

import AddTaskForm from "../components/AddTaskForm"
import FilterBar from "../components/FilterBar"
import SearchBar from "../components/SearchBar"
import TaskList from "../components/TaskList"

function HomePage() {

    const [tasks, setTasks] = useState([])

    return (
        <div>
        <h1>Task Manager</h1>

        <AddTaskForm />

        <FilterBar />

        <SearchBar />

        <TaskList tasks={tasks} />
        </div>
    )
}

export default HomePage