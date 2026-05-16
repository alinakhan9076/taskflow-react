function TaskList(props) {

    return (
        <div>

            {
                props.tasks.length === 0 ? (
                    <p>No tasks yet</p>
                ) : (
                    
                    props.tasks.map((task) => (

                        <div key={task.id}>
                            <p>{task.text}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default TaskList