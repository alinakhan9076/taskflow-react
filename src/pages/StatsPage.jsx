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
        <div>

            <h1 className="text-3xl font-bold mb-5"> 
                Stats Page
            </h1>

            <div className="space-y-3">

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