import { useState, useEffect } from "react"

import AddTaskForm from "../components/AddTaskForm"
import FilterBar from "../components/FilterBar"
import SearchBar from "../components/SearchBar"
import TaskList from "../components/TaskList"

function HomePage() {

    const [filter, setFilter] = useState("all")

    const [searchQuery, setSearchQuery] = useState("")

    const [tasks, setTasks] = useState(() => {

        const savedTasks =
    localStorage.getItem("tasks")

    if(savedTasks) {
        return JSON.parse(savedTasks)
        }

        return []

    })

    // Tasks ko localStorage me save krna
    useEffect(() => {
        localStorage.setItem("tasks",
    JSON.stringify(tasks))
    }, [tasks])

    // Add task
    function addTask(newTask) {

        const taskObject = {
            id: Date.now(),
            text: newTask,
            completed: false
        }

        setTasks([...tasks, taskObject])
    }

    // Delete task
    function deleteTask(id) {
        
        const updatedTasks = tasks.filter((task) => {
        return task.id !== id
    })

    setTasks(updatedTasks)

    }

    // Complete task
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

    // Filter task
    const filteredTasks = tasks.filter((task) => {
    
        // Search
        const matchesSearch = task.text
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    
        // Filter
        const matchesFilter =
        filter === "all"
        || (
            filter === "active"
            && task.completed === false
        )
        || (
            filter === "completed"
            && task.completed === true
        )

        return matchesFilter && matchesSearch

    })

    return (
        <div className="max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold m-5">
            Task Manager</h1>

        <AddTaskForm addTask={addTask} />

        <FilterBar filter={filter}
        setFilter={setFilter}/>

        <SearchBar searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>

        <TaskList tasks={filteredTasks}
         deleteTask={deleteTask} 
         toggleTask={toggleTask}
         />

        </div>
    )
}

export default HomePage