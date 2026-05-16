import { useState } from "react"

import AddTaskForm from "../components/AddTaskForm"
import FilterBar from "../components/FilterBar"
import SearchBar from "../components/SearchBar"
import TaskList from "../components/TaskList"

function HomePage() {

    const [tasks, setTasks] = useState([])

    const [filter, setFilter] = useState("all")

    function addTask(newTask) {

        const taskObject = {
            id: Date.now(),
            text: newTask,
            completed: false
        }

        setTasks([...tasks, taskObject])
    }

    function deleteTask(id) {
        
        const updatedTasks = tasks.filter((task) => {
        return task.id !== id
    })

    setTasks(updatedTasks)

    }

    function toggleTask(id) {

        const updatedTasks = tasks.map((task) => {

            if(task.id === id) {

                return {
                    ...task,
                    completed: !task.completed
                }
            }

            return task
        })

        setTasks(updatedTasks)
    }

    const filteredTasks = tasks.filter((task) => {

        if(filter === "active") {
            return task.completed === false
        }

        if(filter === "completed") {
            return task.completed === true
        }

        return true
    })

    return (
        <div className="max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold m-5">
            Task Manager</h1>

        <AddTaskForm addTask={addTask} />

        <FilterBar filter={filter}
        setFilter={setFilter}/>

        <SearchBar />

        <TaskList tasks={filteredTasks}
         deleteTask={deleteTask} 
         toggleTask={toggleTask}
         />

        </div>
    )
}

export default HomePage