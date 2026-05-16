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

    return (
        <div className="max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold m-5">
            Task Manager</h1>

        <AddTaskForm addTask={addTask} />

        <FilterBar />

        <SearchBar />

        <TaskList tasks={tasks}
         deleteTask={deleteTask} 
         toggleTask={toggleTask}
         />

        </div>
    )
}

export default HomePage