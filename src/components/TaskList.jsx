import TaskItem from "./TaskItem"

function TaskList(props) {

    return (
        <div>

            {
                props.tasks.length === 0 ? (
                    <p>No tasks yet</p>
                ) : (
                    
                    props.tasks.map((task) => (

                        <TaskItem 
                        key={task.id}
                        task={task}
                        deleteTask={props.deleteTask}
                        toggleTask={props.toggleTask}
                        />
                        
                    ))
                )
            }
        </div>
    )
}

export default TaskList