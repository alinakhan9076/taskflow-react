function TaskList(props) {

    return (
        <div>
            {
                props.tasks.length === 0 ? (
                    <p>No tasks yet</p>
                ) : (
                    <p>Tasks availale</p>
                )
            }
        </div>
    )
}

export default TaskList