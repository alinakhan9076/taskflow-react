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
    function addTask(taskText, taskCategory) {

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
            category: taskCategory
        }

        setTasks([...tasks, newTask])
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
        <div className="min-h-screen bg-blue-50 p-6">
        <div className="max-w-5xl mx-3 md:mx-auto mt-6 md:mt-10 bg-slate-100
        rounded-3xl shadow-xl p-4 md:p-8">

            <h1 className="text-4xl md:text-6xl font-bold text-center text-cyan-600 mb-8 ">
                TaskFlow
            </h1>
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
        
        </div>
    )
}

export default HomePage