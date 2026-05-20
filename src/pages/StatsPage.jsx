import { useState } from "react"

function StatsPage() {

    const [tasks] = useState(() => {

        const savedTasks = 
        localStorage.getItem("tasks")

        return savedTasks 
            ? JSON.parse(savedTasks)
         : []
    })

    const totalTasks = tasks.length

    const completedTasks =
    tasks.filter((task) => {
        return task.completed
    }).length

    const activeTasks = 
    totalTasks - completedTasks

    const completionPercentage =
    totalTasks === 0
    ? 0
    : Math.round (
        (completedTasks / totalTasks) * 100
    )

    return (
        <div className="max-w-3xl mx-3 md:mx-auto mt-6 md:mt-10
         bg-white text-black p-8 rounded-3xl shadow-xl">

            <h1 className="text-4xl font-bold text-cyan-700 mb-8"> 
                Stats Page
            </h1>

            <div className="space-y-4 text-xl">

                <p>
                    Total Tasks: {totalTasks}
                </p>

                <p>
                    Completed Tasks: {completedTasks}
                </p>

                <p>
                    Active Tasks: {activeTasks}
                </p>

                <p>
                    Completion Rate: {" "} 
                    {completionPercentage}%
                </p>
                
            </div>

        </div>
    )
}
    

export default StatsPage